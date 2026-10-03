import React from 'react'
import HeroDetails from './HeroDetails'
import HeroDesign from './HeroDesign'
import { Dot } from 'lucide-react'

type Props = {}

const HeroSection = (props: Props) => {
  return (
    <div className="bg-card-dark pt-20">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center gap-10  text-white">
        <HeroDetails />
        <HeroDesign />
      </div>
      <div className="flex justify-center items-center pb-8">
        <span className="text-xs text-[#1ACCEB]"> CRM</span>
        <div className=" px-2 text-xs text-[#425C80]">
          <Dot />
        </div>

        <span className="text-xs text-[#8CA3C2]"> HRMS</span>
        <div className=" px-2 text-xs text-[#425C80]">
          <Dot />
        </div>
        <span className="text-xs text-[#8CA3C2]"> ERP</span>
        <div className=" px-2 text-xs text-[#425C80]">
          <Dot />
        </div>
        <span className="text-xs text-[#1ACCEB]"> AI AUTOMATION</span>
        <div className=" px-2 text-xs text-[#425C80]">
          <Dot />
        </div>
        <span className="text-xs text-[#8CA3C2]"> WEB APPS</span>
        <div className=" px-2 text-xs text-[#425C80]">
          <Dot />
        </div>
        <span className="text-xs text-[#8CA3C2]"> MOBILE APPS</span>
        <div className=" px-2 text-xs text-[#425C80]">
          <Dot />
        </div>
        <span className="text-xs text-[#1ACCEB]"> ED TECH</span>
        <div className=" px-2 text-xs text-[#425C80]">
          <Dot />
        </div>
        <span className="text-xs text-[#8CA3C2]"> SYSTEM INTEGRATION</span>
      </div>
    </div>
  );
}

export default HeroSection