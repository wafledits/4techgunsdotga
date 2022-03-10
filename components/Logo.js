import styles from '../styles/Logo.module.css';
import Quote from './Quote';
import Image from 'next/image'
import moment from 'moment';

export default function Logo() {
    return (
        <div>
            <div className={styles.logoContainer}>
                <Image src={moment().month() == 8 && moment().day() == 19 ? "/iconDarkBirthdayEasterEgg.png" : "/iconDark.png"} width="84" height="64" className={styles.logoMarginned} />
                &nbsp;<p className={styles.logoText}>4techguns.ga</p>
            </div>
            <Quote />
            <hr />
        </div>
    )
}