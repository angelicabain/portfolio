import { useEffect } from 'react';
import styles from './App.module.css';
import { About } from './components/About/About';
import { Contact } from './components/Contact/Contact';
import { Experience } from './components/Experience/Experience';
import { Hero } from './components/Hero/Hero';
import { Navbar } from './components/Navbar/Navbar';
import { Projects } from './components/Projects/Projects';
import { Skills } from './components/Skills/Skills';
import { Sparkles } from './components/Sparkles/Sparkles';

function App() {
    useEffect(() => {
        const elements = document.querySelectorAll('[data-reveal]');
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('revealed');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
        );
        elements.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <div className={styles.App}>
            <Sparkles />
            <Navbar />
            <main className={styles.main}>
                <Hero />
                <About />
                <Experience />
                <Projects />
                <Skills />
            </main>
            <Contact />
        </div>
    );
}

export default App
