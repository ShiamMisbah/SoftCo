import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import Services from './Services';
import { Button } from '../ui/button';
import Logo from '../Logo';

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className="w-full flex justify-between items-center container mx-auto p-3 sticky top-0 bg-transparent z-50">
      <Logo />
      <Services />
      <div>
        <Button> Build with Us </Button>
      </div>
    </div>
  );
}

export default Navbar