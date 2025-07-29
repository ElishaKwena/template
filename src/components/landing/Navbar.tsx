import React from "react";
import { Link } from "react-router-dom";

import '../../assets/styles/components/cta-button.css'

import logo from '/logo.png'; // Adjust the path to your logo image

const Navbar: React.FC = () => {
  return (
    <>
    <header className="w-full fixed top-0 grid place-items-center py-1 p-1 z-50">
    <nav className="w-full lg:w-[95%] flex items-center justify-between px-4 py-3 bg-white/5 rounded-lg text-sapphire dark:bg-black dark:text-white backdrop-blur-md">
      <div className="left">
        <Link to="/" className="flex items-center justify-center gap-2">
          <img src={logo} alt="" className="lg:w-10 w-6"/>
          <h1 className="text-sapphire font-extrabold font-['impact'] lg:text-4xl text-xl">CODuit</h1>
        </Link>
      </div>
      <div className="cta">
        <button className="cta-btn relative overflow-hidden bg-sapphire text-white font-fira-code lg:p-4 p-3 font-extrabold rounded-md lg:text-lg text-sm">Get Started</button>
      </div>
    </nav>
    </header>

    </>

  );
};
export default Navbar;


// logo inspo
// "Minimalist tech logo featuring a stylized curly brace `{ }` designed as a speech bubble, with a small glowing connection dot in the center. The style is flat, modern, and geometric, using a gradient of blue (for trust) and teal (for innovation). The background is clean white. The design should look professional, scalable, and suitable for a developer community platform. No text, just the icon."  