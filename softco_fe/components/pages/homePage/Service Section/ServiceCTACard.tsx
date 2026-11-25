"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

type ServiceCTACardProps = {
  number?: string;
  category?: string;
  title: string;
  description?: string;
  buttonText?: string;
  illustration?: React.ReactNode;
  href?: string;
  color?: string;
  className?: string;
};

export default function ServiceCTACard({
  number = "06",
  category = "Let's work together",
  title,
  description,
  buttonText = "Let's talk",
  illustration,
  href = "#contact",
  color = "#1D4ED8",
  className = "",
}: ServiceCTACardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      whileHover={{ y: -6 }}
      transition={{
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={
        {
          "--card-color": color,
        } as React.CSSProperties
      }
      className={`
        group relative flex h-full flex-col
        overflow-hidden rounded-[28px]
        border border-(--card-color)
        bg-(--card-color)
        p-5 text-white sm:p-6
        ${className}
      `}
    >
      {/* Illustration */}
      <div
        className="
          relative flex aspect-[5/4] w-full
          items-center justify-center overflow-hidden
          rounded-[18px] border border-white/20
          bg-white/5 p-6
          [&>svg]:h-full [&>svg]:w-full
          [&>img]:h-full [&>img]:w-full
          [&>img]:object-contain
        "
      >
        {illustration}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col pt-6">
        <div className="mb-4 flex items-center justify-between">
          <span
            className="
              text-[11px] font-medium uppercase
              tracking-[0.15em] text-white/70
            "
          >
            {number} — {category}
          </span>

          <ArrowUpRight
            size={20}
            strokeWidth={1.5}
            className="
              transition-transform duration-300
              group-hover:translate-x-1
              group-hover:-translate-y-1
            "
          />
        </div>

        <h3
          className="
            text-[28px] font-medium leading-[1.15]
            tracking-tight lg:text-[32px]
          "
        >
          {title}
        </h3>

        {description && (
          <p className="mt-4 text-sm leading-relaxed text-white/75">
            {description}
          </p>
        )}

        {/* CTA button */}
        <div className="mt-auto pt-6">
          <Link
            href={href}
            className="
              flex w-full items-center justify-between
              rounded-xl bg-white px-5 py-4
              text-sm font-medium text-(--card-color)
              transition-all duration-300
              hover:bg-white/90
            "
          >
            {buttonText}

            <ArrowUpRight size={18} strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
