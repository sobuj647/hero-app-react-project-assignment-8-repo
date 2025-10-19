import React from "react";
import { Link } from "react-router";
import BannerImg from '../../assets/hero.png';
import GoogleBtnImg from '../../assets/google-play.png';
import PlayStorImg from '../../assets/app-stor.png';

const Banner=()=>{
    return(
        <div className="text-center bg-[#f2f2f2] px-20 pt-20 max-w-[1600px] mx-auto">
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
    )
}
export default Banner;