import { useState } from 'react';


const Navbar = ({navToSection}) => {
    const navItems = [
        { name: "Home", },
        { name: "Company History", },
        { name: "Staff", },
        { name: "Past Work", },
        { name: "Contact Us", },
        { name: "External Links", },
    ]
   
    return (
        <nav className="navClass">
            {navItems.map((item) => (
                <li key={(item.name)}>
                    {/* <a href='#'>{item.name}</a> */}
                    <button onClick={() => navToSection(item.name)}>{item.name}</button>
                </li>
            )
        
        )}
        </nav>
    )
};


export default Navbar;

// import { Link } from 'react-router';
{/* <Link to={item.path} className="PathClass">
                        {item.name}
                    </Link> */}