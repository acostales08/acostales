import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

type Link = {
  link: string;
  href: string;
};

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const MenuToggle = () => {
    setIsOpen(!isOpen);
  };

  const Links: Link[] = [
    {
      link: 'About',
      href: '#About',
    },
    {
      link: 'Skills',
      href: '#Skills',
    },
    {
      link: 'Project',
      href: '#Project',
    },
    {
      link: 'Contact',
      href: '#Contact',
    },
  ];

  return (
    <nav className="  h-24 w-full flex justify-center items-center md:px-20 font-semibold bold bg-transparent z-30 absolute">
      <div className="container mx-auto flex justify-between px-10">
        <h1 className="text-[#FFD369] text-2xl">ACostales</h1>
        <ul className="text-[#EEEEEE] hidden md:flex gap-5 text-base">
          {Links.map(({ link, href }, index) => (
            <li
              key={index}
              className="text-[18px] cursor-pointer hover:scale-105 duration-100 hover:text-[#FFD369]"
              onClick={() => window.location.href = href}
            >
              {link}
            </li>
          ))}
        </ul>        
      </div>

      {/* <div onClick={MenuToggle} className="text-[#EEEEEE] cursor-pointer">
        {isOpen ? <FaBars size={30}/> : <FaTimes size={30}/>}
      </div>
      {!isOpen && (
        <div className="h-screen w-full bg-black"></div>
      )} */}
    </nav>
  );
};

export default NavBar;
