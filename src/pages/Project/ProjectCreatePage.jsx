import MainLayout from "../../components/Layout/MainLayout";
import Button from "../../components/UI/Button";
import CircleVerticalBar from "../../components/UI/CircleVerticalBar";
import styles from "./Project.module.css";

export default function ProjectCreatePage() {
    return (
        <MainLayout>
            <div className={styles.dashboard}>
                <div className={styles.header}>
                    <div className={styles.headerLeft}>
                        <h1 className={styles.title}>Create New Test Case</h1>
                        <p className={styles.subtitle}>Select your new project</p>
                    </div>
                </div>

                <CircleVerticalBar text="1" color="#393E46" barHeight={120} />
            </div>
        </MainLayout>
    );
}