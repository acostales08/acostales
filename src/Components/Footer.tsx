import React from 'react'
import { FiLinkedin, FiFacebook, FiGithub } from 'react-icons/fi'

const Footer = () => {
  return (
    <div className=' h-16 w-full bg-gradient-to-r from-[#1F2022] via-[#212225] to-[#121212]'>
        <div className="container mx-auto flex justify-between items-center px-2 md:px-32 py-2">
          <div className="flex flex-col">
            <p className="text-white text-center ">follow me @</p>
            <div className="flex gap-3">
              <a href="https://github.com/acostales08">
                <div className="w-fit h-fit bg-[#2e323b] text-white rounded-full p-1 hover:bg-[#525a6e] cursor-pointer">
                  <FiGithub size={15}/>
                </div>                
              </a>
              <a href="https://www.facebook.com/arnel.costales.9421/">
                <div className="w-fit h-fit bg-[#2e323b] text-white rounded-full p-1 hover:bg-[#525a6e] cursor-pointer">
                  <FiFacebook size={15}/>
                </div>
              </a>
              <a href="https://www.linkedin.com/in/arnel-costales-b7b915254/">
                <div className="w-fit h-fit bg-[#2e323b] text-white rounded-full p-1 hover:bg-[#525a6e] cursor-pointer">
                  <FiLinkedin size={15}/>
                </div>
              </a>
            </div>
          </div>
          <div className="text-[#EEEE]">
            <p className="text-[14px] ">Develop by: Arnel Costales</p>
            <p className="text-[14px] ">&copy; 2023 All rights reserved.</p>
          </div>
          <div className="">
            <h3 className="text-[#FFD369] text-1xl font-medium">ACostales</h3>
          </div>
        </div>
    </div>
  )
}

export default Footer