import React from 'react'
import SmallHeading from '../UI/SmallHeading'
import MediumHeading  from '../UI/MediumHeading'
import Card from '../UI/Card'
import { CircularProgressbar,buildStyles } from 'react-circular-progressbar'
import { colors } from '../../style'
import { purple } from 'color-name'
import mains from '../../assets/images/mains.png'
import './style.css'
import SocialConnect from '../UI/SocialConnect'

/**
* @author
* @function Expertise
**/
const percentage =70;
const Expertise = (props) => {
  return(
    <div className="container" style={{marginTop :"50px",padding:"50px 0"}}>
        <div className="rightImgContainer">
            <img src={mains}alt="" width="250" height="350"/>
            <SocialConnect style={{position:"absolute" ,bottom:'0px',left :'12%'}} href="https://www.linkedin.com/in/sara-hachir-b48914196/"/>

        </div>
        <div >
            <SmallHeading text="Compétences spéciales"/>
        </div>
        <div>
            
        </div>
        <Card className="m-auto" style={{margin:'0 auto', padding :'30px',width :'320px', margin:'10px auto',position:'relative',zIndex:1 }}>
            <div className="flexRow align-center">
                <div style={{width : '80px',height :'80px'}}>
                    <CircularProgressbar
                    value= {percentage}
                    text = {`${percentage}%`}
                    styles={buildStyles({
                        textColor:purple,
                        pathColor :colors.primaryColor
                    })}/> 
                </div>
                <h2 className="mlr-10">Développement</h2>
            </div>
            <p className="grey mtb-10 font-12">Ayant trois expériences professionnels dans le developpement, j'ai pu acquérir des connaissances solides sur le developpement des applicatiosn web</p>
        </Card>
    </div>
   )

 }

export default Expertise