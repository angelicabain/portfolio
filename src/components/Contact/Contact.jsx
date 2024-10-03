import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css";

export const Contact = () => 
{
    return  (<footer id = "contact" className = {styles.container}> 
    <div className = {styles.text}> 
    <h2> Contact </h2> 
    <p> Feel free to reach out! </p>
    </div>
    <ul className = {styles.links}> 
    <li className = {styles.link}> 
        <img src = {getImageUrl("contact/gmail.png")} alt = "Gmail Icon" /> 
        <a href = "mailto:angelicaabain@gmail.com" > angelicabain@gmail.com </a> 
    </li> 
    <li className = {styles.link}> 
        <img src = {getImageUrl("contact/linkedin.png")} alt = "LinkedIn Icon" /> 
        <a href = "https://www.linkedin.com/in/angelicabain/" > linkedin.com/in/angelicabain </a> 
    </li> 
    <li className = {styles.link}> 
        <img src = {getImageUrl("contact/github.png")} alt = "Github Icon" /> 
        <a href = "https://github.com/angelicabain" > github.com/angelicabain </a> 
    </li> 
    </ul> 
    </footer> 
    )
}