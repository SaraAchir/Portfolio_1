import React from 'react'
import Experiences from './components/Experiences'
import Expertise from './components/Expertise'
import Footer from './components/Footer'
import Hero from './components/hero'
import LatestProjects from './components/LatestProjects'
import Qualification from './components/Qualification'
import Specializing from './components/Specializing'
import Testimonials from './components/Testimonials'

/**
* @author
* @function App
**/

const App = (props) => {
  return(
    <div>
      <Hero/>
      <Specializing/>
      <Expertise/>
      <Experiences/>
      <LatestProjects/>
      <Qualification/>
      <Testimonials />
      <Footer/>
    </div>
   )

 }

export default App