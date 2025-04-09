// src/components/Navbar.jsx
// Importing state, but it's not being used.  I kept it in as it may be useful to add state later.
import { useState } from 'react';


//This defines a functional component named Navbar.
//It accepts a prop {navToSection}, which is used to change the active page in the App component
const Navbar = ({navToSection}) => {
    // This array contains the navigation items we want to display.
    //Each object has a name property which represents the visible label and value that will be passed back.
    //When clicked.
    const navItems = [
        { name: "Home", },
        { name: "Company History", },
        { name: "Staff", },
        { name: "Past Work", },
        { name: "Contact Us", },
        { name: "External Links", },
    ]
   
    //.map() loops through each item in navItems
    //For each one, it renders a <li> item with a unique Key.
    //This key is necessary for React to track list items.
    return (
        <nav className="navClass">
            {navItems.map((item) => (
                <li key={(item.name)}>
                    {/* commented out earlier link items */}
                    {/* <a href='#'>{item.name}</a> */}
                    {/* Button event listener that calls navToSection function */}
                    <button onClick={() => navToSection(item.name)}>{item.name}</button>
                </li>
            )
        
        )}
        </nav>
    )
};

//Export the Navbar component to the App.
export default Navbar;

// import { Link } from 'react-router';
{/* <Link to={item.path} className="PathClass">
                        {item.name}
                    </Link> */}