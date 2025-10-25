import React from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoStar } from "react-icons/io5";


const InstallationCard=({ card })=>{

    const {image, title, downloads, ratingAvg, size} = card;
    return(
        <div>
            <div className="flex justify-between items-center gap-4 bg-[#f3f3f3] border-2 border-red-500 rounded-2xl mt-5">
                <div className=" flex">
                    <div>
                        <img className="mx-auto w-[100px] rounded-2xl" src={image} alt="" />
                    </div>
                    <div className="p-4">
                        <div className="text-[#001931] font-bold">
                            <h1>{title}</h1>
                        </div>
                        <div className="flex justify-around items-center gap-3 mt-4">
                            <div className="flex items-center gap-2 text-[#00d390]">
                                <MdOutlineFileDownload />
                                <p>{downloads}M</p>
                            </div>
                            <div className="flex items-center gap-1 text-[#ff8811]">
                                <IoStar/>
                                <p>{ratingAvg}</p>
                            </div>
                            <div>
                                <p>{size}MB</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mr-4">
                    <button className="btn bg-[#00d390] text-white">Uninstall</button>
                </div>
            </div>
        </div>
    )
};

export default InstallationCard;