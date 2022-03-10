import styles from '../styles/Logo.module.css';
import Quote from './Quote';
import Image from 'next/image'
import moment from 'moment';

export default function Logo() {
    function IsBirthday() {
        return moment().month() == 8 && moment().day() == 19
    }
    return (
        <div>
            <div className={styles.logoContainer}>
                <Image src={IsBirthday() ? "/iconDarkBirthdayEasterEgg.png" : "/iconDark.png"} width="84" height="64" className={styles.logoMarginned} />
                &nbsp;<p className={styles.logoText}>{IsBirthday() ? "The Site of a Birthday Person" : "4techguns.ga"}</p>
            </div>
            <Quote />
            <hr />
        </div>
    )
}