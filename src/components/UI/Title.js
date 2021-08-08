import React from 'react'
import ensa from '../../assets/images/ensa.png'
import university from '../../assets/images/university.png'

/**
* @author
* @function Title
**/

const Title = ({title,mediumTitle,desc,path,link}) => {
  return(
    <div className="mtb-10 flexRow jusitify-sb" style={{background:'#fff',padding:'20px',width:"580px"}}>
      <div style={{width:"80px",display:'flex',justifyContent:'center'}}>
      <a href={link}><img src={path}/></a>

      </div>
      <div>
      <p className="font-14 bold-500 mtb-10 uppercase">{title}</p>
        <p className="font-14 bold-600 mtb-10">{mediumTitle}</p>
        <p className="grey font-12 mtb-10">{desc}</p>
      </div>
      
    </div>
    
   )

 }

export default Title