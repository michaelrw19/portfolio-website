/* Wrapper to always start from the top of the page when changing routes */

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  // Run on every path change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
