"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const LandingPage = () => {
  const [showText, setShowText] = useState(false);
  const [audioPlaying, setAudioPlaying] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowText(true);
    }, 3000); // Show text after 3 seconds

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const video = document.getElementById(
      "landing-video"
    ) as HTMLVideoElement | null;

    if (video) {
      video.currentTime = 0;

      let hasPlayedOnce = false;

      const handleTimeUpdate = () => {
        if (!hasPlayedOnce && video.currentTime >= video.duration - 0.1) {
          hasPlayedOnce = true;
          video.currentTime = 3.3;
          video.play();
        }

        if (hasPlayedOnce && video.currentTime >= video.duration - 0.1) {
          video.currentTime = 3.3;
          video.play();
        }
      };

      video.addEventListener("timeupdate", handleTimeUpdate);

      return () => {
        video.removeEventListener("timeupdate", handleTimeUpdate);
      };
    }
  }, []);

  useEffect(() => {
    const audio = document.getElementById("landing-audio") as HTMLAudioElement | null;
    if (audio) {
      audio.play().then(() => {
        setAudioPlaying(true);
      }).catch((err) => {
        console.error("Audio playback error:", err);
      });
    }
  }, []);
  

  return (
    <div className="relative min-w-screen h-screen">
      <video
        id="landing-video"
        className="absolute top-0 left-0 w-screen h-full object-cover"
        src="/final.mov"
        autoPlay
        muted
        playsInline
        loop={false} // disable default loop
      />
       <audio
        id="landing-audio"
        src="/sound.mp3"
        autoPlay
        loop
        muted={false} // Set to true if you want to mute the audio by default
      />
      <div className="relative z-10 flex flex-col items-center mb-4 justify-center h-full px-4 text-center">
        {showText && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className=" text-4xl md:text-5xl font-light italic font-newsreader text-yellow-200 w-full">
              the sweet nineteenth of april.
            </h1>
            <div className="flex justify-between gap-2 mt-4 self-center text-center w-full">
              <p className="text-white text-xs md:text-sm font-work-sans w-3">
                u are invited to celebrate the 23th birthday of miss <p className="font-newsreader italic">April</p> aka <p className="font-newsreader italic">tuộc</p> aka  <p className="font-newsreader italic">thaotranle</p>
              </p>
              <p className="text-white text-xs md:text-sm font-work-sans w-3 mr-9">
                at{" "}
                <a
                  href="https://maps.app.goo.gl/DAmR4eLGv8H4jNvy5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 decoration-2 decoration-yellow-200 hover:decoration-yellow-200"
                >
                  I hate monday dining
                </a>
                , 12:30 pm, 19 april 2025
              </p>
            </div>
            <div className="flex self-end text-center justify-end w-full">
              <p className="text-white text-xs md:text-sm font-newsreader italic w-3 mr-9 ">
              ∞ regards and wishes, <br />  <br />

               <p className="font-poppins not-italic  ">nolan</p>
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default LandingPage;
