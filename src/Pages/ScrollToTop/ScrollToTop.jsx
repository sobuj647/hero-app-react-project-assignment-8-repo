import React, { useEffect } from "react";
import { useLocation } from "react-router";


const ScrollToTop=()=>{
    const {pathname} = useLocation();

    useEffect(()=>{
        if (pathname === "/apps") {
      window.scrollTo(0, 0);
    }
    }, [pathname]);
    return null;
};

export default ScrollToTop;