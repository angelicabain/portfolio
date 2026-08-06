import styles from "./Contact.module.css";

const openEmail = (e) => {
    e.preventDefault();
    window.location.href = "mailto:" + ["dcf3mm", "virginia.edu"].join("@");
};

export const Contact = () => {
    return (
        <footer id="contact" className={styles.container}>
            <div className={styles.inner} data-reveal>
                <h2 className={styles.heading}>Contact</h2>
                <p className={styles.text}>Feel free to reach out!</p>
                <div className={styles.links}>
                    <a href="#contact" onClick={openEmail}>Email</a>
                    <a href="https://github.com/angelicabain" target="_blank" rel="noreferrer">GitHub</a>
                    <a href="https://www.linkedin.com/in/angelicabain/" target="_blank" rel="noreferrer">LinkedIn</a>
                </div>
            </div>
        </footer>
    );
};
