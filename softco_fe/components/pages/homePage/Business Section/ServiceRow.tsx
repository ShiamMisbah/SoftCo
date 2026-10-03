"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

import React from "react";

type Props = {
  service: service;
};

export interface service {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  tag: string;
}

const rowVariants = {
  hidden: {
    opacity: 0,
    y: 28,
    scale: 0.98,
    filter: "blur(8px)",
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function ServiceIcon() {
  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      transition={{ duration: 0.2 }}
      className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50"
    >
      {/* vertical pill */}
      <div className="relative flex h-10 w-7 items-center justify-center rounded-xl border border-slate-200 bg-white">
        {/* vertical line */}
        <div className="absolute h-7 w-px bg-slate-200" />

        {/* horizontal line */}
        <div className="absolute h-px w-4 bg-slate-200" />

        {/* glowing dot */}
        <motion.span
          className="relative z-10 h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,.65)]"
          animate={{
            scale: [1, 1.22, 1],
            opacity: [0.7, 1, 0.7],
            boxShadow: [
              "0 0 4px rgba(59,130,246,.35)",
              "0 0 12px rgba(59,130,246,.85)",
              "0 0 4px rgba(59,130,246,.35)",
            ],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </motion.div>
  );
}

const ServiceRow = ({ service }: Props) => {
  return (
    <motion.div
      variants={rowVariants}
      className="rounded-[24px] border border-slate-200 bg-white px-4 py-4"
    >
      {/* hover wash */}
      <motion.div
        variants={{
          hover: { opacity: 1 },
        }}
        initial={{ opacity: 0 }}
        className="
          pointer-events-none absolute inset-0
          bg-[linear-gradient(90deg,rgba(59,130,246,0.035),transparent_50%)]
        "
      />

      <div
        className="
          relative grid items-center gap-4
          md:grid-cols-[72px_280px_1fr_auto_auto]
          lg:grid-cols-[72px_320px_1fr_auto_auto]
        "
      >
        {/* ICON */}
        <ServiceIcon />

        {/* TITLE */}
        <div className="flex min-w-0 items-center gap-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="
              flex h-9 w-9 shrink-0 items-center justify-center
              rounded-full border border-blue-100
              bg-blue-50 text-xs font-semibold text-blue-500
            "
          >
            {service.number}
          </motion.div>

          <div className="min-w-0">
            <h3 className="text-lg font-semibold tracking-[-0.02em] text-slate-900 sm:text-xl">
              {service.title}
            </h3>

            <p className="mt-1 text-[11px] text-slate-400 sm:text-xs">
              {service.subtitle}
            </p>
          </div>
        </div>

        {/* DESCRIPTION */}
        <p className="text-sm leading-6 text-slate-500 md:max-w-[440px]">
          {service.description}
        </p>

        {/* TAG */}
        <motion.div
          whileHover={{ y: -1 }}
          className="
            w-fit rounded-lg
            bg-[#050911]
            px-3 py-2
            text-[9px] font-semibold
            tracking-wide text-cyan-400
          "
        >
          {service.tag}
        </motion.div>

        {/* ARROW */}
        <motion.button
          whileHover={{
            scale: 1.08,
            rotate: 3,
          }}
          whileTap={{ scale: 0.95 }}
          className="
            flex h-10 w-10 items-center justify-center
            rounded-full border border-slate-200
            bg-slate-50 text-slate-500
            transition-colors
            hover:border-blue-200
            hover:bg-blue-50
            hover:text-blue-500
          "
          aria-label={`Open ${service.title}`}
        >
          <ArrowUpRight className="h-4 w-4" />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ServiceRow;
