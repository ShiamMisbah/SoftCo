import { Eyebrow } from '@/components/Shared/Eyebrow';
import React from 'react'
import OperatingDesign from './OperatingDesign';
import OperatingDetails from './OperatingDetails';

type Props = {}

const OperatingLayerSection = (props: Props) => {
  return (
    <div className="container mx-auto py-20">
      <div className="flex flex-col gap-4 text-center">
        <span className="text-xs text-primary font-bold">
          ONE CONNECTED DIGITAL CORE
        </span>
        <h1 className="text-[42px] text-[#090E17] font-bold">
          More than software. A business operating layer.
        </h1>
        <p className="text-[16px] text-gray-600">
          SoftCo combines systems, automation and product engineering so data
          and workflows move cleanly across the business.
        </p>
      </div>
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto px-4">
          <div className="grid gap-6 lg:grid-cols-[1fr_1.08fr]">
            {/* LEFT PANEL */}
            <OperatingDesign />

            {/* RIGHT CONTENT */}
            <OperatingDetails />
          </div>
        </div>
      </section>
    </div>
  );
}

export default OperatingLayerSection