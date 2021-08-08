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
            <SmallHeading text="Contact"/>
         
            <MediumHeading text ={  <i class='fas fa-comments mtb-10' style={{fontSize:"48px"}}></i>}/>
        </div>
        {/* <div className="flexRow wrap align-center justify-sb" style={{padding:"50px 0"}}>
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
        </div> */}
        {/* <Card className="m-auto contactCard" >
            <p className="text-center font-12 mtb-10   ">
                Have any project in mind?<span className="primaryColor"> Say hello at </span>
            </p>
            <p className="text-center font-25">
                hachirsara31@gmail.com
            </p>
        </Card> */}
        <p className="text-center font-12 mtb-10   ">
        Vous avez un projet en tête ? <span className="primaryColor"> Dites bonjour à : </span>
            </p>
           <a href="mailto:hachirsara31@gmail.com"> 
               <p className="text-center font-25">
                hachirsara31@gmail.com
            </p>
            
            
            </a>
           <p className="text-center font-14 mtb-10"> <span>Suivez-moi sur : </span>
        <a  href="https://www.linkedin.com/in/sara-hachir-b48914196/">
        <p><i class="fa fa-linkedin-square mtb-10" style={{fontSize:'30px'}}></i></p>
        </a></p>
    </div>
   )

 }

export default Testimonials