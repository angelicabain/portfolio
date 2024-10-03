import React from "react";

import skills from "../../data/skills.json"; 

import history from "../../data/history.json"; 
import { getImageUrl } from "../../utils";
import styles from "./Experience.module.css"

export const Experience = () => {
    return <section className = {styles.container} id="experience">
    <h2 className = {styles.title}> Experience </h2>
    <div className = {styles.content}> 
        <div className = {styles.skills}> 
        { 
            skills.map((skill, id) => {
                return <div key={id} className = {styles.skill}>
                   <div className = {styles.skillImageContainer}>
                   <img className = {styles.skillIcon} src = {getImageUrl(skill.imageSrc)} alt = {skill.title} /> </div> 
                   <p> {skill.title} </p>
                   </div>
                
                }

                )

        }
        </div>

        <ul className = {styles.history}> 
        {history.map((historyItem, id) => {
                return(
                 <li key={id} className = {styles.historyItem}>
                    <img className = {styles.historyIcon} src = {getImageUrl(historyItem.imageSrc)} alt = {historyItem.organisation} />
                 <div className = {styles.historyItemDetails}> 
                 <h3> {`${historyItem.role} , ${historyItem.organisation}`} 
                 <p> {`${historyItem.startDate} - ${historyItem.endDate}`} </p> 
                 <ul> {historyItem.experiences.map((experience, id ) => {
                 return <li key = {id}> {experience} </li>
                 }
                 )}</ul>
                 </h3>
                 
                 </div>
                 
                 </li>
                )
            })
        }
        
        </ul>

    </div>
    <div className = {styles.topBlur} />
    <div className = {styles.bottomBlue} />
     </section>
    
    ;
}