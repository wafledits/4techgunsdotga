import styles from '../styles/GlobalStyles.module.css'

export default function Footer()
{
    return (
        <div className={styles.defaultText}>
            <hr />
            <p>Copyright &copy; Bluen&apos;t 2022. All rights not reserved lmao you think we have lawyers for a personal site and a non-registered company i do not care what you do go steal the code on my <a href="https://github.com/4techguns/4techgunsdotga">github</a> for all i care</p>
            <a href="a.png">Built with KarbML 6&trade;</a>
            <p className={styles.comiksand}>POWERED BY KARBIS STUDIO BACKPAGE</p>
            <p className={styles.comiksand}>ALSO POWERED BY PAKISTAN SERVER IN LAHORE WITH 66954MS PING</p>
            <p className={styles.defaultText}>oh and also check out dragons' twitch <a href="https://www.twitch.tv/unidentified_dragons">here</a></p>
        </div>
    )
}