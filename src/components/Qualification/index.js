import React from 'react'
import Button from '../UI/Button'
import MediumHeading from '../UI/MediumHeading'
import SmallHeading from '../UI/SmallHeading'
import Title from '../UI/Title'
import saraImage from '../../assets/images/saraImage.png'

/**
* @author
* @function Qualification
**/

const Qualification = (props) => {
  return(
    <div className="container" style={{padding:'50px 0'}}>
        <SmallHeading text="Qualifications"/>
        <MediumHeading text="My eductaion"/>
        <div className="flexRow flexCol align-center justify-sb">
            <div>
                <img src={saraImage}/>
            </div>
            <div className="flexRow"
                 style={{background:"#fff",padding:"10px 50px",boxSizing:'border-box',display:'flex',width:"0px",borderRadius:'20px',justifyContent:'center '}} >
                <div className="mlr-10">
                    <Button label="Hire me "/>
                </div>
                <div className="mlr-10">
                    <Button label="Download CV" inverse="true"/>
                </div>
            </div>
        </div>
        <div>
            <Title
            title="MAKAUT"
            mediumTitle="Computer Science and  Engg"
            desc="lorem text"/>
                        <Title
            title="MAKAUT"
            mediumTitle="Computer Science and  Engg"
            desc="lorem text"/>
                        <Title
            title="MAKAUT"
            mediumTitle="Computer Science and  Engg"
            desc="lorem text"/>
                        <Title
            title="MAKAUT"
            mediumTitle="Computer Science and  Engg"
            desc="lorem text"/>



        </div>
    </div>
   )

 }

export default Qualification