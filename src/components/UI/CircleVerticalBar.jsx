import styles from "./CircleVerticalBar.module.css";

export default function CircleVerticalBar({ text = "", color = "#393E46", barHeight = 120 }) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.circle} style={{ background: color }}>
                {text}
            </div>

            <div
                className={styles.bar}
                style={{ background: color, height: barHeight }}
            >
            </div>
        </div>
    );
}
