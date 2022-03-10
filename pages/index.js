import Header from '../components/Header'
import Footer from '../components/Footer'
import Logo from '../components/Logo'
import defstyles from '../styles/GlobalStyles.module.css'

export default function Home() {
  return (
    <div className={defstyles.dark}>
      <Header />
      <Logo />
      <h1 className={defstyles.defaultText}>Home</h1>
      <p className={defstyles.defaultText}>Hi there! My name is Rasbi, but you can call me Ras for short</p>
      <p className={defstyles.defaultText}>I am not a web designer as you can tell by this uglyass site Why did i make this</p>
      <p className={defstyles.defaultText}><i>Clique</i> the top navigation bar buttons to view more stuff on this site, there are easter eggs hidden in some places</p>
      <Footer />
      <style jsx global>{`
        body {
          background-color:rgb(27, 27, 27);;
        }
      `}</style>
    </div>
  )
}
