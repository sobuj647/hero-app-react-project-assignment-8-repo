import React, { Suspense } from "react";
import AllAppCard from "../AllAppCard/AllAppCard";

const AllAppCards=({allAppCardsData})=>{
    return(
        <div className="max-w-[1600px] mx-auto">
            <Suspense fallback={<span>Loading.........</span>}>
                <div className="grid grid-cols-4 gap-3">
                    {
                        allAppCardsData.map((appCardData)=><AllAppCard key={appCardData.id} appCardData={appCardData}></AllAppCard>)
                    }
                </div>
            </Suspense>
        </div>
    )
}

export default AllAppCards;