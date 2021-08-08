import React from 'react'
import SmallHeading from '../UI/SmallHeading'
import Title from '../UI/Title'
import ensa from '../../assets/images/ensa.png'
import university from '../../assets/images/university.png'



/**
* @author
* @function Qualification
**/

const Qualification = (props) => {
    const diplomas = [
        {
          title :"Diplôme d'ingénieur en génie informatique",
          mediumTitle :"Ecole nationale des sciences appliquées  (ENSA)",
            desc : 'De 09/2015 à 07/2020',
            path:ensa,
            link:"https://www.ensamaroc.com/"


                },
                {
                    title :"Diplôme d'études universitaires générales (DEUG) en économie",
                    mediumTitle :"L'Université Moulay-Ismaïl",
                      desc : 'De 09/2013 à 07/2015',
                      path:university,
                      link:"http://www.umi.ac.ma/"

                          },
                          {
                            title :"Baccalauréat",
                            mediumTitle :"Sciences physiques",
                              desc : 'De 09/2012 à 07/2013',
                                  },
     
    ]
  return(
    <div className="container" data-aos="zoom-out-up" >
        <SmallHeading text="Formations"/>
      
        <div style={{display :'flex',flexDirection:'column',alignItems:'center'}}>
        {diplomas.map((diploma,index) =>  <Title
                key ={index}
                title={diploma.title}
                mediumTitle={diploma.mediumTitle}
                desc={diploma.desc}
                path={diploma.path}
                link={diploma.link}/>)

        }
        </div>
    </div>
   )

 }

export default Qualification