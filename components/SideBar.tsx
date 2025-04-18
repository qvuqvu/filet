"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Montserrat, Work_Sans } from "next/font/google";
import {
  Activity,
  HomeIcon,
  LayoutDashboard,
  PersonStanding,
  Settings,
  Trash,
  User2,
} from "lucide-react";
import { UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";

const workSans = Work_Sans({
  weight: "600",
  subsets: ["latin"],
});

const routes = [
  {
    label: "My cheatsheets",
    icon: HomeIcon,
    href: "/mycheatsheets",
    color: "text-white",
  },
  {
    label: "Tracking",
    icon: Activity,
    href: "/tracking",
    color: "text-white",
  },
  {
    label: "Trash",
    icon: Trash,
    href: "/trash",
    color: "text-white",
  },
  {
    label: "My account",
    icon: User2,
    href: "/myaccount",
    color: "text-white",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
    color: "text-white",
  },
];
const SideBar = () => {
  const pathName = usePathname();
  return (
    <div className="space-y-4 py-4 flex flex-col h-full text-white bg-neutral-950">
      <div className="px-3 py-2 flex-1">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          <div className="relative w-11 h-11 mr-4">
            <Image fill alt="logo" src="/logo.png" />
          </div>
          <h1 className={cn("text-2xl font-bold", workSans.className)}>
            filet
          </h1>
        </Link>
        <div className="space-y-5">
          {routes.map((route) => (
            <Link
              href={route.href}
              key={route.href}
              className={
                (cn(
                  "text-sm font-work-sans flex flex-row p-3 w-36 justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition"
                ),
                pathName === route.href
                  ? " text-white rounded-lg bg-slate-500"
                  : "text-zinc-400")
              }
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
