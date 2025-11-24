import { useEffect, useState } from "react";
import { testcaseApi } from "../../api/testcaseApi";
import MainLayout from "../../components/Layout/MainLayout";
import styles from "./TestCase.module.css";

export default function ResultPage() {
    const id = location.pathname.split("/").pop();
    const [set, setSet] = useState(null);

    useEffect(() => {
        load();
    }, []);

    const load = async () => {
        const res = await testcaseApi.getSet(id);
        setSet(res.data.data);
    };

    const download = async (type) => {
        const res = await testcaseApi.export(id, type);
        const blob = new Blob([res.data]);
        const url = window.URL.createObjectURL(blob);

        const link = document.createElement("a");
        link.href = url;
        link.download = `testcases_${id}.${type === "excel" ? "xlsx" : "csv"}`;
        link.click();
    };

    if (!set) return <MainLayout><p>로딩중...</p></MainLayout>;

    return (
        <MainLayout>
            <h2>테스트 케이스 결과 ({set.name})</h2>

            <div className={styles.actions}>
                <button onClick={() => download("csv")}>CSV 다운로드</button>
                <button onClick={() => download("excel")}>Excel 다운로드</button>
            </div>

            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>#</th>
                        {Object.keys(set.testCases[0].values).map((name) => (
                            <th key={name}>{name}</th>
                        ))}
                    </tr>
                </thead>

                <tbody>
                    {set.testCases.map((row) => (
                        <tr key={row.index}>
                            <td>{row.index}</td>
                            {Object.values(row.values).map((v, idx) => (
                                <td key={idx}>{v}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </MainLayout>
    );
}
