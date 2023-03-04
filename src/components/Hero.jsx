import React from "react";

const Hero = () => {
  return (
    <div className="hero h-[680px] bg-base-200">
      <div className="hero-content gap-16 flex-col lg:flex-row-reverse">
        <img
          src="https://vitejs.dev/logo-with-shadow.png"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-8xl bg-gradient-to-r from-cyan-500 to-red-500 bg-clip-text text-transparent">Vite</h1>
          <h2 className="text-5xl font-bold">Next Generation Frontend Tooling!</h2>
          <p className="py-6">
          Get ready for a development environment that can finally catch up with you.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
