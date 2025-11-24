import MainLayout from "../../components/Layout/MainLayout";
import Button from "../../components/UI/Button";
import styles from "./Project.module.css";
import { useNavigate } from "react-router-dom";

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
                    <h1 className={styles.title}>My Projects</h1>
                    <Button onClick={() => navigate("/projects/create")}>
                        + 새 프로젝트
                    </Button>
                </div>

                {/* 프로젝트 리스트 */}
                <div className={styles.projectList}>
                    {projects.map((p) => (
                        <div
                            key={p.id}
                            className={styles.projectCard}
                            onClick={() => navigate(`/projects/${p.id}/overview`)}
                        >
                            <h3>{p.name}</h3>
                            <p className={styles.desc}>{p.description}</p>

                            <div className={styles.meta}>
                                <span>케이스: {p.testCaseCount}개</span>
                                <span>업데이트: {p.updatedAt}</span>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </MainLayout>
    );
}
