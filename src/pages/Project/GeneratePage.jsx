import { useState } from "react";
import ProjectLayout from "../../components/Project/ProjectLayout";
import styles from "./Generate.module.css";
import Button from "../../components/UI/Button";

export default function GeneratePage() {
    const [strategy, setStrategy] = useState("IPO");
    const [maxCases, setMaxCases] = useState(500);
    const [seed, setSeed] = useState(1);

    return (
        <ProjectLayout>
            <h1>Generate Test Cases</h1>

            <div className={styles.section}>
                <h2>Strategy</h2>
                <div className={styles.radioGroup}>
                    <label>
                        <input
                            type="radio"
                            value="IPO"
                            checked={strategy === "IPO"}
                            onChange={(e) => setStrategy(e.target.value)}
                        />
                        IPO (기본)
                    </label>

                    <label>
                        <input
                            type="radio"
                            value="IPOG"
                            checked={strategy === "IPOG"}
                            onChange={(e) => setStrategy(e.target.value)}
                        />
                        IPOG (확장형)
                    </label>
                </div>
            </div>

            <div className={styles.section}>
                <h2>Options</h2>

                <div className={styles.options}>
                    <label>
                        Max TestCases
                        <input
                            type="number"
                            value={maxCases}
                            onChange={(e) => setMaxCases(e.target.value)}
                        />
                    </label>

                    <label>
                        Random Seed
                        <input
                            type="number"
                            value={seed}
                            onChange={(e) => setSeed(e.target.value)}
                        />
                    </label>
                </div>
            </div>

            <Button size="large">Generate</Button>
        </ProjectLayout>
    );
}
