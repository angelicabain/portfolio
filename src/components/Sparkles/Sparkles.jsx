import styles from "./Sparkles.module.css";

const STARS = [
    { top: "8%", left: "12%", size: 11, delay: 0, duration: 7 },
    { top: "16%", left: "85%", size: 14, delay: 2.5, duration: 6 },
    { top: "24%", left: "7%", size: 8, delay: 4, duration: 8 },
    { top: "31%", left: "92%", size: 10, delay: 1, duration: 7.5 },
    { top: "42%", left: "16%", size: 13, delay: 5.5, duration: 6.5 },
    { top: "49%", left: "88%", size: 9, delay: 3, duration: 9 },
    { top: "58%", left: "5%", size: 12, delay: 6.5, duration: 7 },
    { top: "63%", left: "94%", size: 8, delay: 0.8, duration: 8.5 },
    { top: "72%", left: "10%", size: 10, delay: 4.8, duration: 6 },
    { top: "78%", left: "86%", size: 13, delay: 2, duration: 7.5 },
    { top: "88%", left: "18%", size: 9, delay: 7, duration: 8 },
    { top: "93%", left: "80%", size: 11, delay: 3.8, duration: 6.5 },
];

export const STAR_PATH =
    "M12 2l2.9 6.9 7.1.6-5.4 4.7 1.6 7-6.2-3.7-6.2 3.7 1.6-7L2 9.5l7.1-.6L12 2z";

export const Sparkles = () => {
    return (
        <div className={styles.field} aria-hidden="true">
            {STARS.map((star, i) => (
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
    );
};
