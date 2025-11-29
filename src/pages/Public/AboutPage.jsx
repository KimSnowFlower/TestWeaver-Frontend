import PublicLayout from "../../components/Layout/Public/PublicLayout";
import styles from "./About.module.css";

export default function AboutPage() {
    return (
        <PublicLayout>
            <div className={styles.container}>
                <section className={styles.hero}>
                    <h1 className={styles.title}>
                        Maximize Coverage,<br />
                        <span className={styles.highlight}>Minimize Effort.</span>
                    </h1>
                    <p className={styles.subtitle}>
                        TestWeaver는 복잡한 소프트웨어 환경에서 발생하는<br />
                        '조합의 수'를 수학적으로 최적화하여 QA의 효율성을 극대화합니다.
                    </p>
                </section>

                <hr className={styles.divider} />

                <section className={styles.missionSection}>
                    <div className={styles.missionCard}>
                        <h2>The Problem</h2>
                        <p>
                            현대 소프트웨어는 수많은 OS, 브라우저, 하드웨어 설정 위에서 동작합니다.
                            모든 변수의 조합을 테스트하려면 천문학적인 시간과 비용이 소모됩니다.
                            이를 <strong>'조합 폭발(Combinatorial Explosion)'</strong> 문제라고 합니다.
                        </p>
                    </div>
                    <div className={`${styles.missionCard} ${styles.solution}`}>
                        <h2>Our Solution</h2>
                        <p>
                            TestWeaver는 <strong>IPO / IPOG 알고리즘</strong>을 사용하여
                            결함 발견율이 가장 높은 'Pairwise(2-way)' 조합을 자동으로 생성합니다.
                            수백만 개의 케이스를 단 수십 개로 줄이면서도 테스트 커버리지를 유지합니다.
                        </p>
                    </div>
                </section>

                <section className={styles.techSection}>
                    <h2 className={styles.sectionTitle}>Tech Stack</h2>
                    <div className={styles.techGrid}>
                        <div className={styles.techItem}>
                            <span className={styles.techLabel}>Frontend</span>
                            <strong>React + Vite</strong>
                        </div>
                        <div className={styles.techItem}>
                            <span className={styles.techLabel}>Algorithm</span>
                            <strong>IPO / IPOG Strategy</strong>
                        </div>
                        <div className={styles.techItem}>
                            <span className={styles.techLabel}>Deployment</span>
                            <strong>AWS</strong>
                        </div>
                        <div className={styles.techItem}>
                            <span className={styles.techLabel}>Styling</span>
                            <strong>CSS Modules</strong>
                        </div>
                    </div>
                </section>

                <section className={styles.profileSection}>
                    <h2 className={styles.sectionTitle}>Developer</h2>
                    <div className={styles.profileCard}>
                        <p>
                            이 프로젝트는 오픈 소스로 관리되고 있으며, 지속적으로 알고리즘을 개선하고 있습니다.<br />
                            관심이 있으시다면 GitHub 저장소를 방문해 주세요.
                        </p>
                        <a
                            href="https://github.com/kimvudghk11/TestWeaver-Frontend"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.githubBtn}
                        >
                            Visit GitHub Repository
                        </a>
                    </div>
                </section>
            </div>
        </PublicLayout>
    );
}