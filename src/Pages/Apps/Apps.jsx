import React from "react";
import AllAppCards from "../AllAppCards/AllAppCards";
import { useLoaderData } from "react-router";

const Apps=()=>{
    const allAppCardsData=useLoaderData();
    console.log('allAppCardsData:',allAppCardsData);
    return(
        <div>
            <div className="text-center p-20">
                <h1 className="text-[48px] text-[#001931] font-bold">Our All Applications</h1>
                <p className="mt-4 text-[#627382]">Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <AllAppCards allAppCardsData={allAppCardsData}></AllAppCards>
        </div>
    )
}
export default Apps;