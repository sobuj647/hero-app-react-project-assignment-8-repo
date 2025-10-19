import React from "react";
import Navbar from "../../Components/Header/Navbar";
import { Outlet } from "react-router";
import Banner from "../../Components/Banner/Banner";
import Footer from "../../Components/Footer/Footer";

const Root=()=>{
    return(
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    )
}
export default Root;