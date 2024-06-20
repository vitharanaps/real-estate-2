import React from "react";
import { Button } from "../ui/button";
import { GiHamburgerMenu } from "react-icons/gi";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  return (
    <div className="px-5 h-[60px]  max-w-[1366px] w-full lg:mx-auto flex justify-between items-center md:px-10 lg:px-12">
      <div className="  font-bold tracking-[1px] text-[20px] md:text-[25px] lg:text-[30px] cursor-pointer">
        My <span className="  text-primary-500 ">Estates</span>
      </div>
      <div className="hidden md:flex md:text-[15px] ">
        <ul className="flex gap-3 ">
          <li className=" font-semibold text-primary cursor-pointer">Home</li>
          <li className="cursor-pointer">Explore</li>
          <li className="cursor-pointer">About Us</li>
          <li className="cursor-pointer">Agents</li>
        </ul>
      </div>
      <div className=" hidden md:flex items-center gap-3">
        <Button
          className=" border-primary-500 border-2 text-primary-500 md:h-[30px] lg:h-[40px]"
          variant="outline"
        >
          Sign In
        </Button>
        <Button className="md:h-[30px] lg:h-[40px]">Sign Up</Button>
      </div>
      <div className=" text-[20px] md:hidden">
        <Sheet>
          <SheetTrigger>
            <GiHamburgerMenu />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle className=" my-7 text-[20px] ">
                My <span className="  text-primary-500 ">Estates</span>
              </SheetTitle>
              <SheetDescription>
                <div className="h-full">
                  <div className=" flex flex-col  justify-between h-full  gap-10 items-center ">
                    <ul className="flex flex-col  text-[16px] gap-10 ">
                      <li className=" font-semibold text-primary cursor-pointer">
                        Home
                      </li>
                      <li className="cursor-pointer">Explore</li>
                      <li className="cursor-pointer">About Us</li>
                      <li className="cursor-pointer">Agents</li>
                    </ul>
                    <div className=" flex gap-5">
                      <Button
                        className=" border-primary-500 border-2 text-primary-500 "
                        variant="outline"
                      >
                        Sign In
                      </Button>
                      <Button className="">Sign Up</Button>
                    </div>
                  </div>
                  <div className="mt-[50px] text-red-400 cursor-pointer">
                    Sign Out
                  </div>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Navbar;
