import { STAR_PATH } from "../Sparkles/Sparkles";
import styles from "./Hero.module.css";

const HERO_STARS = [
    { top: "6%", left: "9%", size: 18, delay: 0, duration: 6 },
    { top: "12%", left: "72%", size: 24, delay: 2, duration: 7.5 },
    { top: "28%", left: "88%", size: 15, delay: 4.5, duration: 6.5 },
    { top: "38%", left: "48%", size: 20, delay: 1.2, duration: 8 },
    { top: "56%", left: "80%", size: 16, delay: 5.8, duration: 7 },
    { top: "64%", left: "14%", size: 22, delay: 3.2, duration: 6.5 },
    { top: "82%", left: "60%", size: 14, delay: 0.8, duration: 7.5 },
    { top: "88%", left: "30%", size: 17, delay: 4, duration: 8.5 },
];

const openEmail = (e) => {
    e.preventDefault();
    window.location.href = "mailto:" + ["dcf3mm", "virginia.edu"].join("@");
};

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.stars} aria-hidden="true">
                {HERO_STARS.map((star, i) => (
                    <svg
                        key={i}
                        className={styles.star}
                        viewBox="0 0 24 24"
                        style={{
                            top: star.top,
                            left: star.left,
                            width: star.size,
                            height: star.size,
                            animationDelay: `${star.delay}s`,
                            animationDuration: `${star.duration}s`,
                        }}
                    >
                        <path d={STAR_PATH} />
                    </svg>
                ))}
            </div>
            <h1 className={styles.title}>Angelica Bain</h1>
            <p className={styles.lede}>
                Hi! I&rsquo;m Angelica, a fourth-year at the University of Virginia
                studying Computer Science, interested in AI innovations, robotics,
                and human-computer interaction.
            </p>
            <div className={styles.links}>
                <a href="#contact" onClick={openEmail}>Email</a>
                <a href="https://github.com/angelicabain" target="_blank" rel="noreferrer">GitHub</a>
                <a href="https://www.linkedin.com/in/angelicabain/" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
        </section>
    );
};
