import React from 'react'
import './style.css'
/**
* @author
* @function SocialConnect
**/

const SocialConnect = (props) => {
  return(
    <div className="socialConnect" style={props.style}>
        <span>Suivez-moi sur : </span>
        <a className="socialLink" href={props.href}>
        <i class="fa fa-linkedin-square" style={{fontSize:'30px'}}></i>
        </a>
    </div>
   )

 }

export default SocialConnect