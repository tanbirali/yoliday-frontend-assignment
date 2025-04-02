"use client";
import { BriefcaseBusiness, FileInput, Home, User } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const navItems = [
  {
    id: "/",
    icon: <Home />,
    title: "Home",
  },
  {
    id: "portfolio",
    icon: <BriefcaseBusiness />,
    title: "Portfolio",
  },
  {
    id: "inputs",
    icon: <FileInput />,
    title: "Inputs",
  },
  {
    id: "profile",
    icon: <User />,
    title: "Profile",
  },
];

const BottomNav = () => {
  // const [activeTab, setActiveTab] = useState("home");
  const router = useRouter();
  const currentPath = usePathname();
  console.log(currentPath);
  return (
    <nav className="w-full bg-white shadow-2xl border rounded-t-2xl fixed bottom-0 h-16 max-w-2xl lg:hidden md:hidden">
      <div className=" w-full h-full mb-4 px-2 justify-between flex items-center">
        {navItems.map((item) => (
          <div
            key={item.id}
            className={`flex flex-col w-fit h-full items-center py-2 ${
              (currentPath === "/" && item.id === "/") ||
              currentPath.slice(1) === item.id
                ? "text-[#DF5532] border-t-3 rounded-t-xs  border-t-[#DF5532] "
                : "border-0 text-[#D6D1D5]"
            }`}
            onClick={() => router.push(item.id)}
          >
            <div className="text-xs">{item.icon}</div>
            <p className="text-xs">{item.title}</p>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default BottomNav;
