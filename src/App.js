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
import { IntlProvider } from "react-intl";
import { LOCALES } from "./i18n/locales";
 import { messages } from "./i18n/messages";

/**
* @author
* @function App
**/

const App = (props) => {
  //const locale = LOCALES.JAPANESE;
  const locale = navigator.language;
  console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",locale)
let lang;
if (locale==="en-US") {
   lang = LOCALES.ENGLISH;
} else {
   if (locale === "fr" || locale === "fr-FR") {
       lang = LOCALES.FRENCH;
   } else {
       lang = LOCALES.JAPANESE;
   }
}
  useEffect(()=>{
AOS.init({
  duration:1000,
});
  },[])
  return(

    <IntlProvider
    messages={messages[lang]}
    locale={lang}
    defaultLocale={LOCALES.ENGLISH}
  >       <div>
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
    </div>
  </IntlProvider>
   )

 }

export default App 