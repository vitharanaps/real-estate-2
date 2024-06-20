import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import PropertyCard from "@/components/shared/PropertyCard";

const Explore = () => {
  return (
    <div className="px-5  gap-7 max-w-[1366px] lg:mx-auto md:px-10 lg:px-12">
      <Navbar />
      <div className="w-full min-h-[calc(100vh-120px)] mt-3 space-y-4 px-5 md:px-10 lg:px-12">
        <div className=" flex items-center  justify-between gap-3 w-full">
          <div className="flex flex-col md:w-2/3 ">
            <div className="flex flex-col space-y-2">
              <label htmlFor="" className="text-[14px]">
                Location
              </label>
              <div className="flex items-center gap-3">
                <Input type="text" placeholder="City" className="text-[14px]" />
                <Button>Search</Button>
              </div>
              <div className="flex  items-center justify-between gap-2 ">
                <div className="w-1/4">
                  <label htmlFor="" className="text-[14px]">
                    Type
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Any" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="any">Any</SelectItem>
                      <SelectItem value="buy">Buy</SelectItem>
                      <SelectItem value="sell">Sell</SelectItem>
                      <SelectItem value="rent">Rent</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="w-1/4">
                  <label htmlFor="" className="text-[14px]">
                    Property
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Any" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="any">Any</SelectItem>
                      <SelectItem value="apartment">Apartment</SelectItem>
                      <SelectItem value="house">House</SelectItem>
                      <SelectItem value="condo">Condo</SelectItem>
                      <SelectItem value="land">Land</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="w-1/4">
                  <label htmlFor="" className="text-[14px]">
                    Min Price
                  </label>
                  <Input type="number" placeholder="any" />
                </div>
                <div className="w-1/4">
                  <label htmlFor="" className="text-[14px]">
                    Max Price
                  </label>
                  <Input type="number" placeholder="any" />
                </div>
              </div>
              <div className=" py-4">
                <h3 className="text-[14px] py-2">Search result for <b>City Name</b></h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-3 xl:grid-cols-3">
              <PropertyCard />
              <PropertyCard />
              <PropertyCard />
              <PropertyCard />
              <PropertyCard />
              <PropertyCard />
              <PropertyCard />
              <PropertyCard />
              <PropertyCard />
              <PropertyCard />
              <PropertyCard />
              <PropertyCard />
              <PropertyCard />
              <PropertyCard />
              <PropertyCard />
              <PropertyCard />
              <PropertyCard />
              <PropertyCard />
              <PropertyCard />
              <PropertyCard />
              <PropertyCard />

            </div>

</div>
            </div>
          </div>
          <div className="hidden md:flex md:w-1/3 ">Map</div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Explore;
