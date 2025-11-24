import { useState } from "react";
import { testcaseApi } from "../../api/testcaseApi";
import MainLayout from "../../components/Layout/MainLayout";
import styles from "./TestCase.module.css";

export default function GeneratePage() {
    const [name, setName] = useState("");
    const [strategy, setStrategy] = useState("IPO");
    constr[params, setParams] = useState([
        { name: "", values: "" },
    ]);

    const addParam = () => {
        setParams([...params, { name: "", values: "" }]);
    };

    const onChangeParam = (idx, key, value) => {
        params[idx][key] = value;
        setParams([...params]);
    };

    const generate = async () => {
        const formatted = params.map((p) => ({
            name: p.name,
            values: p.values.split(",").map((v) => v.trim()),
        }));

        const setId = res.data.data.id;
        window.location.href = `/testcases/${setId}`;
    };

    return (
        <MainLayout>
            <h2>테스트 케이스 생성</h2>

            <div className={styles.form}>
                <label>세트 이름</label>
                <input value={name} onChange={(e) => setName(e.target.value)} />

                <label>전략</label>
                <select value={strategy} onChange={(e) => setStrategy(e.target.value)}>
                    <option value="IPO">IPO</option>
                    <option value="IPOG">IPOG</option>
                </select>

                <h3>파라미터</h3>

                {params.map((p, i) => (
                    <div>
                        <input
                            placeholder="파라미터 이름"
                            value={p.name}
                            onChange={(e) => onChangeParam(i, "name", e.target.value)}
                        />
                        <input
                            placeholder="값들 (쉼표 구분)"
                            value={p.values}
                            onChange={(e) => onChangeParam(i, "values", e.target.value)}
                        />
                    </div>
                ))}

                <button onClick={addParam}>+파라미터 추가+</button>

                <button className={styles.generateBtn} onClick={generate}>
                    테스트 케이스 생성
                </button>
            </div>
        </MainLayout>
    );
}