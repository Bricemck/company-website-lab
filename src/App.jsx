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
  //Keeps track of the page being selected in order to display.
  //chosenSection are our nav pages like 'home' & 'past work'
  //setchosenSection is the function used to update the section.
  //Intitial section goes to the home page.
  const [chosenSection, setchosenSection] = useState("Home")
  //Each object represents a page.
  //name: matches with chosenSection.
  //component: the React component that should render for that page.
  const pages = [
    { name: "Home", component: Home },
    { name: "Company History", component: CompanyHistory },
    { name: "Staff", component: Staff },
    { name: "Past Work", component: PastWork },
    { name: "Contact Us", component: ContactUs },
    { name: "External Links", component: ExternalLinks },
  ]

  //This helper function uppdates the current section.
  //It's passed to <Navbar /> below and to each page component 
  // (so they could also trigger navigation?)
  const navToSection = (section) => {
    // console.log(section)
    setchosenSection(section)
  };

  //Renders <Navbar> and gives ability to change section
  return (
    <>
      {/* map() renders the page dynamically by looping through our pages array */}
      {/* Works like a for each function */}
      {/* If chosenSection matches the current name, render that component. */}
      {/* React needs components to start with a capical letter. */}
      <Navbar navToSection={navToSection} />
      {pages.map((item, index) => {
        const Component = item.component
        const name = item.name
        return (
          <div key={item.name}>
            {(chosenSection === name) ? <Component navToSection={navToSection}></Component> : <></>}
          </div>
        )
      })}
      {/* {(chosenSection === 'home') ? <Home></Home> : <></>} */}

    </>
  )
}

export default App
