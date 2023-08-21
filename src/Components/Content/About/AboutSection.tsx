import React from 'react'
import TypedText from '../Home/TypedText'
import { motion } from 'framer-motion'


const AboutSection: React.FC = () => {

    const strings = ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis dolor atque, quidem autem impedit provident aut quod, nobis ratione eveniet explicabo excepturi esse qui dolore perferendis veniam saepe quibusdam laudantium vero mollitia id delectus sint. Praesentium totam qui ut ab!'];

  return (
    <motion.div animate={{x:-1000}} className='h-screen w-full ml-[1000px] bg-gradient-to-r from-[#1F2022] via-[#212225] to-[#121212] rounded-l-[100px] pt-16 px-28'>
        <div className="w-full h-16  flex justify-center items-center">
            <h1 className="w-cover h-fit bg-clip-text bg-gradient-to-r from-[#FFD369] to-[rgba(255,210,105,0.31)] text-5xl font-bold text-transparent ">ABOUT ME</h1>          
        </div>
        <div className="flex  mt-10 ">
            <div className=" w-[40%] h-full flex justify-center items-center">
                <img src="move.gif" alt=""  className='w-[350px] h-[350px]'/>
            </div>
            <div className=" w-full h-full text-[#EEEEEE] p-10">
                <p className=" text-1xl">
                    <TypedText strings={strings} typeSpeed={10} loop={false} /> 
                </p>
            </div>
        </div>
    </motion.div>
  )
}

export default AboutSection