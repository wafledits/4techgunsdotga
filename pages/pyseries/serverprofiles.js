import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Logo from '../../components/Logo'
import defstyles from '../../styles/GlobalStyles.module.css'
import Image from 'next/image'

export default function Home() {
  return (
    <div className={defstyles.dark}>
      <Header />
      <Logo />
      <h1 className={defstyles.defaultText}>The Py Series - Server Profiles</h1>
      <p className={defstyles.defaultText}>These are Pys meant for wearing as profile pictures for a Discord server profile</p>
      
      <p className={defstyles.defaultText}>Magic Py - For the Magic Wish Discord Server</p>
      <Image src="/Pys/Server Profiles/magic_py.png" width="128" height="128" />

      <p className={defstyles.defaultText}>Nervo Py - For the Nervo Pros Discord server (by Todd)</p>
      <Image src="/Pys/Server Profiles/nervostan_py.png" width="128" height="128" />
      <Footer />
    </div>
  )
}
