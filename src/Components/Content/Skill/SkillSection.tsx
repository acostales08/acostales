import React from 'react'
import { AiFillHtml5, AiFillGithub } from 'react-icons/ai'
import { FaCss3Alt, FaBootstrap } from 'react-icons/fa'
import { BiLogoGit } from 'react-icons/bi'
import { SiJavascript, SiPhp, SiMysql, SiReact, SiTypescript, SiVisualstudio, SiMui, SiTailwindcss } from 'react-icons/si'

const SkillSection: React.FC = () => {
  return (
    <div className='h-auto w-full bg-gradient-to-r border-r-1 from-[#121212] via-[#212225] to-[#1F2022] rounded-r-[100px] py-16 px-20'>
        <div className="w-full h-16  flex justify-center items-center ">
            <h1 className="w-cover h-fit bg-clip-text bg-gradient-to-r from-[rgba(255,210,105,0.31)] to-[#FFD369] text-5xl font-bold text-transparent ">Skills and Tools</h1>          
        </div>
        <div className=" w-full h-fit flex justify-center py-10 text-2xl">
            <p className="text-[#EEEEEE]  w-[70%] text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dolores asperiores natus. Labore dolorem nobis sunt vero, quidem reprehenderit. Cum autem possimus aspernatur id quae deleniti nemo, doloribus iste. Sunt.</p>
        </div>
        <div className=" mt-10 h-auto w-full flex flex-wrap gap-4 p-5 justify-center items-center">
            <div className="flex justify-center items-center w-[120px] h-[120px]  rounded-2xl bg-[#EEEEEE] shadow-xl">
                <AiFillHtml5 size={100} className='text-[#393E46]'/>
            </div>
            <div className="w-[120px] h-[120px] flex justify-center items-center  rounded-2xl bg-[#EEEEEE] shadow-xl">
                <FaCss3Alt size={100} className='text-[#393E46]'/>
            </div>
            <div className="w-[120px] h-[120px] flex justify-center items-center  rounded-2xl bg-[#EEEEEE] shadow-xl">
                <SiJavascript size={80} className='text-[#393E46]'/>                
            </div>
            <div className="w-[120px] h-[120px] flex justify-center items-center  rounded-2xl bg-[#EEEEEE] shadow-xl">
                <SiPhp size={100} className='text-[#393E46]'/>
            </div>
            <div className="w-[120px] h-[120px] flex justify-center items-center  rounded-2xl bg-[#EEEEEE] shadow-xl">
                <SiMysql size={100} className='text-[#393E46]'/>
            </div>
            <div className="w-[120px] h-[120px] flex justify-center items-center  rounded-2xl bg-[#EEEEEE] shadow-xl">
                <SiReact size={100} className='text-[#393E46]'/>
            </div>
            <div className="w-[120px] h-[120px] flex justify-center items-center  rounded-2xl bg-[#EEEEEE] shadow-xl">
                <SiTypescript size={80} className='text-[#393E46]'/>
            </div>
            <div className="w-[120px] h-[120px] flex justify-center items-center  rounded-2xl bg-[#EEEEEE] shadow-xl">
                <SiTailwindcss size={80} className='text-[#393E46]'/>
            </div>
            <div className="w-[120px] h-[120px] flex justify-center items-center  rounded-2xl bg-[#EEEEEE] shadow-xl">
                <FaBootstrap size={100} className='text-[#393E46]'/>
            </div>
            <div className="w-[120px] h-[120px] flex justify-center items-center  rounded-2xl bg-[#EEEEEE] shadow-xl">
                <SiMui size={100} className='text-[#393E46]'/>
            </div>
            <div className="w-[120px] h-[120px] flex justify-center items-center  rounded-2xl bg-[#EEEEEE] shadow-xl">
                <SiVisualstudio size={80} className='text-[#393E46]'/>
            </div>
            <div className="w-[120px] h-[120px] flex justify-center items-center  rounded-2xl bg-[#EEEEEE] shadow-xl">
                <BiLogoGit size={100} className='text-[#393E46]'/>
            </div>
            <div className="w-[120px] h-[120px] flex justify-center items-center  rounded-2xl bg-[#EEEEEE] shadow-xl">
                <AiFillGithub size={100} className='text-[#393E46]'/>
            </div>
        </div>
    </div>
  )
}

export default SkillSection