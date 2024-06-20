import React from "react";

const DreamSection = () => {
  return (
    <div className="px-5  gap-7 max-w-[1366px] lg:mx-auto flex justify-between md:px-10 lg:px-12">
      <div className=" flex flex-col md:flex-row  ">
        <div className=" flex flex-col flex-1 gap-4 mb-3">
          <h1 className=" text-[25px] font-semibold">We are ready to make your Dream come true</h1>
          <p className="text-[16px] text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit,
            consectetur incidunt soluta suscipit, quos vel officiis expedita
            voluptatem ut eveniet ex autem iure deserunt{" "}
          </p>
        </div>
        <div className="flex flex-1">
          <img src="dream.jpg" className="w-full h-[250px]" />
        </div>
      </div>
    </div>
  );
};

export default DreamSection;
