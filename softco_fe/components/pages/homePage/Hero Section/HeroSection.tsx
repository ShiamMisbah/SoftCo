import React from 'react'
import HeroDetails from './HeroDetails'
import HeroDesign from './HeroDesign'
import { Dot } from 'lucide-react'
import hero_bg from "@/assets/backgrounds/hero_bg.png"
import Image from 'next/image'
import FluidBackground from '@/components/Shared/FluidBackground'

type Props = {}

const capabilities = [
  { label: "CRM", active: true },
  { label: "HRMS", active: false },
  { label: "ERP", active: false },
  { label: "AI AUTOMATION", active: true },
  { label: "WEB APPS", active: false },
  { label: "MOBILE APPS", active: false },
  { label: "ED TECH", active: true },
  { label: "SYSTEM INTEGRATION", active: false },
];

const HeroSection = (props: Props) => {
  return (
    <div className="bg-blue-50 pt-28">
      {/* Fluid background */}
      <FluidBackground
        colorFrom="#2563EB"
        colorTo="#38BDF8"
        intensity={0.5}
        opacity={0.15}
        className="left-[35%] -right-[15%]"
      />
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center lg:px-8 gap-4  text-white z-10">
        <HeroDetails />
        <div className="w-full flex-1">
          <Image src={hero_bg} alt="hero_bg" />
        </div>

        {/* <HeroDesign /> */}
      </div>
      <div className="flex flex-wrap items-center justify-center gap-y-2 py-8 z-10">
        {capabilities.map((item, index) => (
          <div key={item.label} className="flex items-center">
            <span
              className={`whitespace-nowrap text-[10px] sm:text-xs ${
                item.active ? "text-blue-500" : "text-slate-400"
              }`}
            >
              {item.label}
            </span>

            {index < capabilities.length - 1 && (
              <div className="px-2 text-[#425C80]">
                <Dot />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default HeroSection