import React from "react";
import { Link, useLoaderData } from "react-router";
import Banner from "../../Components/Banner/Banner";
import AppsCards from "../AppsCards/AppsCards";

const Home=()=>{
    const homeApps = useLoaderData();
    console.log(homeApps);
    return(
        <div>
            <Banner></Banner>
            <AppsCards homeApps={homeApps}></AppsCards>
            <div className="text-center mt-5">
                <Link to='/apps'>
                    <button className="btn">See all Apps</button>
                </Link>
            </div>
        </div>
    )
}
export default Home;