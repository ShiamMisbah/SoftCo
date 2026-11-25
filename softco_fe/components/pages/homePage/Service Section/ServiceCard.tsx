"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";


type ServiceCardProps = {
  number: string;
  category?: string;
  title: string;
  description: string;
  illustration?: React.ReactNode;
  href?: string;
  color?: string;
  className?: string;
};

export default function ServiceCard({
  number,
  category,
  title,
  description,
  illustration,
  href,
  color = "#2563EB",
  className = "",
}: ServiceCardProps) {
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
        rounded-[28px] border border-(--card-color)/60
        bg-white p-5 sm:p-6
        transition-shadow duration-300
        hover:shadow-[0_12px_40px_color-mix(in_srgb,var(--card-color)_10%,transparent)]
        ${className}
      `}
    >
      {/* Illustration container */}
      <div
        className="
          relative flex aspect-[5/4] w-full
          items-center justify-center overflow-hidden
          rounded-[18px]
          border border-(--card-color)/20
          bg-(--card-color)/5
        "
      >
        {illustration}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col pt-6">
        {/* Number and category */}
        <div className="mb-4 flex items-center justify-between gap-4">
          <span
            className="
              text-[11px] font-medium uppercase
              tracking-[0.15em] text-(--card-color)
            "
          >
            {number}
            {category && ` — ${category}`}
          </span>

          {href && (
            <Link
              href={href}
              aria-label={`Learn more about ${title}`}
              className="
                flex size-9 shrink-0 items-center
                justify-center rounded-full
                border border-(--card-color)/20
                text-(--card-color)
                transition-colors duration-300
                hover:border-(--card-color)
                hover:bg-(--card-color)
                hover:text-white
              "
            >
              <ArrowUpRight
                size={18}
                strokeWidth={1.5}
                className="
                  transition-transform duration-300
                  group-hover:rotate-12
                "
              />
            </Link>
          )}
        </div>

        {/* Heading */}
        <h3
          className="
            text-[28px] font-medium leading-[1.15]
            tracking-tight text-(--card-color)
            lg:text-[32px]
          "
        >
          {title}
        </h3>

        {/* Description */}
        <p className="mt-4 text-sm leading-relaxed text-slate-500">
          {description}
        </p>
      </div>
    </motion.article>
  );
}
