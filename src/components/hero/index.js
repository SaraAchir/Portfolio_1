import React from 'react';
import saraImage from "../../assets/images/saraImage.png";
import Button from '../UI/Button';
import ButtonDownload from '../UI/ButtonDownload';

import "./style.css";

/**
* @author
* @function Hero
**/

const Hero = (props) => {
  return(
    <div className="container" style ={{marginTop :"70px"}}>
        <div className="flexRow flexCol justify-sb align-center" >
            <div data-aos="fade-right" >
                <p className="uppercase bold-500 ls-1 mtb-10">
                    <span className="primaryColor">Bonjour, Je suis</span>   Sara HACHIR
                    </p>
                    <h1 className="ls-1 mtb-10">Ingénieure logiciel </h1>
                    <p className="font-12 grey mtb-10">Développeuse Full stack Angular/React/Asp.Net(core)</p>
                    <div className="flexRow mtb-10" style={{marginTop :'30px'}}>
                        <div>
                            <Button label="Hire me"/>
                        </div>
                        

                        <div className="mlr-10">
                        
                            <ButtonDownload label="Download CV" inverse={true}/>
                       
                        </div>
                    </div>
            </div>
            <div data-aos="fade-left">
                <div className="meRightImgContainer">
                    <img src={saraImage} alt=""/>
                </div>
            </div>
        </div>
    </div>
   )

 }

export default Hero