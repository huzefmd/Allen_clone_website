import React from "react";
import SectionContainer from "./SectionContainer";
import Button from "./Button";

function ClassProgram() {
  return (
    <SectionContainer>
      <div className="bg-[#0F1824] text-white  p-8">
        <h2 className="text-3xl font-semibold mb-6">
          Looking For A Class Room Based Program
        </h2>

        <div className="bg-[#1A243A] rounded-lg p-8 flex flex-col  md:flex-row items-center justify-between ">
          <div className="mb-6 md:mb-0 md:mr-6 ">
            <p className="text-xl mb-4">
              {" "}
              Present in 53 cities with
              <br />
              250+ Class Rooms
            </p>
            <Button
              className="bg-white text-black
            hover:bg-[#1A243A]
            hover:text-gray-300"
              label="find a center"
            />
          </div>
          <div className="w-full md:w-1/2 h-64 rounded-lg overflow-hidden relative ">
            <img
              src="/Updated_size_classroom_ck4yjp.webp" 
              alt=""
            />
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}

export default ClassProgram;
