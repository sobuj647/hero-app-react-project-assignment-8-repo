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
                <NavLink className="active" to='/'>Home</NavLink>
                <NavLink className="active ml-8">Apps</NavLink>
                <NavLink className="active ml-8">Installation</NavLink>
            </div>
            <div>
                <NavLink>
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