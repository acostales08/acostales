import React from 'react'
import './HomeContent.css'
import TypedText from './TypedText'
import { motion } from 'framer-motion';
import { Button } from '@mui/material';


const HomeContent: React.FC = () => {

  const handleDownloadCV = () => {
    const cvFileUrl = 'my-CV.pdf';
    const anchor = document.createElement('a');
    anchor.href = cvFileUrl;
    anchor.download = 'my-CV.pdf'; 
    anchor.style.display = 'none';
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  };

  const strings = ['Web Developer','Aspiring Fullstack Developer', 'Welcome to Portfolio'];

  return (
    <div className='h-screen w-full pt-10 bg-gradient-to-r border-r-1 from-[#121212] via-[#212225] to-[#1F2022] rounded-br-[100px] z-10 '>
        <div className="container mx-auto w-full h-full flex flex-col md:flex-row">
          <div className=" w-full h-[50%] md:h-full flex justify-center md:justify-start items-center  px-3 md:pl-24 order-2 md:order-1">
            <div className="text-[#EEEEEE] text-center md:text-start">
            <motion.div
              whileInView={{ y: 0, transition: { duration: 0.8 }, opacity: 1 }}
              initial={{ y: -150, opacity: 0 }}>
              <h6 className="text-2xl md:text-3xl">Hello, My name is</h6>
              </motion.div>  
              <motion.div
              whileInView={{ x: 0, transition: { duration: 0.8, delay: 0.2 }, opacity: 1 }}
              initial={{ x: 350, opacity: 0 }}>
              <h1 className="text-[#FFD369] text-4xl md:text-6xl font-bold tracking-wide">Arnel B. Costales</h1>
              </motion.div>
              <motion.div
              whileInView={{ x: 0, transition: { duration: 0.8, delay: 0.6 }, opacity: 1 }}
              initial={{ x: -150, opacity: 0 }}>
              <h4 className="text-3xl md:text-5xl font-semibold text-[#FFD369] w-[700px]">
                <TypedText strings={strings} typeSpeed={50} loop={true} />  
              </h4>
              </motion.div>
              <motion.div
              whileInView={{ y: 0, transition: { duration: 1.5 }, opacity: 1 }}
              initial={{ y: 150, opacity: 0 }}
              >
                <p className=" w-full md:text-6xl font-semibold">I Build & Design Web Interfaces.</p>          
              </motion.div>
              <motion.div
                 whileInView={{
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.8, ease: [0, 0.71, 0.2, 1.01], delay: 1 }
                }}
                initial={{ opacity: 0, scale: 0.5 }}
              >
                <Button variant='contained'
                onClick={handleDownloadCV}
                style={{
                backgroundColor: '#282F44',
                color: '#fffff',
                marginTop: '15px',
                marginBottom: '30px',
                fontSize: '16px',
              }}>Download CV</Button>
              </motion.div>

            </div>
          </div>
          <div className=" w-full h-auto md:h-full flex justify-center items-center  pt-16 md:pt-0 order-1 md:order-2">
          <motion.div
                 whileInView={{
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 3, ease: [0, 0.71, 0.2, 1.01], delay: 0.8 }
                }}
                initial={{ opacity: 0, scale: 0.5 }}
              >
            <div className="w-[200px] h-[200px] md:w-[350px] md:h-[350px] rounded-full bg-white overflow-hidden mt-8 md:mt-0 shadow-lg floating-element" style={{
              boxShadow: "0 4px 6px 1px rgba(240, 240, 240, 0.3), 0 2px 4px 1px rgba(240, 240, 240, 0.08)"
            }}>
              <img src="prof.png" alt="" className='w-[200px] h-[200px] md:w-[350px] md:h-[350px]' />
            </div>
            </motion.div>
          </div>
        </div>
    </div>
  )
}

export default HomeContent