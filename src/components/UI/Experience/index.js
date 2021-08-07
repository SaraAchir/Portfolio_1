import React from 'react'
import './style.css'

/**
* @author
* @function Experience
**/

const Experience = (props) => {
  return(
    <div className="flexRow experience mtb-10" style={{marginLeft:'20%'}}>
        <div >
            <a href={props.link}>
              <img src={props.imgPath}/>
            </a>
        </div>
        <div className="mlr-10">
            <p className="font-16 bold-500 mtb-10">{props.job}</p>
            <p className="font-16 bold-400 mtb-10">{props.delay}</p>
            <p className="font-14 bold-300 mtb-10">{props.societe}</p>
            <p className="font-14 bold-200 mtb-10">{props.city}</p>
            <p className="font-14  bold-500 grey mtb-10">{props.tasks}</p>
        </div>
   </div>
   )

 }

export default Experience