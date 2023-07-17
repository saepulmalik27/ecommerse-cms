import { useMediaQuery } from "./useMediaQuery";

const useResponsive = () => {
    const isScreenSM = useMediaQuery("(min-width: 640px)");
    const isScreenMD = useMediaQuery("(min-width: 768px)");
    const isScreenLG = useMediaQuery("(min-width: 1024px)");
    const isScreenXL = useMediaQuery("(min-width: 1280px)");
    const isScreen2XL = useMediaQuery("(min-width: 1536px)");

    return {
        isScreenSM,
        isScreenMD,
        isScreenLG,
        isScreenXL,
        isScreen2XL,
    };
};

export default useResponsive;
