import React from 'react'
import SocialConnect from '../UI/SocialConnect'
import './style.css'
import { Link,NavLink } from 'react-router-dom'

/**
* @author
* @function Footer
**/

const Footer = (props) => {
  return(
    <div className="container">
        <div className="flexRow flexCol justify-sb align-center" style={{margin:"50px 0"}}>
        <div>
        </div>
        <div className="footerMenus mtb-10">
            <nav>
                <NavLink to="/">Acceuil</NavLink>
                <NavLink to="/Specializing">Spécialités</NavLink>
                <NavLink to="/Experiences">Expériences</NavLink>
                <NavLink to="/LatestProjects">Projets</NavLink>
                <NavLink to="/Qualification">Formations</NavLink>
                <NavLink to="/Contact">Contact</NavLink>

            </nav>
        </div>
        
        </div>
        
    </div>
   )

 }

export default Footer