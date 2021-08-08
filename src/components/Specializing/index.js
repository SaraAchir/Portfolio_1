import React from 'react'
import { colors } from '../../style'
import Card from '../UI/Card'
import MediumHeading from '../UI/MediumHeading'
import Skill from '../UI/Skill'
import SmallHeading from '../UI/SmallHeading'

/**
* @author
* @function Specializing
**/

const Specializing = (props) => {
    const skills = [
        {
            skillName :'HML/CSS/BOOTSTRAP/JAVASCRIPT',
            description : 'Hands on experience ',
            value :60,
            textColor :colors.primaryColor,
            pathColor : '#118841'
        },        
        {
            skillName :'REACTJS/ANGULAR',
            description : 'Hands on experience',
            value :60,
            textColor :colors.primaryColor,
            pathColor : '#100911'
        },
        {
            skillName :'C#/Asp.Net (core)/VISUAL STUDIO',
            description : 'Hands on experience ',
            value :60,
            textColor :colors.primaryColor,
            pathColor : '#369991'
        },
        {
            skillName :'SQL/MONGODB',
            description : 'Hands on experience ',
            value :60,
            textColor :colors.primaryColor,
            pathColor : '#999991'
        },
        {
            skillName :'XUNIT/KARMA',
            description : 'Hands on experience ',
            value :80,
            textColor :colors.primaryColor,
            pathColor : '#544991'
        }


    ]
  return(
    <div className="container" >
        <Card style={{padding:'30px'}}>
        <SmallHeading text="Ce que je fais "/>
        <MediumHeading text="Spécialisée en"/>
        <div data-aos="fade-up" className="mtb-10" >
            {
                skills.map((skill,index) =>  <Skill
                key ={index}
                skillName={skill.skillName}
                description = {skill.description}
                value = {skill.value}
                textColor={skill.textColor}
                pathColor={skill.pathColor}/>)
            }
        </div>
        <div>
          
        </div>
        </Card>
       
    </div>
   )

 }

export default Specializing