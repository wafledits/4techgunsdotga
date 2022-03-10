import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Logo from '../../components/Logo'
import defstyles from '../../styles/GlobalStyles.module.css'
import Image from 'next/image'

export default function PyClassics() {
  return (
    <div className={defstyles.dark}>
      <Header />
      <Logo />
      <h1 className={defstyles.defaultText}>The Py Series - Classics</h1>
      <p className={defstyles.defaultText}>These are the original Pys that I have created. There's a total of 4 Pys in this collection.</p>
      
      <p className={defstyles.defaultText}>Resbi Py - Original</p>
      <Image src="/Pys/Classics/resbi_py.png" width="128" height="128" />

      <p className={defstyles.defaultText}>Resbi Py - Definitive Edition</p>
      <Image src="/Pys/Classics/resbi_py_definitive.png" width="128" height="128" />

      <p className={defstyles.defaultText}>Blub(r)i Py - The polar-opposite of Resbi</p>
      <Image src="/Pys/Classics/blubri_py.png" width="128" height="128" />

      <p className={defstyles.defaultText}>Tech Py - A Py that fits my old colour scheme</p>
      <Image src="/Pys/Classics/tech_py.png" width="128" height="128" />
      <Footer />

      <style jsx global>{`
        body {
          background-color:rgb(27, 27, 27);;
        }
      `}</style>
    </div>
  )
}
