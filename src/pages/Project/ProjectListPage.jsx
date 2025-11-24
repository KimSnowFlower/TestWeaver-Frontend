import { useEffect, useState } from "react";
import { projectApi } from "../../api/projectApi";
import MainLayout from "../../components/Layout/MainLayout";
import styles from "./Project.module.css";

export default function ProjectListPage() {
    const [list, setList] = useState([]);

    useEffect(() => {
        load();
    }, []);

    const load = async () => {
        const res = projectApi.list();

        setList(res.data.data);
    };

    return (
        <MainLayout>
            <div className={styles.header}>
                <h2>프로젝트 목록</h2>
                <a className={styles.btn} href="/projects/create">새 프로젝트</a>
            </div>

            <ul className={styles.list}>
                {list.map((p) => (
                    <li key={p.id}>
                        <a href={`/projects/${id}`}>
                            {p.name}
                        </a>
                    </li>
                ))}
            </ul>
        </MainLayout>
    )
}