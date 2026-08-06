import history from "../../data/history.json";
import styles from "./Experience.module.css";

export const Experience = () => {
    return (
        <section className={styles.container} id="experience">
            <h2 className={styles.heading} data-reveal>Experience</h2>
            <ul className={styles.history}>
                {history.map((item, id) => (
                    <li key={id} className={styles.item} data-reveal>
                        <div className={styles.meta}>
                            <span className={styles.dates}>{item.startDate} — {item.endDate}</span>
                            <span className={styles.location}>{item.location}</span>
                        </div>
                        <div className={styles.details}>
                            <h3 className={styles.role}>{item.role}</h3>
                            <p className={styles.organisation}>{item.organisation}</p>
                            <ul className={styles.points}>
                                {item.experiences.map((experience, i) => (
                                    <li key={i}>{experience}</li>
                                ))}
                            </ul>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
};
