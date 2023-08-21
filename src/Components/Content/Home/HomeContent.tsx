import React from 'react'
import './HomeContent.css'
import TypedText from './TypedText'

const HomeContent: React.FC = () => {

  const strings = ['Web Developer', 'Welcome to Portfolio'];

  return (
    <div className='h-screen w-full pt-10 bg-gradient-to-r border-r-1 from-[#121212] via-[#212225] to-[#1F2022] rounded-br-[100px] z-10'>
        <div className="w-full h-full flex">
          <div className="w-full h-full flex justify-start items-center pl-24">
            <div className="text-[#EEEEEE]">
              <h6 className="text-3xl">Hello, My name is</h6>   
              <h1 className="text-[#FFD369] text-6xl font-bold">Arnel B. Costales</h1>
              <h4 className="text-5xl font-semibold">
                <TypedText strings={strings} typeSpeed={50} loop={true} />  
              </h4> 
              <p className=" w-full text-1xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quos quibusdam quod autem pariatur dolorem doloribus similique, tenetur rem explicabo reiciendis repellendus distinctio neque, quaerat magni? In enim laudantium sint?</p>          
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