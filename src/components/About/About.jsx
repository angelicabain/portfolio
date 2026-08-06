import styles from "./About.module.css";

export const About = () => {
    return (
        <section className={styles.container} id="about" data-reveal>
            <h2 className={styles.heading}>About</h2>
            <div className={styles.prose}>
                <p>
                    This past summer I interned at Intuit in New York, working on AI
                    agents for QuickBooks onboarding. At UVA, I&rsquo;m a research
                    assistant in the Learning and Interactive Robotics Lab, where I
                    work on evaluating robot performance across manipulation and
                    navigation tasks.
                </p>
                <p>
                    Last fall I studied abroad at National Chengchi University in
                    Taipei, and I&rsquo;ve completed a Department of Defense language
                    fellowship in Mandarin for cybersecurity. Outside of school, I
                    love staying active and going hiking or playing pickleball.
                </p>
            </div>
            <ul className={styles.education}>
                <li>
                    <span className={styles.school}>University of Virginia</span>
                    <span className={styles.detail}>B.A. Computer Science &amp; Chinese Language and Literature · 3.98 GPA · 2023–2027</span>
                </li>
                <li>
                    <span className={styles.school}>National Chengchi University, Taipei</span>
                    <span className={styles.detail}>Semester study abroad, Chinese and Data Science · Fall 2025</span>
                </li>
            </ul>
        </section>
    );
};
