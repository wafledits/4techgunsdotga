import { useRouter } from 'next/router'
import styles from '../styles/GlobalStyles.module.css'
import Link from 'next/link'

export default function Header() {
  return (
    <div>
      <Link href="/" ><a className={styles.defaultLinkButton}>&#xf7db; Home</a></Link>
      |
      <Link href="/about"><a className={styles.defaultLinkButton}>&#xf7fb; About</a></Link>
      |
      <Link href="/pyseries"><a className={styles.defaultLinkButton}>The Py Series</a></Link>
      <hr />
    </div>
  )
}