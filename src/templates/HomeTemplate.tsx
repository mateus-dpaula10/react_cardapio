import Footer from "../components/Footer";
import Menu from "../components/Menu";
import { Outlet } from "react-router-dom";
import styles from './HomeTemplate.module.scss'

export default function HomeTemplate() {
    return (
        <div>
            <Menu />

            <main className={styles.main}>
                <Outlet />
            </main>
            
            <Footer />
        </div>
    )
}