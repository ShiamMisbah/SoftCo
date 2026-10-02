import React from 'react'
import HeroDetails from './HeroDetails'
import HeroDesign from './HeroDesign'

type Props = {}

const HeroSection = (props: Props) => {
  return (
    <div className=" bg-card-dark">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center gap-10 py-20 text-white">
        <HeroDetails />
        <HeroDesign />
      </div>
    </div>
  );
}

export default HeroSection