import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { MdLocationOn } from "react-icons/md";
const Hero = () => {
  return (
    <div>
      <div className=" z-10 relative px-5  gap-7 max-w-[1366px] lg:mx-auto flex justify-between md:px-10 lg:px-12 ">
        <div className=" flex-1">
          <h1 className=" text-[25px] font-semibold mb-5 tracking-wide">
            Let's Find a Home That's Perfect for you
          </h1>
          <p className=" text-[16px] text-gray-500 tracking-wide my-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere qui
            ducimus beatae, accusantium nesciunt quia hic,
          </p>

          <p className=" text-[16px] text-gray-500 tracking-wide my-3">
            Let's Search here....
          </p>
          <div className=" shadow-md rounded-md overflow-hidden">
            <div className=" flex w-full justify-between bg-gray-200 h-[50px] items-center text-gray-600 tracking-wider">
              <div className="flex items-center justify-center w-full h-full bg-primary-500/40">
                BUY
              </div>
              <div className="flex items-center justify-center w-full h-full">
                SELL
              </div>
              <div className="flex items-center justify-center w-full h-full">
                RENT
              </div>
            </div>
            <div className=" flex items-center justify-between my-3 mx-2 pb-5 gap-2">
              {/* <MdLocationOn className="h-[40px] w-[40px] text-gray-400" /> */}
              <Input type="text" placeholder="Enter Location" className="w-[120px]"/>
              <Input type="number" placeholder="Min Price" className="w-[100px]" />
              <Input type="number" placeholder="Max Price" className="w-[100px]"/>

              <Button className="w-[100px]">Search</Button>
            </div>
          </div>

          <div className=" flex w-full justify-between bg-gray-200 my-5 items-center text-gray-600 tracking-wider">
            <div className="flex flex-col  py-3 items-center justify-center w-full h-full">
              <h3 className="text-[25px] text-primary-500">9K+</h3>
              <p className=" text-[15px] ">Properties</p>
            </div>
            <div className="flex flex-col  py-3 items-center justify-center w-full h-full bg-primary-500/40">
              <h3 className="text-[25px] text-primary-500">23K+</h3>
              <p className=" text-[15px] ">Customers</p>
            </div>
            <div className="flex flex-col  py-3 items-center justify-center w-full h-full">
              <h3 className="text-[25px] text-primary-500">1K+</h3>
              <p className=" text-[15px] ">Reviews</p>
            </div>
          </div>
        </div>
        <div className=" hidden md:flex md:flex-1">
          <img
            src="/heroImg.jpg"
            height={300}
            width={300}
            className="h-full w-full  grayscale-50"
          />
        </div>
      </div>
      <div> 
         <div className="h-[100px] w-[100px] bg-[#eb26fd] blur-[90px] translate-x-[-50%] translate-y-[-50%] rounded-full   absolute top-[150px] left-[60px]">

      </div>
      <div className="h-[100px] w-[100px] bg-[#70bde3] blur-[90px] translate-x-[-50%] translate-y-[-50%] rounded-full   absolute top-[400px] left-[280px]">

</div>
      </div>
    
        
    </div>
  );
};

export default Hero;
Hero;
