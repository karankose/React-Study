import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Component/Header.jsx'
import Section from './Component/Section.jsx'
import SectionAbout from './Component/SectionAbout.jsx'
import Chocolate from './Component/chocolate.jsx'
import Offer from './Component/Offer.jsx'
import ClientSection from './Component/ClientSection.jsx'
import ContactSection from './Component/ContactSection.jsx'
import InfoSection from './Component/InfoSection.jsx'
import Footer from './Component/Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Section/>
    <SectionAbout/>
    <Chocolate/>
    <Offer/>
    <ClientSection/>
    <ContactSection/>
    <InfoSection/>
    <Footer/>
    </>
  )
}

export default App
