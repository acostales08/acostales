import React from 'react'
import TypedText from '../Home/TypedText'
import { motion } from 'framer-motion'


const AboutSection: React.FC = () => {

    const strings = [`Hello there! 👋 I'm Your Arnel B. Costales, a recent graduate with a strong passion for crafting digital experiences through code. I specialize in frontend development, and I'm on a thrilling journey to evolve into a fullstack engineer. With a knack for turning ideas into elegant, user-centric interfaces, I'm dedicated to creating web applications that not only function seamlessly but also leave a lasting impact.`];

  return (
    <motion.div 
        whileInView={{ x: 0, transition: { duration: 0.3 }, opacity: 1 }}
        initial={{ x: 500, opacity: 0 }}  
        className='h-auto w-full  bg-gradient-to-r from-[#1F2022] via-[#212225] to-[#121212] rounded-l-[100px] pt-16 p-1 md:px-28'>
        <div className="w-full h-16  flex justify-center items-center">
        <motion.div
          whileInView={{ y: 0, transition: { duration: 0.8 }, opacity: 1 }}
          initial={{ y: 100, opacity: 0 }}
        >
            <h1 className="w-cover h-fit bg-clip-text bg-gradient-to-r from-[#FFD369] to-[rgba(255,210,105,0.31)] text-5xl font-bold text-transparent ">ABOUT ME</h1>          
        </motion.div>
        </div>
        <div className="flex-col md:flex mt-10 container mx-auto">
            <div className="w-full md:w-[40%] h-full flex justify-center items-center">
                <img src="move.gif" alt=""  className='w-[350px] h-[350px]'/>
            </div>
            <div className=" w-full h-[450px] md:h-full text-[#EEEEEE] p-1 md:p-10">
                <p className="text-2xl">
                    <TypedText strings={strings} typeSpeed={4} loop={false} /> 
                </p>
            </div>
        </div>
    </motion.div>
  )
}

export default AboutSection