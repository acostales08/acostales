import React from 'react'
import {  HomeContent, AboutSection, SkillSection, ProjectSection, ContactSection, Footer } from '../Components/Content'
import NavBar from '../Components/NavBar/navBar'

const MainPage: React.FC = () => {
  return (
    <div className="h-auto w-full bg-[#121212] overflow-hidden ">
      <NavBar/>
        <HomeContent/>
        <AboutSection />
        <SkillSection />
        <ProjectSection/>
        <ContactSection/>
      <Footer/>
    </div>

  )
}

export default MainPage