import ProjectLayout from "../../components/Project/ProjectLayout";
import styles from "./TestCases.module.css";
import Button from "../../components/UI/Button";

export default function TestCasesPage() {
    // 추후 API로 받게 될 데이터
    const testcases = [
        { id: 1, Browser: "Chrome", OS: "Windows" },
        { id: 2, Browser: "Edge", OS: "macOS" },
        { id: 3, Browser: "Safari", OS: "macOS" }
    ];

    const columns = Object.keys(testcases[0]);

    return (
        <ProjectLayout>
            <div className={styles.header}>
                <h1>Test Cases</h1>
                <Button>재생성</Button>
            </div>

            <div className={styles.table}>
                <table>
                    <thead>
                        <tr>
                            {columns.map((col) => (
                                <th key={col}>{col}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {testcases.map((tc) => (
                            <tr key={tc.id}>
                                {columns.map((col) => (
                                    <td key={col}>{tc[col]}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </ProjectLayout>
    );
}
