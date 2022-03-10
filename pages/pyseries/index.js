import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Logo from '../../components/Logo'
import defstyles from '../../styles/GlobalStyles.module.css'
import Link from 'next/link'

export default function PySeriesHome() {
  return (
    <div className={defstyles.dark}>
      <Header />
      <Logo />
      <h1 className={defstyles.defaultText}>The Py Series</h1>
      <p className={defstyles.defaultText}>This series is a collection of OCs and fan submission of my character series, "Py." (No they're not called Dream NFTs you goofball)</p>
      <p className={defstyles.defaultText}>There are 4 types of Pys, and those are "Classics," "Others," "Server Profiles," and the "Subwoofer Py Collection."</p>
      <p className={defstyles.defaultText}>If you have paint.net (it's a program, not a website!) then you can grab the Py template <a href="Pys/py_template.pdn">here!</a></p>
      <p className={defstyles.defaultText}>Also, they're not NFTs, screenshot these to your heart's content, I don't care what you do</p>
      
      <Link href="/pyseries/classics"><a className={defstyles.defaultLinkButton}>Classics</a></Link>
      <Link href="/pyseries/others"><a className={defstyles.defaultLinkButton}>Others</a></Link>
      <Link href="/pyseries/serverprofiles"><a className={defstyles.defaultLinkButton}>Server Profiles</a></Link>
      <Link href="/pyseries/subwoofercollection"><a className={defstyles.defaultLinkButton}>Subwoofer Py Collection</a></Link>
      
      <Footer />

      <style jsx global>{`
        body {
          background-color:rgb(27, 27, 27);;
        }
      `}</style>
    </div>
  )
}
