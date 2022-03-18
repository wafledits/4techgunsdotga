import { useRouter } from 'next/router'
import styles from '../styles/GlobalStyles.module.css'
import Link from 'next/link'

export default function Header() {
  return (
    <div>
      <Link href="/dash" ><a className={styles.defaultLinkButton}>&#xf7db; Home</a></Link>
      |
      <Link href="/games"><a className={styles.defaultLinkButton}>&#xf11b; Games</a></Link>
      |
      <Link href="/avatar"><a className={styles.defaultLinkButton}>&#xf7fb; Avatar</a></Link>
      |
      <Link href="/create"><a className={styles.defaultLinkButton}>&#xf5e2; Create</a></Link>
      |
      <Link href="/users"><a className={styles.defaultLinkButton}>&#xf50d; Users</a></Link>
      |
      <Link href="https://discord.gg/npwhfdZFpW"><a className={styles.defaultLinkButton}>&#xfb6e; Discord</a></Link>
      |
      <Link href="/"><a className={styles.defaultLinkButton}>&#xfafc; Log Out</a></Link>
      <hr />
    </div>
  )
}
