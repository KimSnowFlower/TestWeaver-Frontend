import { useState } from "react";
import ProjectLayout from "../../components/Project/ProjectLayout";
import styles from "./Export.module.css";
import Button from "../../components/UI/Button";

export default function ExportPage() {
    const [format, setFormat] = useState("csv");

    return (
        <ProjectLayout>
            <h1>Export Test Cases</h1>

            <div className={styles.section}>
                <h2>Export Format</h2>
                <select
                    className={styles.select}
                    value={format}
                    onChange={(e) => setFormat(e.target.value)}
                >
                    <option value="csv">CSV</option>
                    <option value="excel">Excel (.xlsx)</option>
                    <option value="gherkin">Gherkin</option>
                </select>
            </div>

            <Button size="large">다운로드</Button>
        </ProjectLayout>
    );
}
