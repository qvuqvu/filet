"use client";

import { useAuth } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
const LandingNavbar = () => {
  const { isSignedIn } = useAuth();
  return (
    <nav className="p-4 bg-transparent flex items-center justify-between">
      <Link href="/" className="flex items-center">
        <div className="h-20 w-24 relative mr-4">
          <Image fill src="/logoLanding.png" alt="logo" />
        </div>
        <h1 className="text-2xl font-medium font-work-sans">Filet</h1>
      </Link>

      <div className=" flex items-center gap-x-2 z-[60]">
        <Link href={isSignedIn ? "/mycheatsheets" : "/sign-up"}>
          <Button variant="default" className="rounded-full">
            Get started
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default LandingNavbar;
