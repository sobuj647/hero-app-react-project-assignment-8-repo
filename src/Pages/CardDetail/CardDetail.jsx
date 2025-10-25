import React, { useEffect, useState } from "react";
import ImgApp from '../../assets/detailImg.webp';
import { MdOutlineFileDownload } from "react-icons/md";
import { IoStar } from "react-icons/io5";
import { AiFillLike } from "react-icons/ai";
import { Link } from "react-router";
import {BarChart,Bar,XAxis,YAxis,CartesianGrid,Tooltip,ResponsiveContainer}from"recharts";
import { addToStoreDB, getStoreCard } from "../../utility/addToDB";



const CardDetail=({ singleCard })=>{
    const {id, image, title, companyName, description, size, reviews, ratingAvg, downloads, ratings, }= singleCard;

    const [install, setInstall]=useState(false);
    useEffect(()=>{
        const storedCardData=getStoreCard();
        if(storedCardData.includes(id)){
            setInstall(true);
        }
    },[id])


    const handleInstallBtn=(id)=>{
        if (!install) {
           addToStoreDB(id);
           setInstall(true);
        }
        
    }

    const chartData= ratings.slice().reverse().map(rating=>({
    name: rating.name,
    value: rating.count
}))
    return(
        <div className="bg-[#f2f2f2] max-w-[1600px] mx-auto p-20">
            <div className="flex gap-10">
                <div>
                    <img src={image} alt="" />
                </div>
                <div>
                    <div>
                        <h1 className="text-[32px] text-[#001931] font-bold">
                            {title}
                        </h1>
                        <p className="text-[#a07af8]">Developed by {companyName}</p>
                    </div>
                    <div className="divider my-[30px] w-full"></div>
                    <div className="flex gap-6 mb-7">
                        <div className="text-center">
                            <span className="flex justify-center text-2xl"><MdOutlineFileDownload /></span>
                            <p>Downloads</p>
                            <p className="mt-2">{downloads}M</p>
                        </div>
                        <div className="text-center">
                            <span className="flex justify-center text-2xl"><IoStar/></span>
                            <p>Average Ratings</p>
                            <p className="mt-2">{ratingAvg}</p>
                        </div>
                        <div className="text-center">
                            <span className="flex justify-center text-2xl"><AiFillLike /></span>
                            <p>Total Reviews</p>
                            <p className="mt-2">{reviews}K</p>
                        </div>
                    </div>
                    
                    <button onClick={()=>handleInstallBtn(id)} className="btn text-white bg-[#00d390]">{install ? "Installed" : "Install Now"} <span>({size})</span></button>
                    
                </div>
            </div>
            <div className="divider my-[30px]"></div>
            {/* Bar Chart */}
            <div className="w-full h-80 bg-gray-50 p-4 rounded-2xl shadow-sm">
                <h2 className="text-lg font-bold mb-4">Ratings</h2>
                <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData} layout="vertical" margin={{ top: 10, right: 30, left: 50, bottom: 10 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                <XAxis type="number" domain={[0, 12000]} />
                <YAxis dataKey="name" type="category" width={70} />
                <Tooltip />
                <Bar dataKey="value" fill="#FF9500" barSize={20} radius={[5, 5, 5, 5]}/>
                </BarChart>
                </ResponsiveContainer>
            </div>
            <div className="divider my-[30px]"></div>
            <div>
                <div>
                    <h1>Description</h1>
                </div>
                <div className="mt-6">
                    <p>
                        {description}
                    </p>
                </div>
            </div>

        </div>
    )
};

export default CardDetail;