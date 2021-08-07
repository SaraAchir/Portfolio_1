import React from 'react'

/**
* @author
* @function MediumHeading
**/

const MediumHeading = ({text,style}) => {
  return(
    <p style={style} className="capitalize font-25 ls-1 bold-700 text-center"> {text}</p>
    )

 }

export default MediumHeading 