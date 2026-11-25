import { Eyebrow } from '@/components/Shared/Eyebrow';
import React from 'react'
import OperatingDesign from './OperatingDesign';
import OperatingDetails from './OperatingDetails';
import SectionHeading from '@/components/Shared/SectionHeading';
import ServiceCard from './ServiceCard';

import CustomSoftware from "@/assets/service_illustration/custom-software.svg";
import WebApplication from "@/assets/service_illustration/web-application.svg";
import MobileApp from "@/assets/service_illustration/mobile-app.svg";
import AIAutomation from "@/assets/service_illustration/ai-automation.svg";
import Integrations from "@/assets/service_illustration/integrations-dashboards-design.svg";
import ContactIllustration from "@/assets/service_illustration/contact-illustration.svg";

import Image from 'next/image';
import ServiceCTACard from './ServiceCTACard';

type Props = {}

export const services = [
  {
    number: "01",
    category: "Development",
    title: "Custom software development",
    description:
      "Spreadsheets and off-the-shelf tools can take you a long way. When they start getting in the way, we can build something more suited to your work, whether that is an internal operations tool, a customer portal, or a new product.",
    color: "#2563EB",
    illustration: <Image src={CustomSoftware} alt="" />,
  },
  {
    number: "02",
    category: "Web solutions",
    title: "Web application development",
    description:
      "We build web applications for tasks that need more than a basic website. Think customer portals, booking systems, internal tools, and dashboards that people can use through a browser.",
    color: "#0D9488",
    illustration: <Image src={WebApplication} alt="" />,
  },
  {
    number: "03",
    category: "Mobile solutions",
    title: "Mobile app development",
    description:
      " If your customers or team need to use a service on the move, we can help turn the idea into a mobile app. We will discuss the features, devices, and experience that make sense for your users.",
    color: "#4338CA",
    illustration: <Image src={MobileApp} alt="" />,
  },
  {
    number: "04",
    category: "Intelligence",
    title: "AI integration and automation",
    description:
      " AI can be useful for sorting inquiries, summarizing information, or helping people find answers in a large set of documents. We can explore where it fits in your workflow, connect it to your software, and plan for human review when the task calls for it.",
    color: "#7C3AED",
    illustration: <Image src={AIAutomation} alt="" />,
  },
  {
    number: "05",
    category: "Digital infrastructure",
    title: "Integrations, dashboards, and design",
    description:
      "Good software also needs the pieces behind the screen. We can connect tools through APIs, build reporting dashboards, design user interfaces, and develop the cloud and backend components that support an application.",
    color: "#0369A1",
    illustration: <Image src={Integrations} alt="" />,
  },
];

const ServiceSection = (props: Props) => {
  return (
    <div className="container mx-auto py-20 lg:px-8">
      <SectionHeading
        title="What we can build together"
        description="Whether you are starting with an idea or trying to improve a system you already use, we can help you work out what to build and how it should work."
      />
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto px-4">
          <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.number}
                className="
              flex shrink-0 snap-center
              w-full
            "
              >
                <ServiceCard {...service} className="w-full" />
              </div>
            ))}
            <ServiceCTACard
              number="06"
              category="Let's work together"
              title="Discuss your requirements"
              description="Have something in mind? Tell us what you're looking to build, and we'll explore how we can help."
              buttonText="Let's talk"
              illustration={<Image src={ContactIllustration} alt="" />}
              color="#1D4ED8"
              href="#contact"
            />
            {/* LEFT PANEL */}
            {/* <OperatingDesign /> */}

            {/* RIGHT CONTENT */}
            {/* <OperatingDetails /> */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ServiceSection;