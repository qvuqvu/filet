"use client"
import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ParallaxProvider>
      <main className="h-full bg-white overflow-auto">
        <div className="mx-auto max-w-screen-xl h-full">{children}</div>
      </main>
    </ParallaxProvider>
  );
};

export default LandingLayout;
