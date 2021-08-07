import React from 'react'
import SocialConnect from '../UI/SocialConnect'

/**
* @author
* @function Footer
**/

const Footer = (props) => {
  return(
    <div className="container">
        <div className="flexRow flexCol justify-sb align-center" style={{margin:"50px 0"}}>
        <div className="mtb-10">
            <SocialConnect/>
        </div>
        <div className="footerMenus mtb-10">
            <nav>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Portfolios</a>
                <a href="#">Blog</a>
                <a href="#">Contact</a>

            </nav>
        </div>
        <div>
        <i class='fas fa-comments mtb-10' style={{fontSize:"48px",Color:"red"}}></i>
        </div>
        </div>
        
    </div>
   )

 }

export default Footer