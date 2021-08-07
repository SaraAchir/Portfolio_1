import React from 'react'
import SmallHeading from '../UI/SmallHeading'
import Card from '../UI/Card'
import capgemini from '../../assets/images/capgemini.png'
import berexia from '../../assets/images/berexia.png'
import involys from '../../assets/images/involys.png'
import aevaweb from '../../assets/images/aevaweb.png'


import Experience from '../UI/Experience'

/**
* @author
* @function Experiences
**/

const Experiences= (props) => {
  const experiences = [
    {
      link :"https://www.capgemini.com/",
      imgPath :capgemini,
        job : 'Développeuse full stack ReactJS/Asp.net core',
        delay :"De 05/2021 jusqu'à présent",
        societe :"Capgemini",
        city : 'Casablanca',
        tasks :["participer au développement d'une application web pour un client ","Les technologies utilisées :Asp .net core ,React js, Mongodb ,Xunit, SonarQube,GitLab,Azure"]
    },
    {
      link:"http://www.berexia.com/",
      imgPath :berexia,
        job : 'Développeuse full stack Angular js/Asp.net ',
        delay :"De 08/2020 jusqu'à 06/2020",
        societe :"Berexia",
        city : 'Casablanca',
        tasks :["participer au développement d'une application web pour un client.",
        "Participer au déploiement du projet en différents environnements. ",
        "Rédiger les spécifications techniques de nouvelles fonctionnalités ajoutées.",
        "Les technologies utilisées :Asp.net  ,Angular js, Sql server ,Azure"]
    },
    {
      link:"https://involys.com/",
      imgPath :involys,
        job : 'Développeuse full stack Angular/Asp.net core ',
        delay :"De 02/2020 jusqu'à 4/2021",
        societe :"Involys",
        city : 'Casablanca',
        tasks :["Stage de projet de fin d'étude PFE",
        "participer au développement d'une application web de gestions des utilisateurs  pour Involys",
        "Les technologies utilisées :Asp.net core ,Identity server, Angular 9, Sql server ,Azure"]
    },
    {
      link:"http://www.aevaweb.com/",
      imgPath :aevaweb,
        job : 'Développeuse  Angular 7/Nodejs ',
        delay :"De 07/2019 jusqu'à 08/2021",
        societe :"Aevaweb",
        city : 'Oujda',
        tasks :["Stage de quatriéme année ",
        "participer au développement d'une application web de gestion des comptes rendu des salariés ",
        "Les technologies utilisées :Angular 7, Sql server ,Nodejs"]
    }
]
  return(
    <div className="container ">
        <Card >
            <div className="mtb-10">
                <SmallHeading text="Expériences"/>
                
            </div>
            <div className="mtb-10 justify-sb" >
            {
                experiences.map((experience,index) =>  <Experience
                key ={index}
                link = {experience.link}
                imgPath={experience.imgPath}
                job = {experience.job}
                delay = {experience.delay}
                societe={experience.societe}
                city={experience.city}
                tasks={experience.tasks.map((task,index)=><ul className="mlr-10">
                  <li>{task}</li>
                </ul>)}/>)
            }
        </div>
        </Card>
    </div>
   )

 }

export default Experiences