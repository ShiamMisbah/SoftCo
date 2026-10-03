"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import ServiceRow, { service } from "./ServiceRow";

const services : service[] = [
  {
    number: "01",
    title: "Business Platforms",
    subtitle: "CRM · HRMS · ERP · dashboards",
    description:
      "Systems designed around internal workflows, approvals, reporting and data integrity.",
    tag: "SYSTEMS",
  },
  {
    number: "02",
    title: "AI + Automation",
    subtitle: "Agents · copilots · workflow intelligence",
    description:
      "Practical AI embedded inside the processes where it saves time or improves decisions.",
    tag: "INTELLIGENCE",
  },
  {
    number: "03",
    title: "Digital Products",
    subtitle: "Web apps · mobile apps · SaaS",
    description:
      "Customer-facing experiences with modern product UX and scalable engineering.",
    tag: "PRODUCT",
  },
  {
    number: "04",
    title: "Integration Layer",
    subtitle: "APIs · data sync · legacy modernization",
    description:
      "Connect tools, data sources and services without rebuilding everything at once.",
    tag: "CONNECT",
  },
  {
    number: "05",
    title: "EdTech",
    subtitle: "LMS · portals · assessment systems",
    description:
      "Learning and education platforms built for institutions, teams and digital-first programs.",
    tag: "LEARN",
  },
];
type Props = {};

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.11,
      delayChildren: 0.1,
    },
  },
};

const BusinessSection = (props: Props) => {
  return (
    <section className="bg-[#f6fbff] py-14 sm:py-20">
      <div className="flex flex-col gap-4 text-center">
        <span className="text-xs text-primary font-bold">CAPABILITIES</span>
        <h1 className="text-[42px] text-[#090E17] font-bold">
          Build the layer your business is missing.
        </h1>
        <p className="text-[16px] text-gray-600">
          Strategy, UX, engineering, integration and cloud delivery across
          business systems and customer products.
        </p>
      </div>
      <div className="container mx-auto pt-16  px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          className="space-y-3"
        >
          {services.map((service) => (
            <ServiceRow key={service.number} service={service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BusinessSection;
