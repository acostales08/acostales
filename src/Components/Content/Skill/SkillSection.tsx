import React from 'react'
import { Skillitems, Props } from './Skillitem'


const SkillSection: React.FC<Props> = () => {
  return (
    <div className='h-auto w-full bg-gradient-to-r border-r-1 from-[#121212] via-[#212225] to-[#1F2022] rounded-r-[100px] py-16 px-20'>
        <div className="w-full h-16  flex justify-center items-center ">
            <h1 className="w-cover h-fit bg-clip-text bg-gradient-to-r from-[rgba(255,210,105,0.31)] to-[#FFD369] text-5xl font-bold text-transparent ">Skills and Tools</h1>          
        </div>
        <div className=" w-full h-fit flex justify-center py-10 text-2xl">
            <p className="text-[#EEEEEE]  w-[70%] text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dolores asperiores natus. Labore dolorem nobis sunt vero, quidem reprehenderit. Cum autem possimus aspernatur id quae deleniti nemo, doloribus iste. Sunt.</p>
        </div>
        <div className=" mt-10 h-auto w-full flex flex-wrap gap-4 p-5 justify-center items-center">
            {Skillitems.map(({logo}, index) => (
                <div key={index} className="flex justify-center items-center w-[120px] h-[120px]  rounded-2xl bg-[#EEEEEE] shadow-xl">
                    {logo}
                </div>                
            ))}

        </div>
    </div>
  )
}

export default SkillSection