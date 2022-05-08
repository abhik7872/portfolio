import React from 'react'
import Header from './components/header/header'
import Nav from './components/nav/nav'
import About from './components/about/about'
import Experience from './components/experience/experience'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'

const App = () => {
  return (
    <div>
      <>
        <Nav />
        <Header />
        <About />
        <Experience />
        <Contact />
        <Footer />
      </>
    </div>
  )
}

export default App
