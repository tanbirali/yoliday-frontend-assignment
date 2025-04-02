"use client";
import {
  FileEditIcon,
  LayoutDashboard,
  Speaker,
  UserSquareIcon,
} from "lucide-react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Sidebar = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const currentPath = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth >= 672 && window.innerWidth <= 768);
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItems = [
    {
      id: "/",
      icon: <LayoutDashboard />,
      title: "Dashboard",
    },
    {
      id: "portfolio",
      icon: <Speaker />,
      title: "Portfolio",
    },
    {
      id: "inputs",
      icon: <FileEditIcon />,
      title: "Inputs",
    },
    {
      id: "profile",
      icon: <UserSquareIcon />,
      title: "Profile",
    },
  ];

  return (
    <section className="hidden md:flex md:flex-col lg:flex lg:flex-col md:w-20 lg:w-60 h-screen bg-[#DF5532]">
      {isSmallScreen ? (
        <div className="flex items-center px-4 mt-10 gap-4">
          <Image src={"/fad-logo-juce.png"} alt="logo" width={30} height={30} />
        </div>
      ) : (
        <div className="flex items-center px-4 mt-10 gap-4">
          <Image src={"/fad-logo-juce.png"} alt="logo" width={30} height={30} />
          <p className="text-xs text-white font-roboto">LOGO</p>
        </div>
      )}

      <div className="w-full mx-auto mt-20 flex flex-col items-center">
        {navItems.map((item) => {
          const isActive =
            (currentPath === "/" && item.id === "/") ||
            currentPath.slice(1) === item.id;
          const className = `flex w-full gap-6 text-white px-4 h-full items-center py-2 hover:cursor-pointer ${
            isActive
              ? "rounded-xl bg-gradient-to-r from-[#FFAD98] to-[#DF5532]"
              : "border-0 text-[#D6D1D5]"
          }`;

          return (
            <div
              key={item.id}
              className={className}
              onClick={() => router.push(item.id)}
            >
              <div className="">{item.icon}</div>
              {!isSmallScreen && <p>{item.title}</p>}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Sidebar;
