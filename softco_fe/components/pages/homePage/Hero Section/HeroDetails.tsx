"use client";

import React from 'react'
import { motion } from "motion/react";
import { Button } from '@/components/ui/button';
import { TypedDescription } from './TypedDescription';
import { Eyebrow } from '@/components/Shared/Eyebrow';

type Props = {}

const benefits = [
  "AI-native architecture",
  "Enterprise workflows",
  "End-to-end delivery",
];

const HeroDetails = (props: Props) => {
  return (
    <section className="relative overflow-hidden xl:py-16 p-4 text-white lg:flex-1">
      <div className="relative mx-auto flex max-w-7xl items-center">
        <div className="max-w-full">
          {/* Eyebrow */}
          <h4 className="text-blue-500">
            Software built around the way you work
          </h4>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
            }}
            className="max-w-[720px] text-[32px] font-bold leading-[1.03] text-black sm:text-[48px] mt-8"
          >
            YOUR TAILORED<br></br>BUSINESS SOFTWARE
          </motion.h1>

          {/* Description */}
          <TypedDescription>
            Some businesses need a better way to follow up with customers.
            Others need an app for a new service or a system that brings
            scattered information together. SoftCo builds software for those
            kinds of challenges, from our base in Dhaka.
          </TypedDescription>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.6 }}
            className="mt-7 flex flex-wrap items-center gap-3"
          >
            <motion.div
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                size="lg"
                className="h-11 rounded-xl bg-blue-500 px-6 text-sm font-medium text-white shadow-[0_0_30px_rgba(59,130,246,.18)] transition-shadow hover:bg-blue-600 hover:shadow-[0_0_40px_rgba(59,130,246,.35)]"
              >
                Start a project
              </Button>
            </motion.div>

            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
              <Button
                size="lg"
                variant="outline"
                className="h-11 rounded-xl border-blue-400/25 bg-blue-950/30 px-6 text-sm text-white backdrop-blur-sm hover:bg-blue-950/50 hover:text-white"
              >
                Explore our services
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default HeroDetails