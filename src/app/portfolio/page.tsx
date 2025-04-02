"use client";
import HeaderMenu from "@/components/headermenu";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Search } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

const Portfolio = () => {
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
    <div>
      <HeaderMenu />

      <div className="w-full px-4 my-4 ">
        {/* Search bar  */}
        {isSmallScreen && (
          <div className="w-full flex items-center space-x-1 border rounded-md px-2 py-1 border-[#E0E0E0]">
            <Input
              type="text"
              placeholder="Search a project "
              className="border-0"
            />
            <Button className="w-6 h-6 rounded-md bg-[#DF5532] text-white">
              <Search />
            </Button>
          </div>
        )}
        {/* Cards Section  */}

        <div className="flex flex-col gap-2 mt-4">
          <Card>
            <CardContent>
              <div className="w-full h-full flex flex-row gap-2 ">
                <Image
                  src={"/globe.svg"}
                  alt="image"
                  width={110}
                  height={110}
                  className="bg-amber-100 w-1/5 h-1/5"
                />
                <div className="w-full h-full">
                  <Label className="text-sm">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </Label>
                  <div className="flex items-center justify-between w-full ">
                    <div>
                      <p className="text-xs ">BAHASA SUNDA</p>
                      <p className="text-xs">ABC</p>
                    </div>
                    <Button
                      className="bg-gradient-to-br from-[#F39519] to-[#FFCD67] text-white rounded-md w-12 h-6 md:w-20 md:h-6 lg:w-22 lg:h-8"
                      onClick={() => toast.success("Item added to cart")}
                    >
                      {isSmallScreen ? "A" : "Add to Cart"}
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter></CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
