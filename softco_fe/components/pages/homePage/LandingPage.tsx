import React from 'react'
import HeroSection from './Hero Section/HeroSection';
import OperatingLayerSection from './Service Section/ServiceSection';
import BusinessSection from './Business Section/BusinessSection';
import AiSection from './Ai Section/AiSection';
import StatsSection from './StatsSection/StatsSection';
import ProductPipelineSection from './Product Pipeline Section/ProductPipelineSection';
import ContactSections from './Contact Section/ContactSection';
import ContactSection from './Contact Section/ContactSection';
import ServiceSection from './Service Section/ServiceSection';

type Props = {}

const LandingPage = (props: Props) => {
  return (
    <div>
      <HeroSection />
      <ServiceSection />
      <BusinessSection />
      <AiSection />
      <StatsSection />
      {/* <ProductPipelineSection /> */}
      <ContactSection />
    </div>
  );
}

export default LandingPage