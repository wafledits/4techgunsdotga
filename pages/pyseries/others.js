import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Logo from '../../components/Logo'
import defstyles from '../../styles/GlobalStyles.module.css'
import Image from 'next/image'

export default function OtherPySeries() {
  return (
    <div className={defstyles.dark}>
      <Header />
      <Logo />
      <h1 className={defstyles.defaultText}>The Py Series - Others</h1>
      <p className={defstyles.defaultText}>These are miscellaneous Py images that are made as profile pictures, or a Py that didn't fit into a category.</p>
      
      <p className={defstyles.defaultText}>Frog Py - A profile picture made for Todd but got scrapped</p>
      <Image src="/Pys/Others/frog_py.png" width="128" height="128" />

      <p className={defstyles.defaultText}>Frog Py v2 - A profile picture made by Todd</p>
      <Image src="/Pys/Others/frog_py_2.png" width="128" height="128" />

      <p className={defstyles.defaultText}>Karbis Py - Karbis</p>
      <Image src="/Pys/Others/karbis_py.png" width="128" height="128" />
      <Footer />
    </div>
  )
}
