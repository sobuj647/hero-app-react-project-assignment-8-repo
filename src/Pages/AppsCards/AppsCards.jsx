import React, { Suspense } from "react";
import AppCard from "../AppCard/AppCard";

const AppsCards=({homeApps})=>{
    
    return(
        <div className="max-w-[1600px] mx-auto">
            <Suspense fallback={<span>Loading.........</span>}>
            <div className="grid grid-cols-4 gap-3">
                {
                    homeApps.map((homeApp)=><AppCard key={homeApp.id} homeApp={homeApp}></AppCard>)
                }
            </div>
            </Suspense>
        </div>
    )
}

export default AppsCards;