/* eslint-disable react/prop-types */
import styles from "./ProjectCard.module.css";

export const ProjectCard = ({ project: { title, award, description, skills, links } }) => {
    return (
        <article className={styles.container} data-reveal>
            <div className={styles.header}>
                <h3 className={styles.title}>{title}</h3>
                {award && <p className={styles.award}>{award}</p>}
            </div>
            <p className={styles.description}>{description}</p>
            <p className={styles.skills}>{skills.join(" · ")}</p>
            {links && links.length > 0 && (
                <div className={styles.links}>
                    {links.map((link, i) => (
                        <a key={i} className={styles.link} href={link.url} target="_blank" rel="noreferrer">
                            {link.label}&thinsp;<span className={styles.arrow}>↗</span>
                        </a>
                    ))}
                </div>
            )}
        </article>
    );
};
