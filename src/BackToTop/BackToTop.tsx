import React, { useState, useEffect } from "react";

import "./backtotop.css";
const BackToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  return (
    <>
      {showTopBtn && (
        <div className="back-to--top">
          <button onClick={goToTop}>Back to top</button>
        </div>
      )}
    </>
  );
};
export default BackToTop;
