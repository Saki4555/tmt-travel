import { useEffect } from "react";
import { useLocation } from "react-router";


const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top on route change
    }, [pathname]); // Runs every time the pathname changes

    return null;
};

export default ScrollToTop;
