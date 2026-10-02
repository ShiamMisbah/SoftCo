import React from 'react'
import Logo from '../Logo'

type Props = {}

const BusinessDetails = (props: Props) => {
  return (
    <div className="flex justify-between items-center lg:gap-4">
      <div className="flex flex-col items-start gap-3 max-w-72">
        <Logo />
        <p className="font-bold text-xs text-[#8099BA]">
          BUSINESS SOFTWARE · AI · DIGITAL PRODUCTS
        </p>
        <p className="font-normal text-xs text-[#A6B8D1]">
          We build the systems that make modern businesses work better.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
        <div className="flex flex-col items-start gap-3 text-xs">
          <p className=" font-semibold text-white ">Solution</p>
          <p className=" font-normal text-[#9EB2CC]">CRM</p>
          <p className=" font-normal text-[#9EB2CC]">HRMS</p>
          <p className=" font-normal text-[#9EB2CC]">ERP</p>
          <p className=" font-normal text-[#9EB2CC]">AI Integration</p>
        </div>
        <div className="flex flex-col items-start gap-3 text-xs">
          <p className=" font-semibold text-white ">Build</p>
          <p className=" font-normal text-[#9EB2CC]">Web Apps</p>
          <p className=" font-normal text-[#9EB2CC]">Mobile Apps</p>
          <p className=" font-normal text-[#9EB2CC]">EdTech</p>
          <p className=" font-normal text-[#9EB2CC]">Custom Software</p>
        </div>
        <div className="flex flex-col items-start gap-3 text-xs">
          <p className=" font-semibold text-white ">Company</p>
          <p className=" font-normal text-[#9EB2CC]">About</p>
          <p className=" font-normal text-[#9EB2CC]">Work</p>
          <p className=" font-normal text-[#9EB2CC]">Insights</p>
          <p className=" font-normal text-[#9EB2CC]">Contact</p>
        </div>
      </div>
    </div>
  );
}

export default BusinessDetails