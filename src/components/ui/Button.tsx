import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  href: string;
  children: React.ReactNode;
}

const Button = ({ href, children }: ButtonProps) => {
  return (
    <a 
      href={href}
      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
    >
      {children}
      <ArrowRight className="ml-2 h-5 w-5" />
    </a>
  );
};

export default Button;