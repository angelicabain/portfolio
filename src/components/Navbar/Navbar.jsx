import styles from "./Navbar.module.css";

export const Navbar = () => {
    return (
        <header className={styles.navbar}>
            <nav className={styles.inner}>
                <a className={styles.name} href="/">Angelica Bain</a>
                <ul className={styles.links}>
                    <li><a href="#about">About</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};
