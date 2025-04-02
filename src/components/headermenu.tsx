"use client";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { FilterIcon, Search } from "lucide-react";
import { Input } from "./ui/input";

const HeaderMenu = () => {
  const [active, setActive] = useState("project");
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 672);
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="w-full flex justify-between">
      <ul
        className={`flex w-full md:w-1/2 lg:w-1/2 items-center justify-evenly border-b-2 mt-2 hover:cursor-pointer`}
      >
        <li
          className={`w-full text-sm font-medium font-roboto flex justify-center  p-2 ${
            active === "project"
              ? "text-[#DF5532] border-b-2  border-b-[#DF5532]"
              : "border-0"
          }`}
          onClick={() => setActive("project")}
        >
          Project
        </li>
        <li
          className={`w-full text-sm font-medium font-roboto flex justify-center p-2 ${
            active === "saved"
              ? "text-[#DF5532] border-b-2 border-b-[#DF5532]"
              : "border-0"
          } `}
          onClick={() => setActive("saved")}
        >
          Saved
        </li>
        <li
          className={`w-full text-sm font-medium font-roboto flex justify-center p-2 ${
            active === "shared"
              ? "text-[#DF5532] border-b-2 border-b-[#DF5532]"
              : "border-0"
          } `}
          onClick={() => setActive("shared")}
        >
          Shared
        </li>
        <li
          className={`w-full text-sm font-medium font-roboto flex justify-center p-2 ${
            active === "achievement"
              ? "text-[#DF5532] border-b-2 border-b-[#DF5532]"
              : "border-0"
          } `}
          onClick={() => setActive("achievement")}
        >
          Achievement
        </li>
      </ul>
      {!isSmallScreen && (
        <div className="flex items-center gap-4">
          <Button className="border-0 bg-white text-black hover:text-white">
            <div className="flex items-center m-auto gap-2">
              <FilterIcon className="hover:text-white" />
              <p>Filter</p>
            </div>
          </Button>
          {/* Search bar  */}
          <div className="w-full flex items-center space-x-1 border rounded-md px-2 py-1 border-[#E0E0E0]">
            <Input
              type="text"
              placeholder="Search a project "
              className="border-0 outline-0 focus:ring-0 "
            />
            <Button className="w-6 h-6 rounded-md bg-[#DF5532] text-white">
              <Search />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderMenu;
