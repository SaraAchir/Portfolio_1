import React from 'react'
import MediumHeading from '../UI/MediumHeading'
import SmallHeading from '../UI/SmallHeading'
import Card from '../UI/Card'
import saraImage from '../../assets/images/saraImage.png'
import "./style.css"

/**
* @author
* @function Testimonials
**/

const Testimonials = (props) => {
  return(
    <div className="container">
        <div>
            <SmallHeading text="Testimonials"/>
            <MediumHeading text ="What people say"/>
        </div>
        <div className="flexRow wrap align-center justify-sb" style={{padding:"50px 0"}}>
            <div className="testimonialImgContainer">
                <img src={saraImage}/>
            </div>
            <Card className="myCard">
                <div className="flexRow align-center">
                    <div className="profileImgContainer">
                        <img src={saraImage}/>
                    </div>
                    <div className="mtr-10"> 
                        <p className="primaryColor font-16">Sara hachir</p>
                        <p className="font-14 bold-600">Software developper</p>
                    </div>
                </div>
                <p className="mtb-10 grey">
                On sait 
                </p>
            </Card>
            <div className="testimonialImgContainer ">
                <img src={saraImage}/>
            </div>
        </div>
        <Card className="m-auto contactCard" >
            <p className="text-center font-12 mtb-10   ">
                Have any project in mind?<span className="primaryColor"> Say hello at </span>
            </p>
            <p className="text-center font-25">
                hachirsara31@gmail.com
            </p>
        </Card>
    </div>
   )

 }

export default Testimonials