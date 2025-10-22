import React from "react";
import { Link } from "react-router";
import CardImg from '../../assets/demo-app2.webp';
import { MdOutlineFileDownload } from "react-icons/md";
import { IoStar } from "react-icons/io5";

const AppCard=()=>{
    return(
        <div className="max-w-[1600px] mx-auto">
            <Link>
                <div className="w-[300px] h-[435px] bg-[#f3f3f3] border-2 border-red-500 p-4">
                    <div>
                        <img className="mx-auto w-full rounded-2xl" src={CardImg} alt="" />
                    </div>
                    <div className="my-4">
                        <h1>Forest: Focus for Productivity</h1>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2 text-[20px] bg-[#d9d9d9] text-[#00d390] py-2 px-4">
                            <MdOutlineFileDownload />
                            <p>9M</p>
                        </div>
                        <div className="flex items-center gap-1 text-[20px] text-[#ff8811] bg-[#fff0e1] py-2 px-4">
                            <span className="text-[25px]"><IoStar/></span>
                            <p>5</p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}
export default AppCard;