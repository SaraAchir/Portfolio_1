import React from 'react'
import Card from '../UI/Card'
import MediumHeading from '../UI/MediumHeading'
import SmallHeading from '../UI/SmallHeading'
import saraImage from '../../assets/images/saraImage.png'
import './style.css'
import Button from '../UI/Button'
import video from '../../assets/videos/demo.mp4'

/**
* @author
* @function LatestProjects
**/

const LatestProjects = (props) => {
  return(
    <div className="container" style={{marginTop :'50px',marginBottom :"50px"}}>
        <Card >
        <SmallHeading text="Mes dernières projets"/>
    <div className=" flexCol align-center justify-sb">
            <div >
                
                <MediumHeading style={{textTransform: "uppercase"}} text="Mon portfolio"/>
                <div  style={{display:'flex', justifyContent :'center'}}>
                   Ce portfolio est crée avec React js version 17
                </div>
                <div className=" flexRow" style={{justifyContent :'center'}}>
                    <video src={video} width="500" height="400" controls>
                    </video>
                </div>
            </div>
            </div>

            <div className=" flexCol align-center justify-sb">
            <div >
                
                <MediumHeading style={{textTransform: "uppercase"}} text="Mon projet de fin d'étude"/>
                <div  style={{display:'flex', justifyContent :'center'}}>
                   Ce projet concerne une application web de gestion des utilisateurs ;il est crée avec Angular 9 et asp .net core 3
                </div>
                <div className=" flexRow" style={{justifyContent :'center'}}>
                    <video src={video} width="500" height="400" controls>
                    </video>
                </div>
            </div>
            </div>
        </Card>
                        
    </div>
    
   )

 }

export default LatestProjects