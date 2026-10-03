"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import Services from "./Services";
import Logo from "../Logo";

type Props = {};

const Navbar = (props: Props) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.header
      initial={false}
      animate={{
        y: scrolled ? 12 : 0,
      }}
      transition={{
        duration: 0.35,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={
        scrolled
          ? "fixed inset-x-0 top-0 z-50 px-4"
          : "absolute inset-x-0 top-0 z-50 px-4"
      }
    >
      <motion.div
        animate={{
          scale: scrolled ? 0.985 : 1,
        }}
        transition={{
          duration: 0.35,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={`
          container mx-auto
          flex items-center justify-between
          px-4 py-3
          transition-[background,border,box-shadow,backdrop-filter,border-radius]
          duration-300

          ${
            scrolled
              ? `
                rounded-2xl
                border border-white/10
                bg-[#050911]/75
                shadow-[0_12px_50px_rgba(0,0,0,0.35)]
                backdrop-blur-xl
              `
              : `
                border border-transparent
                bg-transparent
              `
          }
        `}
      >
        <Logo />

        <Services />

        <Button
          className={
            scrolled
              ? "bg-blue-600 text-white hover:bg-blue-500"
              : "bg-white/10 text-white backdrop-blur-md hover:bg-white/15"
          }
        >
          Build with Us
        </Button>
      </motion.div>
    </motion.header>
  );
};

export default Navbar;
