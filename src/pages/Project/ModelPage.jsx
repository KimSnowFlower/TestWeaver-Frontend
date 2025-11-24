import { useState } from "react";
import ProjectLayout from "../../components/Project/ProjectLayout";
import styles from "./Model.module.css";
import Button from "../../components/UI/Button";
import Input from "../../components/UI/Input";

export default function ModelPage() {
    const [params, setParams] = useState([]);
    const [newParam, setNewParam] = useState("");
    const [newValues, setNewValues] = useState("");
    const [constraints, setConstraints] = useState([]);
    const [newConstraint, setNewConstraint] = useState("");

    const addParam = () => {
        if (!newParam || !newValues) return;
        setParams([
            ...params,
            { name: newParam, values: newValues.split(",").map((v) => v.trim()) }
        ]);
        setNewParam("");
        setNewValues("");
    };

    const addConstraint = () => {
        if (!newConstraint) return;
        setConstraints([...constraints, newConstraint]);
        setNewConstraint("");
    };

    return (
        <ProjectLayout>
            <h1>Model Editor</h1>

            <section className={styles.section}>
                <h2>Parameters</h2>

                <div className={styles.row}>
                    <Input
                        label="파라미터 이름"
                        value={newParam}
                        onChange={(e) => setNewParam(e.target.value)}
                    />
                    <Input
                        label="값 (쉼표 구분)"
                        value={newValues}
                        onChange={(e) => setNewValues(e.target.value)}
                    />
                    <Button onClick={addParam}>추가</Button>
                </div>

                <div className={styles.table}>
                    {params.map((p, i) => (
                        <div key={i} className={styles.paramItem}>
                            <strong>{p.name}</strong>
                            <span>{p.values.join(", ")}</span>
                        </div>
                    ))}
                </div>
            </section>

            <section className={styles.section}>
                <h2>Constraints</h2>

                <div className={styles.row}>
                    <Input
                        label="제약 조건"
                        placeholder="예: IF Browser=Safari THEN OS!=Windows"
                        value={newConstraint}
                        onChange={(e) => setNewConstraint(e.target.value)}
                    />
                    <Button onClick={addConstraint}>추가</Button>
                </div>

                <ul className={styles.constraintList}>
                    {constraints.map((c, i) => (
                        <li key={i}>{c}</li>
                    ))}
                </ul>
            </section>
        </ProjectLayout>
    );
}
