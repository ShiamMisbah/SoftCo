"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type TypedDescriptionProps = {
  children: string;
  className?: string;
  cursorClassName?: string;
  typingSpeed?: number;
  startDelay?: number;
  showCursor?: boolean;
};

export function TypedDescription({
  children,
  className,
  cursorClassName,
  typingSpeed = 25,
  startDelay = 500,
  showCursor = true,
}: TypedDescriptionProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    setDisplayedText("");
    setIsTyping(false);

    if (!children.length) return;

    let index = 0;
    let interval: ReturnType<typeof setInterval>;

    const timeout = setTimeout(() => {
      setIsTyping(true);

      interval = setInterval(() => {
        index += 1;
        setDisplayedText(children.slice(0, index));

        if (index >= children.length) {
          clearInterval(interval);
          setIsTyping(false);
        }
      }, typingSpeed);
    }, startDelay);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [children, typingSpeed, startDelay]);

  return (
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.4 }}
      className={cn(
        "mt-5 text-sm leading-7 text-slate-800 sm:text-base font-light",
        className,
      )}
    >
      {displayedText}

      {showCursor && (
        <motion.span
          aria-hidden="true"
          className={cn(
            "ml-[5px] inline-block h-[1.3em] w-[1px] translate-y-[2px] bg-blue-500",
            cursorClassName,
          )}
          animate={{
            opacity: isTyping ? 1 : [1, 0, 1],
          }}
          transition={
            isTyping
              ? { duration: 0 }
              : {
                  duration: 0.8,
                  repeat: Infinity,
                  ease: "linear",
                }
          }
        />
      )}
    </motion.p>
  );
}
