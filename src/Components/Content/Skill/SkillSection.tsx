import React from 'react'
import { Skillitems } from '../../../Contant/Skillitem'
import { motion } from 'framer-motion'



const SkillSection: React.FC = () => {
  return (
    <motion.div 
        whileInView={{ x: 0, transition: { duration: 0.4 }, opacity: 1 }}
        initial={{ x: -50, opacity: 0 }} 
        className='h-auto w-full bg-gradient-to-r border-r-1 from-[#121212] via-[#212225] to-[#1F2022] rounded-r-[100px] py-16 px-5 md:px-20'>

        <div className="w-full h-16  flex justify-center items-center ">
          <motion.div
            whileInView={{ y: 0, transition: { duration: 0.8, delay: 0.3 }, opacity: 1 }}
            initial={{ y: 100, opacity: 0 }}
          >          
            <h1 className="w-cover h-fit bg-clip-text bg-gradient-to-r from-[rgba(255,210,105,0.31)] to-[#FFD369] text-4xl md:text-5xl font-bold text-transparent ">Skills and Tools</h1>          
            <p className='text-center text-[#EEEEEE]'><i>Some of my Technical skills and tools</i></p> 
          </motion.div>       
        </div>

        <div className=" mt-10 h-auto md:h-[50vh] w-full flex flex-wrap gap-4 p-5 justify-center items-center">
            {Skillitems.map(({img}, index) => (
              <motion.div whileHover={{ scale: 1.2 }} >
                <div key={index} className="flex justify-center items-center w-[80px] h-[80px] md:w-[100px] md:h-[100px] rounded-2xl bg-[#EEEEEE] shadow-xl">
                    {img}
                </div>  
                </motion.div>              
            ))}

        </div>
    </motion.div>
  )
}

export default SkillSection