import skills from "../../data/skills.json";
import styles from "./Skills.module.css";

export const Skills = () => {
    return (
        <section className={styles.container} id="skills">
            <h2 className={styles.heading} data-reveal>Skills</h2>
            <dl className={styles.groups}>
                {skills.map((group, id) => (
                    <div key={id} className={styles.group} data-reveal>
                        <dt className={styles.category}>{group.category}</dt>
                        <dd className={styles.items}>{group.items.join(" · ")}</dd>
                    </div>
                ))}
            </dl>
        </section>
    );
};
