import React from "react";
import { Link } from "react-router";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoStar } from "react-icons/io5";

const AllAppCard=({appCardData})=>{
    const {id, image, title, downloads, ratingAvg}=appCardData;
    return(
        <div>
            <Link to={`/cardsDetails/${id}`}>
                <div className="bg-[#f3f3f3] border-2 border-red-500 p-4 rounded-2xl">
                    <div>
                        <img className="mx-auto w-full rounded-2xl" src={image} alt="" />
                    </div>
                    <div className="my-4 text-[20px] text-[#001931] font-bold">
                        <h1>{title}</h1>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2 text-[20px] bg-[#d9d9d9] text-[#00d390] py-2 px-4">
                            <MdOutlineFileDownload />
                            <p>{downloads}M</p>
                        </div>
                        <div className="flex items-center gap-1 text-[20px] text-[#ff8811] bg-[#fff0e1] py-2 px-4">
                            <span className="text-[25px]"><IoStar/></span>
                            <p>{ratingAvg}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}
export default AllAppCard;