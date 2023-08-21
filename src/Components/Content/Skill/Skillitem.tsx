
import { AiFillHtml5, AiFillGithub } from 'react-icons/ai';
import { FaCss3Alt, FaBootstrap } from 'react-icons/fa';
import { BsGit } from 'react-icons/bs'
import { SiJavascript, SiPhp, SiMysql, SiReact, SiTypescript, SiVisualstudio, SiMui, SiTailwindcss } from 'react-icons/si';

export type Props = {
    logo: React.ReactNode; 
  };

export const Skillitems = [
    {
        logo: <AiFillHtml5 size={90} className='text-[#393E46]'/>
    },
    {
        logo: <FaCss3Alt size={90} className='text-[#393E46]'/>
    },
    {
        logo: <SiMui size={80} className='text-[#393E46]'/>
    },
    {
        logo: <SiTailwindcss size={80} className='text-[#393E46]'/>
    },
    {
        logo: <FaBootstrap size={80} className='text-[#393E46]'/>
    },
    {
        logo: <SiJavascript size={80} className='text-[#393E46]'/>
    },
    {
        logo: <SiTypescript size={80} className='text-[#393E46]'/>
    },
    {
        logo: <SiReact size={80} className='text-[#393E46]'/>
    },
    {
        logo: <SiPhp size={80} className='text-[#393E46]'/>
    },
    {
        logo: <SiMysql size={80} className='text-[#393E46]'/>
    },
    {
        logo: <SiVisualstudio size={80} className='text-[#393E46]'/>
    },
    {
        logo: <BsGit size={80} className='text-[#393E46]'/>
    },
    {
        logo: <AiFillGithub size={80} className='text-[#393E46]'/>
    },

];
