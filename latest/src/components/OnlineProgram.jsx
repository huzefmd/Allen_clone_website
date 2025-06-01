import React from "react";
import SectionContainer from "./SectionContainer";
import ProgramCard from "./ProgramCard";

function OnlineProgram() {
  return (
    <SectionContainer>
      <div
        className="bg-[#0f1824] text-white
        p-8  "
      >
        <h2 className="text-3xl mb-6">Discover the Perfect Online Program</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ProgramCard
            title="JEE"
            imgSrc="/jee_0_250_nbnt3y.webp"
            alt="JEE Program Illustration"
            btntext={"View"}
            to={"/"}
          />
          <ProgramCard
            title="NEET"
            imgSrc="/neet_0._2x_dkqbnv.webp"
            alt="NEET Program Illustration"
            btntext={"View"}
            to={"/"}
          />
          <ProgramCard
            title="Grade 6-10"
            imgSrc="/jee_0_250_nbnt3y.webp"
            alt="6-10 Program Illustration"
            btntext={"View"}
            to={"/"}
          />
        </div>
      </div>
    </SectionContainer>
  );
}

export default OnlineProgram;
