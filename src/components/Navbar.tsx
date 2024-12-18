import React from 'react';
import { Menu, Globe, Phone } from 'lucide-react';
import Container from './ui/Container';

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a 
    href={href} 
    className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
  >
    {children}
  </a>
);

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-gray-900/95 backdrop-blur-sm z-50">
      <Container>
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-white">YESHA</span>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <NavLink href="#home">Home</NavLink>
              <NavLink href="#about">About</NavLink>
              <NavLink href="#products">Products</NavLink>
              <NavLink href="#global">Global Presence</NavLink>
              <NavLink href="#contact">Contact</NavLink>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Globe className="h-5 w-5 text-gray-300" />
            <Phone className="h-5 w-5 text-gray-300" />
            <div className="md:hidden">
              <Menu className="h-6 w-6 text-gray-300" />
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;