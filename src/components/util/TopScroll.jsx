import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const TopScroll = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
