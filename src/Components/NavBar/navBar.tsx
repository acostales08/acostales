import React from 'react';

type Link = {
  link: string;
  href: string;
}

const NavBar: React.FC = () => {
  const Links: Link[] = [
    {
      link: 'About',
      href: '#About'
    },
    {
      link: 'Skills',
      href: '#Skills'
    },
    {
      link: 'Project',
      href: '#Project'
    },
    {
      link: 'Contact',
      href: '#Contact'
    }
  ];

  return (
    <nav className=" h-24 w-full flex justify-between items-center px-20 font-semibold bold bg-transparent z-30 absolute">
      <h1 className="text-[#FFD369] text-2xl">ACostales</h1>
      <ul className="text-[#EEEEEE] hidden md:flex gap-5 text-base">
        {Links.map(({ link, href }, index) => (
          <li key={index} className="text-[18px] cursor-pointer hover:scale-105 duration-100 hover:text-[#FFD369]" onClick={() => window.location.href = href}>
            {link}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
