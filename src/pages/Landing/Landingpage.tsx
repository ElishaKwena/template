import React from "react";
import Navbar from '../../components/landing/Navbar';

import '../../assets/styles/components/cta-button.css'

import Hero from '../../components/landing/Hero';
import Trustee from '../../components/landing/Trustee';
const LandingPage: React.FC = () => {
  return (
    <>
    <Navbar />
    <main className="w-full min-h-screen bg-white dark:bg-black flex flex-col items-start justify-start font-fira-code">
      <section className="flex-col hero-section pt-[40px] lg:pt-[80px] ">
        <Hero />
      </section>
      <div className="w-full bg-dark800 min-h-[200px] grid place-items-center">
        <div className="w-[90%] mx-auto">
          <Trustee/>
        </div>
      </div>
      
    </main>
    </>

  );
  // bg-[radial-gradient(circle_at_75%_50%,rgba(37,99,235,0.15)_0%,rgba(10,10,10,1)_60%)]
}   
export default LandingPage;