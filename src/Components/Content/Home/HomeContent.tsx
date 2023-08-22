import React from 'react'
import './HomeContent.css'
import TypedText from './TypedText'
import { motion } from 'framer-motion';

const HomeContent: React.FC = () => {

  const strings = ['Web Developer', 'Welcome to Portfolio'];

  return (
    <div className='h-screen w-full pt-10 bg-gradient-to-r border-r-1 from-[#121212] via-[#212225] to-[#1F2022] rounded-br-[100px] z-10'>
        <div className="w-full h-full flex">
          <div className="w-full h-full flex justify-start items-center pl-24">
            <div className="text-[#EEEEEE]">
            <motion.div
              whileInView={{ y: 0, transition: { duration: 0.8 }, opacity: 1 }}
              initial={{ y: -150, opacity: 0 }}>
              <h6 className="text-3xl">Hello, My name is</h6>
              </motion.div>  
              <motion.div
              whileInView={{ x: 0, transition: { duration: 0.8, delay: 0.2 }, opacity: 1 }}
              initial={{ x: 350, opacity: 0 }}>
              <h1 className="text-[#FFD369] text-6xl font-bold">Arnel B. Costales</h1>
              </motion.div>
              <motion.div
              whileInView={{ x: 0, transition: { duration: 0.8, delay: 0.6 }, opacity: 1 }}
              initial={{ x: -350, opacity: 0 }}>
              <h4 className="text-5xl font-semibold">
                <TypedText strings={strings} typeSpeed={50} loop={true} />  
              </h4>
              </motion.div>
              <motion.div
              whileInView={{ y: 0, transition: { duration: 1.5 }, opacity: 1 }}
              initial={{ y: 150, opacity: 0 }}>
                <p className=" w-full text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quos quibusdam quod autem pariatur dolorem doloribus similique, tenetur rem explicabo reiciendis repellendus distinctio neque, quaerat magni? In enim laudantium sint?</p>          
              </motion.div>
              
            </div>
          </div>
          <div className="w-full h-full flex justify-center items-center">
            <div className="w-[350px] h-[350px] rounded-full bg-white overflow-hidden shadow-lg floating-element">
              <img src="prof.png" alt="" className='w-[350px] h-[350px]' />
            </div>
          </div>
        </div>
    </div>
  )
}

export default HomeContent