import { useNavigate } from "react-router-dom";

import MainLayout from "../../components/Layout/MainLayout";
import Button from "../../components/UI/Button";
import styles from "./Project.module.css";

export default function ProjectListPage() {
    const navigate = useNavigate();

    // 추후 API 연결 예정
    const projects = [
        {
            id: 1,
            name: "결제 모듈 테스트",
            description: "Browser x OS 조합 테스트",
            updatedAt: "2025-11-24",
            testCaseCount: 32,
        },
        {
            id: 2,
            name: "회원가입 폼 검증",
            description: "필수 입력 + 조합 테스트",
            updatedAt: "2025-11-23",
            testCaseCount: 12,
        },
    ];

    return (
        <MainLayout>
            <div className={styles.dashboard}>

                {/* 헤더 영역 */}
                <div className={styles.header}>
                    <div className={styles.headerLeft}>
                        <h1 className={styles.title}>My Projects</h1>
                        <p className={styles.subtitle}>A directory of your Dashboard.</p>
                    </div>

                    <Button onClick={() => navigate("/projects/create")}>
                        Create New Test Case
                    </Button>
                </div>

                {/* 프로젝트 리스트 */}
                <div className={styles.tableWrapper}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Project Name</th>
                                <th>Description</th>
                                <th>Last Updated</th>
                            </tr>
                        </thead>

                        <tbody>
                            {projects.map((p, index) => (
                                <tr
                                    key={p.id}
                                    className={styles.row}
                                    onClick={() => navigate(`/projects/${p.id}/overview`)}
                                >
                                    <td>{index + 1}</td>
                                    <td>{p.name}</td>
                                    <td className={styles.descCell}>{p.description}</td>
                                    <td>{p.updatedAt}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </MainLayout>
    );
}
