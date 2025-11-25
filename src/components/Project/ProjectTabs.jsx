import { NavLink, useParams } from "react-router-dom";
import styles from "./ProjectLayout.module.css";

export default function ProjectTabs() {
    const { id } = useParams();

    const tabs = [
        { name: "Model", path: `/projects/${id}/detail` },
        { name: "Test Cases", path: `/projects/${id}/testcases` },
    ];

    return (
        <nav className={styles.tabs}>
            <h1 className={styles.title}>TestWeaver</h1>

            <p className={styles.info}>Info</p>
            {tabs.map((tab) => (
                <NavLink
                    key={tab.name}
                    to={tab.path}
                    className={styles.tab}
                >
                    {tab.name}
                </NavLink>
            ))}
        </nav>
    );
}
