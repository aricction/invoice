import React from "react";
import DarkMode from "./darkmode";

const Navbar = ({isDark, toggleDarkMode})=>{
    return(
       <nav className=" relative bg-ceramic-300 dark:bg-dark-50 p-4 text-white shadow-xl">
        <div className="container mx-auto flex justify-end items-center ">
        <DarkMode isDark={isDark} toggleDarkMode={toggleDarkMode}/> 
        </div>
       </nav>
    )
}

export default Navbar;