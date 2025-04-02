"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Bell, ChevronDown } from "lucide-react";

const Navbar = () => {
  const currentPath = usePathname();
  const [currentHeader, setCurrentHeader] = useState("Home");
  useEffect(() => {
    if (currentPath === "/") {
      setCurrentHeader("Home");
    } else {
      switch (currentPath.slice(1)) {
        case "portfolio":
          setCurrentHeader("Portfolio");
          break;

        case "inputs":
          setCurrentHeader("Inputs");
          break;

        case "profile":
          setCurrentHeader("Profile");
          break;
      }
    }
  }, [currentPath]);

  return (
    <nav>
      <div className="hidden lg:flex md:flex justify-end items-center px-6 border-b py-2 gap-2 ">
        <Bell />
        <div className="flex gap-1">
          <Image
            src={
              "https://gravatar.com/avatar/aebe5a9d84f898d6a65124138a576e5b?s=400&d=robohash&r=x"
            }
            alt="profile"
            width={50}
            height={50}
            className="border rounded-full "
          />
          <div className="flex flex-col ">
            <span className="text-xs font-semibold">Lorem Ips</span>
            <span className="text-xs ">Manager</span>
          </div>
          <ChevronDown />
        </div>
      </div>
      <div
        className="min-w-2xs max-w-2xl md:max-w-4xl lg:max-w-5xl  flex flex-row items-center justify-between mt-2 px-4 lg:px-8
    md:w-full lg:w-full "
      >
        <p className={"font-semibold text-xl font-roboto   "}>
          {currentHeader}
        </p>
        <div className="flex gap-2 items-center md:hidden lg:hidden">
          <Image
            src="/ic_round-shopping-bag.svg"
            alt="CartIcon"
            width={24}
            height={24}
          />
          <Image
            src="/ic_baseline-notifications.svg"
            alt="CartIcon"
            width={24}
            height={24}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
