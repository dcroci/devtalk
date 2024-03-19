"use client";
import { useState } from "react";
import SideNav from "../sections/SideNav";

function HamburgerMenu() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <div onClick={() => setShowMenu(true)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          className="h-6 w-6 stroke-almostWhite"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
      {showMenu && (
        <div className="absolute bottom-0 left-0 right-0 top-0 h-screen w-screen bg-red-500/50">
          <SideNav />
        </div>
      )}
    </>
  );
}

export default HamburgerMenu;
