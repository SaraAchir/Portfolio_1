import React from 'react'
import {colors} from '../../style'
/**
* @author
* @function Button
**/

const Button = (props) => {
  return(
    <a href="#" style={{
        boxSizing :'border-box',
        padding :'10px 20px' , 
        background: props.inverse ? 'transparent':colors.primaryColor , 
        color : props.inverse ? colors.primaryColor:'#fff' ,
        display:'inline-block', 
        borderRadius : '20px',
        boxShadow : props.inverse ? 'none': "0 0 10px 0 black" ,
        border : '1px solid',
        borderColor:props.inverse ? colors.primaryColor :'transparent',
        fontSize : 12,
        letterSpacing : "2px"}}>
      {props.label}
    </a>
   )

 }

export default Button