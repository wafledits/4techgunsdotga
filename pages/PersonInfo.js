import PeopleAndInfoOnThem from "../shared/PeopleAndInfoOnThem";
import styles from "../styles/GlobalStyles.module.css";
import Header from "../components/Header";
import Logo from "../components/Logo"
import Footer from "../components/Footer";
import { useRouter } from "next/router";

export default function PersonInfo() {
    const router = useRouter()
    const { name } = router.query
    let thing = PeopleAndInfoOnThem.find((item) => item[0] === name)

    return (
        <div className={styles.dark}>
            <Header />
            <Logo />
            {thing ? <div>
                <h1 className={styles.defaultText}>Info on {thing[0]}</h1>
                <p className={styles.defaultText}>{thing[1]}</p>
            </div>
            : <div>
                <h1 className={styles.defaultText}>&#xf46e; Oooooops!</h1>
                <p className={styles.defaultText}>No info on {name} could be found.</p>
            </div>}
            <Footer />
        </div>
    )
}