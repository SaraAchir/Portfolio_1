import React from 'react';
import saraImage from "../../assets/images/saraImage.png";
import Button from '../UI/Button';
import ButtonDownload from '../UI/ButtonDownload';
import { FormattedDate, FormattedNumber, FormattedPlural,useIntl } from "react-intl";
import { FormattedMessage } from "react-intl";


import "./style.css";

/**
* @author
* @function Hero
**/

const Hero = (props) => {
    const intl = useIntl();
  return(
    <div className="container" style ={{marginTop :"70px"}}>
        <div className="flexRow flexCol justify-sb align-center" >
            <div data-aos="fade-right" >
                <p className="uppercase bold-500 ls-1 mtb-10">
                    <span className="primaryColor"><FormattedMessage id="salutaion" /></span>Sara HACHIR
                    </p>
                    <h1 className="ls-1 mtb-10"><FormattedMessage id="job" /></h1>
                    <p className="font-12 grey mtb-10"><FormattedMessage id="full_stack" /></p>
                    <div className="flexRow mtb-10" style={{marginTop :'30px'}}>
                        <div>
                            <Button label={intl.formatMessage({id: 'hire_me'})}/>
                        </div>
                        

                        <div className="mlr-10">
                        
                            <ButtonDownload label={intl.formatMessage({id: 'download_cv'})} inverse={true}/>
                       
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