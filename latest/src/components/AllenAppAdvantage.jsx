import React, { useEffect, useState } from "react";
import SectionContainer from "./SectionContainer";

function AllenAppAdvantage() {
  const images = [
    "allenworks-03_1_v3wu3m.svg",
    "/allenworks-01_1_j9r4zl_mhwfad.svg",
    "/allenworks-02_ckdmrp.svg",
    
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handleImageSwitch = (index) => {
    setCurrentImage(index);
  };

  return (
    <SectionContainer>
      <h2 className="text-4xl font-bold text-center text-white">
        Allen App Advantage
      </h2>

      <div className="bg-[#0F1824] text-white flex justify-center items-center py-16 px-4 sm:px-8">
        <div className="max-w-6xl  flex flex-col sm:flex-row items-center">
          <div className="lg:w-1/2 mb-8 lg:mb-0 lg:mr-10">
            <h2 className="text-3xl font-bold mb-4">
              Achieve Your Dreams with ALLEN APP!
            </h2>
            <p className="text-lg mb-6">
              Top Kota Faculty ,Customized Study tolls , and AI Powered
              Learning-all in one app
            </p>
            <p className="text-sm text-gray-400 ">
              *All Impact methodolgy & Measurement Validated by{" "}
              <strong>EY</strong>
            </p>
          </div>

          <div className="lg:w-1/2 flex justify-center relative ">
            <div
              className="relative w-[70%]
            md:w-[280px] h-[400px] md:h-[560px]"
            >
              <img
                src="/phone_cp5tp7.svg"
                alt="Phone Frame"
                className="absolute top-0 left-0 w-full h-full  object-cover z-10"
              />

              <div
                className="absolute top-[5%] left-[5%] right-[5%]  bottom-[5%]
                overflow-hidden rounded-[20px]"
              >
                <div className="relative w-full h-full ">
                  {images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Image ${index + 1}`}
                      className={`absolute w-full h-full object-cover transition-opacity duration-700
                                ${
                                  index === currentImage
                                    ? "opacity-100"
                                    : "opacity-0"
                                }`}
                      style={{ transition: "opacity 0.6s ease-in-out" }}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div
              className="absolute left-[-50px] top-[60px] w-[80px] cursor-pointer sm:left-[-100px] sm:top-[80px] sm:w-[120px]"
              onClick={() => handleImageSwitch(1)}
            >
              <img
                src={images[1]}
                alt="illustration 1"
                className="object-contain"
              />
            </div>
            <div
              className="absolute right-[-50px]
            top-[-60px] w-[80px] cursor-pointer 
            sm:right-[-100px] sm:top-[80px] sm:w-[120px]"
              onClick={() => handleImageSwitch(2)}
            >
              <img
                src={images[2]}
                alt="illustration 2 "
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}

export default AllenAppAdvantage;
