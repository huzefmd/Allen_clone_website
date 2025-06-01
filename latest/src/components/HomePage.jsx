import React from "react";
import LandingPage from "./LandingPage";
import OfferBanner from "./OfferBanner";
import SectionContainer from "./SectionContainer";
import ResultShowcase from "./ResultShowcase";
import AllenAppAdvantage from "./AllenAppAdvantage";
import OnlineProgram from "./OnlineProgram";
import ClassProgram from "./ClassProgram";
import DownloadApp from "./DownloadApp";

function HomePage() {
  return (
    <SectionContainer>
      <LandingPage />
      <OfferBanner />
      <ResultShowcase/>
      <AllenAppAdvantage/>
      <OnlineProgram/>
      <ClassProgram/>
      <DownloadApp/>
    </SectionContainer>
  );
}

export default HomePage;
