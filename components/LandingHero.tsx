"use client";

import { useAuth } from "@clerk/nextjs";
import Image from "next/image";
import TypewriterComponent from "typewriter-effect";
import { Button } from "./ui/button";
import { Parallax } from "react-scroll-parallax";
import { useParallax } from "react-scroll-parallax";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";
import Description from "../components/Description";

const LandingHero = () => {
  const knife = useRef(null);

  const fish = useRef(null);
  const fish1 = useRef(null);
  const fish2 = useRef(null);
  const cut1 = useRef(null);
  const cut2 = useRef(null);
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,

        scrub: true,

        start: "top",

        end: "+=600px",

        markers: true,
      },
    });
    // Set initial state
    gsap.set(knife.current, {
      opacity: 1,
      translateX: 1050,
      translateY: -300,
      scale: 0.5,
      rotation: 100,
    });
    gsap.set(fish.current, { opacity: 1, rotation: 0 });
    gsap.set(fish1.current, { xPercent: 0, yPercent: 0, rotation: 0 });
    gsap.set(fish2.current, { xPercent: 0, yPercent: 0, rotation: 0 });
    gsap.set(cut1.current, {
      xPercent: 0,
      yPercent: 0,
      rotation: 0,
      scale: 0.3,
    });
    gsap.set(cut2.current, {
      xPercent: 0,
      yPercent: 0,
      rotation: 0,
      scale: 0.3,
    });
    timeline
      .to(
        knife.current,
        {
          duration: 0.1,
          rotation: 20,
          translateX: 300,
          translateY: 10,
          scale: 1,
          autoAlpha: 0,
        },
        0
      ) // Fade out top layer
      .to(
        cut1.current,
        {
          duration: 0.2,
          rotation: 20,
          xPercent: -160,
          yPercent: -150,
          scale: 1.2,
          autoAlpha: 0,
        },
        0
      ) // Fade out top layer
      .to(
        cut2.current,
        {
          duration: 0.2,
          rotation: 20,
          xPercent: 300,
          yPercent: -150,
          scale: 1.2,
          autoAlpha: 0,
        },
        0
      ) // Fade out top layer
      .to(fish.current, { opacity: 0, duration: 0.005, rotation: 0 }, 0) // Fade out top layer
      .to(
        fish1.current,
        {
          xPercent: -300,
          yPercent: 200,
          rotation: -15,
          rotateX: 50,
          duration: 0.5,
          autoAlpha: 0,
        },
        0
      )
      .to(
        fish2.current,
        {
          xPercent: 300,
          yPercent: 200,
          rotation: -15,
          duration: 0.5,
          autoAlpha: 0,
        },
        0
      );
  }, []);

  // const knife = useParallax<HTMLDivElement>({
  //   translateX: ["1050px", "400px"],
  //   translateY: ["-300px", "0px"],
  //   scale: [0.5, 1],
  //   rotate: [100, 20],
  //   easing: "easeInQuad",
  //   opacity: [1, 0],

  // });
  const rightElement = useParallax<HTMLDivElement>({
    opacity: [0.5, 1],
    rotate: [90, 20],
    easing: "easeInQuad",
  });
  const leftElement = useParallax<HTMLDivElement>({
    opacity: [0.5, 1],
    rotate: [90, 0],
    easing: "easeInQuad",
  });
  const callOut = useParallax<HTMLDivElement>({
    opacity: [0.5, 1],
    scale: [0.8, 1],
  });
  const sashimi = useParallax<HTMLDivElement>({
    scale: [0.6, 1.1, "easeOut"],
    speed: -5,
    rotate: [40, 0],
  });
  const sashimiBg = useParallax<HTMLDivElement>({
    scale: [1.1, 0.8, "easeOutQuart"],
    speed: -5,
  });
  // const parallax = useParallax<HTMLDivElement>({
  //   opacity: [6, 0],
  //   translateY: [-20, 10],
  //   rotate: [27, -19],
  //   speed: -5,
  //   scale: [0.9, 1.4, "easeInQuad"],
  // });
  const { isSignedIn } = useAuth();
  return (
    <div className="py-24 text-center space-y-7 overflow-hidden">
      {/* <Description key={}/> */}
      <div ref={knife} className="w-[883px] z-50 h-[536px] absolute mb-3 ">
        <Image fill src="/knife.png" alt="knife" />
      </div>

      <div className="flex justify-center ">
        <div className="">
          <div ref={fish} className="w-[524px] z-[80] relative h-[178px] mb-3 ">
            <Image fill src="/fish.png" alt="fish" />
          </div>

          <div className="absolute">
            <div
              ref={cut1}
              className="w-[56px] z-50 h-[56px] absolute top-[-100px] right-[-200px] "
            >
              <Image fill src="/cut1.png" alt="cut1" />
            </div>
            <div
              ref={cut2}
              className="w-[73px] z-50 h-[62px] absolute top-[-140px] right-[-200px]  "
            >
              <Image fill src="/cut2.png" alt="cut2" />
            </div>
            <div
              ref={fish1}
              className="w-[213px] z-20 h-[149px] left-[10%] absolute top-[-169px] "
            >
              <Image fill src="/halffish1.png" alt="fish1" />
            </div>
            <div
              ref={fish2}
              className="w-[338px] z-10 h-[178px] absolute top-[-190px] left-[180px]"
            >
              <Image fill src="/halffish.png" alt="fish2" />
            </div>
            <div className="w-[110px] h-[137px] absolute  top-[-170px] left-[505px] ">
              <Image fill src="/bracket.png" alt="bracket" />
            </div>
            <div className="absolute left-[600px] bottom-[80px] w-40 text-left">
              OK. This shiny salmon is your CV
            </div>
          </div>
        </div>
      </div>
      <div className=" mt-3 font-poppins font-semibold text-primary text-4xl sm:text-5xl md:text-6xl lg:text-7xl ">
        <TypewriterComponent
          options={{
            strings: [
              "Filet your interview prep",
              "AI customized cheatsheets",
              "Knowledge-heavy interview",
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
          }}
        />
      </div>
      <h2 className="font-work-sans font-normal text-2xl">
        Drop your CV here and get the all-in-one cheatsheet
      </h2>
      <Button
        size="lg"
        className="text-lime-300 font-work-sans uppercase rounded-xl"
      >
        Upload a resume
      </Button>
      <div className="flex flex-col items-center mt-32">
        <div className="flex flex-col items-center">
          <div
            ref={callOut.ref}
            className="h-[219px] mt-10 w-[1px] absolute z-30 mb-3 "
          >
            <Image fill src="/line1.png" alt="line1" />
          </div>
          <div
            ref={callOut.ref}
            className="absolute text-worksans left-[51%] top-[95%]"
          >
            AFTER FILET
          </div>
          <div
            ref={sashimiBg.ref}
            className="h-[363px] mt-10 w-[363px] absolute top-[100%] "
          >
            <Image fill src="/Ellipse.png" alt="Ellipse" />
          </div>
          <div
            ref={sashimi.ref}
            className="h-[444px] mt-10 w-[444px] absolute top-[100%] "
          >
            <Image fill src="/sashimi.png" alt="sashimi" />
          </div>

          <div
            ref={callOut.ref}
            className="text-left font-work-sans w-56 absolute left-[73%] top-[120%]"
          >
            Customized technical cheatsheet: Javascript, React, or any tech
            stacks
          </div>
          <div
            ref={callOut.ref}
            className="text-left font-work-sans w-56 absolute right-[73%] top-[115%]"
          >
            Likely-to-be-asked behavioral interview questions based on your
            experience, skills on your CV
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div
            ref={callOut.ref}
            className="h-[219px] mt-10 w-[1px] absolute z-30 mb-3 top-[155%] "
          >
            <Image fill src="/line1.png" alt="line1" />
          </div>
          <div
            ref={callOut.ref}
            className="absolute text-worksans left-[51%] top-[170%]"
          >
            PACKAGING
          </div>
          <div
            ref={leftElement.ref}
            className="h-[512px] mt-10 w-[512px] absolute mb-3 top-[165%] left-[20%] "
          >
            <Image fill src="/leftElement.png" alt="leftElement" />
          </div>
          <div
            ref={rightElement.ref}
            className="h-[428px] mt-10 w-[515px] absolute mb-3 top-[175%] left-[55%]"
          >
            <Image fill src="/rightElement.png" alt="rightElement" />
          </div>
          <div className="h-[500px] mt-10 w-[500px] absolute z-30 mb-3 top-[175%] left-[35%] ">
            <Image fill src="/sashimiBox.png" alt="sashimiBox" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingHero;
