import { Link } from "react-router-dom";
import styles from "./SideBar.module.css";

export default function SideBar() {
    return (
        <aside className={styles.sidebar}>
            <h2 className={styles.logo}>TestWeaver</h2>

            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/testcases/generate">Add Test Case</Link></li>
                </ul>
            </nav>
        </aside>
    );
}