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
      <h1 className={defstyles.defaultText}>The Py Series - Subwoofer Py Collection</h1>
      <p className={defstyles.defaultText}>These are Pys made by Subwooferz, a good friend of mine.</p>
      
      <p className={defstyles.defaultText}>Mad Py</p>
      <Image src="/Pys/Subwoofer Py Collection/mad_py.png" width="128" height="128" />

      <p className={defstyles.defaultText}>Sad Subwoofer Py</p>
      <Image src="/Pys/Subwoofer Py Collection/sad_py.png" width="128" height="128" />

      <p className={defstyles.defaultText}>Subwoofer Py</p>
      <Image src="/Pys/Subwoofer Py Collection/subwoofer_py.png" width="128" height="128" />
      <Footer />
    </div>
  )
}
