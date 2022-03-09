import Header from '../components/Header'
import Footer from '../components/Footer'
import Logo from '../components/Logo'
import styles from '../styles/GlobalStyles.module.css'
import moment from 'moment';

export default function About() {
  return (
    <div className={styles.dark}>
      <Header />
      <Logo />
      <h1 className={styles.defaultText}>About</h1>
      <p className={styles.defaultText}>I am a 13 year old programmer and video editor, with the impossible power of being a dumbass</p>
      <p className={styles.defaultText}>My {moment().format("YYYY") - 2008}th birthday is {moment([moment().format("YYYY"), 8, 19]).fromNow()} (August 19)</p>
      <Footer />
    </div>
  )
}
