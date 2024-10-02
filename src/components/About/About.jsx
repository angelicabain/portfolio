import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";


export const About = () => {
    return (
        <section className = {styles.container} id="about">
            <h2 className = {styles.title}> About</h2>

            <div className = {styles.content}>
            <ul className = {styles.aboutItems}> 
             <li className = {styles.aboutItem}> 
             <img src={getImageUrl("about/uvalogo.png")} alt="uva icon" className = {styles.imageIcon} 
               
             />
             <div className = {styles.aboutItemText}> 
             <p> I'm a second-year Computer Science and Chinese Language and Literature student at the University of Virginia with interests in AI innovations, cybersecurity, and software development.
             </p>
             </div>
             </li>

             <li className = {styles.aboutItem}>
    <img src={getImageUrl("about/hackathon.png")} alt="hackathon icon" className = {styles.imageIcon} />
    <div className = {styles.aboutItemText}>
        <p> I lead the Hacker Experience Team for the Women in Computer Science Hackathon Committee and actively participate in tech communities like ML@UVA and ProjectCode. </p>
        <p>
        </p>
    </div>
</li>


             <li className = {styles.aboutItem}>  
             <img src={getImageUrl("about/forest-icon.png")} alt="outdoors icon" className = {styles.imageIcon}/>
             <div className = {styles.aboutItemText} > <p> 
             Outside of tech, I enjoy staying active through outdoor activities and sports, balancing my academic life with involvement in the Club Pickleball Team and Outdoors Club.
             </p>
             
             </div>
             </li>

            </ul>
            
            </div>
        </section>

    ) 
}; 