import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getStoreCard } from "../../utility/addToDB";
import InstallationCard from "../InstallationCard/InstallationCard";
import { TiArrowSortedDown } from "react-icons/ti";




const Installation=()=>{

    const[installationList, setInstallationList]=useState([]);

    const [sort, setSort]=useState("");

    const cardData=useLoaderData();
    // console.log(cardData);

    useEffect(()=>{
        const storedCardData=getStoreCard();
        // console.log(storedCardData);

        const myInstallationList=cardData.filter(card=>storedCardData.includes(card.id))
        setInstallationList(myInstallationList);
    }, [cardData]);

    const handleSort=(type)=>{
        setSort(type);
        if(type==="Low-High"){
            const sortedBySize=[...installationList].sort((a,b)=>a.size-b.size)
            setInstallationList(sortedBySize);
        }

        if(type==="High-low"){
            const sortedBySize=[...installationList].sort((a,b)=>b.size-a.size)
            setInstallationList(sortedBySize);
        }
    }
    
    return(
        <div className="bg-[#efefef] max-w-[1600px] mx-auto p-4">
            <div className="text-center">
                <h1 className="text-[48px] text-[#001931] font-bold">Your Installed Apps</h1>
                <p className="mt-4 text-[#627382] mb-10">
                    Explore All Trending Apps on the Market developed by us
                </p>
                <div>
                    <div className="flex justify-between items-center">
                        <div className="text-2xl font-semibold text-[#001931]">
                            <h1>{installationList.length} Apps Found</h1>
                        </div>
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn m-1 text-[#627382]">
                            {sort?sort:"Sort By Size"}
                            <span className="text-[20px]"><TiArrowSortedDown /></span>
                        </div>
                            <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-35 p-2 shadow-sm">
                                <li><a onClick={()=>handleSort("Sort By Size")}>Sort By Size</a></li>
                                <li><a onClick={()=>handleSort("Low-High")}>Low-High</a></li>
                                <li><a onClick={()=>handleSort("High-low")}>High-low</a></li>
                            </ul>
                    </div>
                    </div>
                    {
                    installationList.map((card)=><InstallationCard key={card.id} card={card}></InstallationCard>)
                    }
                </div>
            </div>
        </div>
    )
}
export default Installation;