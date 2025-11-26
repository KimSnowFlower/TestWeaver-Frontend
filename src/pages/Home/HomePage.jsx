import PublicLayout from "../../components/Layout/Public/PublicLayout";
import styles from "./Home.module.css";

export default function HomePage() {
    return (
        <PublicLayout>
            <div className={styles.container}>
                <p>Powerful Pairwise / IPO / IPOG <br /> Test Case Generator</p>
                <button className={styles.startBtn}>Get Started</button>
            </div>
        </PublicLayout>
    );
}