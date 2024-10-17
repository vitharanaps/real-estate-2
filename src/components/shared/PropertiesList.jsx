import React from "react";
import PropertyCard from "./PropertyCard";

const PropertiesList = ({ title, desc }) => {
  return (
    // /px-5 bg-gray-200/40 gap-7 max-w-[1366px] lg:mx-auto flex flex-col justify-between md:px-10 lg:px-12
    <div className="w-full bg-gray-200/40 py-5 ">
      <div className="max-w-[1366px] flex flex-col space-y-3 px-5 md:px-10 lg:px-12 lg:mx-auto">
        <div className=" flex flex-col items-center justify-center gap-3 mb-4">
          <h1 className="text-[30px] tracking-wide">{title}</h1>
          <p className=" text-[16px] text-gray-500">{desc}</p>
        </div>
        <div className="grid grid-cols-1 gap-3 my-4 sm:grid-cols-2 lg:grid-cols-4">
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
        </div>
      </div>
    </div>
  );
};

export default PropertiesList;
