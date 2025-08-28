import React from 'react'
import Banner from './Banner'
import Skills from './Skills'
import AboutMe from './AboutMe'
import Contact from './Contact'
import Projects from './Projects'
import Education from './Education'

function Home() {
  return (
    <div >
      <Banner/>
      <Skills/>
      <AboutMe/>
      <Projects/>
      <Education/>
      <Contact/>
    </div>
  )
}

export default Home