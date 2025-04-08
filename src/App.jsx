import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar/Navbar.jsx'
import Home from './components/Home.jsx'
import CompanyHistory from './components/Company-History.jsx'
import Staff from './components/Staff.jsx'
import PastWork from './components/Past-Work.jsx'
import ContactUs from './components/Contact-us.jsx'
import ExternalLinks from './components/External-Links.jsx'

function App() {
  const [chosenSection, setchosenSection] = useState("company-history")
  const pages = [
    { name: "Home", component: Home },
    { name: "Company History", component: CompanyHistory },
    { name: "Staff", component: Staff },
    { name: "Past Work", component: PastWork },
    { name: "Contact Us", component: ContactUs },
    { name: "External Links", component: ExternalLinks },
  ]
  const navToSection = (section) => {
    console.log(section)
    setchosenSection(section)
  };  

  return (
    <>

      <Navbar navToSection={navToSection}/>
      {pages.map((item, index) => {
        const Component = item.component
        const name = item.name
        return (
          <div key={item.name}>
          {(chosenSection === name) ? <Component navToSection = {navToSection}></Component> : <></>}
            </div>
        )
      })}
      {/* {(chosenSection === 'home') ? <Home></Home> : <></>} */}

    </>
  )
}

export default App
