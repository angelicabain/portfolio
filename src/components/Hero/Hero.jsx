import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
    return (
        <section className={styles.container}>

            <div className={styles.content}>
                <img src={getImageUrl("hero/heroImage.png")} alt="hero image of me" className={styles.heroImg} />


                <h1 className={styles.title}> Hi, I'm Angelica Bain! </h1>
                <p className={styles.description}> I'm a third year at the <b>University of Virginia</b> studying <b>Computer Science</b>.
                    Reach out if you'd like to learn more! </p>

            </div>

            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    );
};