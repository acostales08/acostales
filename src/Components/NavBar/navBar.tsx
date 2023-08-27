import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { FiLinkedin, FiFacebook, FiGithub } from 'react-icons/fi'



const NavBar: React.FC = () => {

  return (
    <nav className="  h-24 w-full flex justify-center items-center md:px-20 font-semibold bold bg-transparent z-30 absolute">
      <div className="container mx-auto flex justify-between px-10">
        <h1 className="text-[#FFD369] text-2xl">ACostales</h1>
        <div className="flex gap-3">
          <a href="https://github.com/acostales08">
              <motion.div whileHover={{ scale: 1.2 }}  className="w-fit h-fit bg-[#2e323b] text-white rounded-full hover:bg-[#525a6e] p-1 cursor-pointer">
                <FiGithub size={25}/>
              </motion.div>            
          </a>
          <a href="https://www.facebook.com/arnel.costales.9421/">
              <motion.div whileHover={{ scale: 1.2 }}  className="w-fit h-fit bg-[#2e323b] text-white rounded-full hover:bg-[#525a6e] p-1 cursor-pointer">
                <FiFacebook size={25}/>
              </motion.div>            
          </a>
          <a href="https://www.linkedin.com/in/arnel-costales-b7b915254/">
              <motion.div whileHover={{ scale: 1.2 }}  className="w-fit h-fit bg-[#2e323b] text-white rounded-full hover:bg-[#525a6e] p-1 cursor-pointer">
                <FiLinkedin size={25}/>
              </motion.div>             
          </a>
        </div>        
      </div>
    </nav>
  );
};

export default NavBar;
