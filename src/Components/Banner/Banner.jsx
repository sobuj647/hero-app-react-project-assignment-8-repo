import React from "react";
import { Link } from "react-router";
import BannerImg from '../../assets/hero.png';
import GoogleBtnImg from '../../assets/google-play.png';
import PlayStorImg from '../../assets/app-stor.png';
import './Banner.css';

const Banner=()=>{
    return(
        <div className="text-center bg-[#f2f2f2] max-w-[1600px] mx-auto">
            <div className="px-20 pt-20">
                <div>
                   <h1 className="text-[72px] font-bold text-[#001931]">
                       We Build <br /><span className="text-[#632ee3]">Productive</span> Apps
                   </h1>
                   <p className="text-[20px] text-[#627382] mt-4">
                       At HERO. IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.
                   </p>
                </div>
                <div className="mt-10">
                    <Link to='https://play.google.com/store/games?hl=en'>
                        <button className="btn">
                            <img src={GoogleBtnImg} alt="" />
                            Google Play
                        </button>
                    </Link>
                    <Link to='https://www.apple.com/app-store/'>
                        <button className="btn ml-4">
                            <img src={PlayStorImg} alt="" />
                            App Store
                        </button>
                    </Link>
                </div>
                <div className="mt-10">
                    <img className="mx-auto" src={BannerImg} alt="Loading........." />
                </div>
            </div>

            <div className="bg text-white">
                <div className="p-20">
                    <div>
                        <h1 className="text-[48px] font-bold">
                            Trusted by Millions, Built for You
                        </h1>
                    </div>
                    <div className="flex justify-center items-center gap-40 mt-10">
                        <div>
                            <p>Total Downloads</p>
                            <p className="text-[64px] font-extrabold">29.6M</p>
                            <p>21% more than last month</p>
                        </div>
                        <div>
                            <p>Total Reviews</p>
                            <p className="text-[64px] font-extrabold">906K</p>
                            <p>46% more than last month</p>
                        </div>
                        <div>
                            <p>Active Apps</p>
                            <p className="text-[64px] font-extrabold">132+</p>
                            <p>31 more will Launch</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Banner;