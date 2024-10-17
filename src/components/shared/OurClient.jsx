import React from "react";

const OurClient = () => {
  return (
    <div className=" w-full">

    <div className="px-5  gap-7 max-w-[1366px] lg:mx-auto flex justify-between md:px-10 lg:px-12 ">
      <div className=" w-full grid grid-cols-2 md:grid-cols-4 gap-4 ">
        <div className="flex items-center justify-center">
          <img src="google.png" alt="" className="w-40 h-30 object-contain " />
        </div>
        <div className="flex items-center justify-center">
          <img src="facebook.png" alt="" className="w-40 h-30 object-contain " />
        </div>
        <div className="flex items-center justify-center">
          <img src="microsoft.png" alt="" className="w-40 h-30 object-contain" />
        </div>
        <div className="flex items-center justify-center">
          <img src="youtube.png" alt="" className="w-40 h-20 object-contain " />
        </div>
      </div>
    </div>
    </div>
  );
};

export default OurClient;
