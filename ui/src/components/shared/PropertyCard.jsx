import React from "react";
import { FaBed } from "react-icons/fa";
import { Button } from "../ui/button";
import { BiSolidShower } from "react-icons/bi";
import { FaCarSide } from "react-icons/fa";
const PropertyCard = () => {
  return (
    <div className="border-1 w-full shadow-md cursor-pointer bg-white">
      <div className=" flex flex-col p-3">
        <div className=" flex items-center justify-center">
          <img src="/testCard.jpg" className="w-full h-[150px] object-cover" />
        </div>
        <div className=" flex flex-col space-y-3 mt-3 ">
          <h3 className="text-[18px] font-semibold">Best Property</h3>
          <p className=" text-[14px] text-gray-500">
            Testing my description hfiosdaf fdshfdsf dfdsfds{" "}
          </p>

          <div className="flex flex-col  space-y-3">
            <div className="flex  items-center justify-between ">
              <div className="flex justify-between items-center gap-2">
                <FaBed className="text-gray-300 text-[20px]" />{" "}
                <p className="text-gray-400  text-[12px]">2 Bed Rooms</p>
              </div>
              <div className="flex justify-between items-center gap-2">
                <BiSolidShower className="text-gray-300 text-[20px]" />{" "}
                <p className="text-gray-400  text-[12px]">2 Bath Rooms</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex justify-between items-center gap-2">
                <FaCarSide className="text-gray-300 text-[20px]" />{" "}
                <p className="text-gray-400  text-[12px]">1 Parking</p>
              </div>
              <div className="flex justify-between items-center gap-2">
                <FaBed className="text-gray-300 text-[20px]" />{" "}
                <p className="text-gray-400  text-[12px]">2 Bed Rooms</p>
              </div>
            </div>
          </div>
          <div className=" flex justify-between items-center">
            <p className="font-bold tracking-wider ">$95,00 </p>{" "}
            <Button className="w-[120px]">Explore</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
