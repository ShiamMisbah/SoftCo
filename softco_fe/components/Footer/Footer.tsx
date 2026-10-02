import React from 'react'
import { Separator } from '../ui/separator';
import BusinessDetails from './BusinessDetails';

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className="bg-card-foreground flex flex-col lg:px-24 pt-14.5 pb-8.5 gap-9">
      <BusinessDetails />
      <Separator className=" bg-[#1F2E45]" />
      <div className="flex flex-col lg:flex-row justify-between items-center gap-4 text-sm font-normal text-[#7A8CA8]">
        <p>Copyright © 2023 Your Company. All rights reserved.</p>
        <p>softco.it.com</p>
      </div>
    </div>
  );
}

export default Footer