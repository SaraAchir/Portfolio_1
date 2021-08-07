import React from 'react'

/**
* @author
* @function Title
**/

const Title = ({title,mediumTitle,desc}) => {
  return(
    <div className="mtb-10" style={{background:'#fff',padding:'20px',width:"300px"}}>
        <p className="font-14 bold-500 mtb-10 uppercase">{title}</p>
        <p className="font-14 bold-600 mtb-10">{mediumTitle}</p>
        <p className="grey font-12 mtb-10">{desc}</p>
    </div>
   )

 }

export default Title