import React, { useEffect } from 'react'
import Experiences from './components/Experiences'
import Expertise from './components/Expertise'
import Footer from './components/Footer'
import Hero from './components/hero'
import LatestProjects from './components/LatestProjects'
import Qualification from './components/Qualification'
import Specializing from './components/Specializing'
import Testimonials from './components/Testimonials'
import {BrowserRouter ,Route} from 'react-router-dom'
import Home from './components/Home'
import AOS from 'aos'
import 'aos/dist/aos.css'

/**
* @author
* @function App
**/

const App = (props) => {
  useEffect(()=>{
AOS.init({
  duration:1000,
});
  },[])
  return(
    <BrowserRouter>
    <Hero/>
      <Route exact path="/" component={Home}/>
      <Route srict path="/Specializing" component={Specializing}/>
      <Route path="/Expertise" component={Expertise}/>
      <Route path="/Experiences" component={Experiences}/>
      <Route path="/LatestProjects" component={LatestProjects}/>
      <Route path="/Qualification" component={Qualification}/>
      <Route path="/Contact" component={Testimonials}/>
      <Footer/>
    </BrowserRouter>
   )

 }

export default App 