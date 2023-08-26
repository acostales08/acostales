import { motion } from 'framer-motion'
import React from 'react'

const ProjectSection: React.FC = () => {

    
  return (
    <motion.div 
        whileInView={{ x: 0, transition: { duration: 0.4 }, opacity: 1 }}
        initial={{ x: 500, opacity: 0 }}  
        className='h-auto w-full bg-gradient-to-r border-[#404144] from-[#1F2022] via-[#212225] to-[#121212] rounded-l-[100px] py-16 px-16'>
        <div className="w-full h-16  flex justify-center items-center">
        <motion.div
          whileInView={{ y: 0, transition: { duration: 0.8 }, opacity: 1 }}
          initial={{ y: 100, opacity: 0 }}
        >
            <h1 className="w-cover h-fit bg-clip-text bg-gradient-to-r from-[#FFD369] to-[rgba(255,210,105,0.31)] text-5xl font-bold text-transparent ">PROJECTS</h1>          
        </motion.div>
        </div>
        <div className="container mx-auto h-auto w-full flex flex-wrap gap-3 mt-10 justify-center items-center">
            <div className="border bg-white rounded-lg w-[360px] h-[250px]">
                <img src="royalcharm.png" alt="" />
            </div>
            <div className="border bg-white rounded-lg w-[360px] h-[250px]">
                <img src="qrci.png" alt="" />
            </div>
            <div className="border bg-white rounded-lg w-[360px] h-[250px]">

            </div>
            <div className="border bg-white rounded-lg w-[360px] h-[250px]">

            </div>
            <div className="border bg-white rounded-lg w-[360px] h-[250px]">

            </div>
            <div className="border bg-white rounded-lg w-[360px] h-[250px]">

            </div>
        </div>
    </motion.div >
  )
}

export default ProjectSection