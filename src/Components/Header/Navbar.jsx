import React from "react";
import Logo from '../../assets/logo.png';
import { NavLink } from "react-router";
import { FaGithub } from "react-icons/fa";
import './Navbar.css';

const Navbar=()=>{
    return(
        <div className="flex justify-between items-center max-w-[1600px] mx-auto py-[19px] px-[80px] border-1 border-red-500 bg-[#ffffff]">
            <div className="flex items-center gap-2">
                <NavLink to='/'>
                    <img className="w-[30px]" src={Logo} alt="Loading........" />
                </NavLink>
                <h1>HERO.IO</h1>
            </div>
            <div>
                <NavLink to='/'>Home</NavLink>
                <NavLink className="ml-8" to='/apps'>Apps</NavLink>
                <NavLink className="ml-8" to='/installation'>Installation</NavLink>
            </div>
            <div>
                <NavLink to='https://github.com/sobuj647/hero-app-react-project-assignment-8-repo'>
                    <button className="btn linear-gradient">
                        <FaGithub/>
                        Contribute
                    </button>
                </NavLink>
            </div>
        </div>
    )
}
export default Navbar;