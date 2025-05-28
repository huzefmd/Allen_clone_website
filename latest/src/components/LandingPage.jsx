import React, { useEffect, useState } from "react";
import Button from "./Button";

function LandingPage() {
  const slides = [
    "/c_1_aorh14.webp",
    "/c_2_ix0igr.webp",
    "/c_3_qurxw1.webp",
    "/c_4_olon7a.webp",
  ];
  const [currentSlide, setcurrentSlide] = useState(0);
  const slideCount = slides.length;

  const nextSlide = () => {
    setcurrentSlide((prevSlide) => (prevSlide + 1) % slideCount);
  };

  useEffect(() => {
    const autoSlide = setInterval(nextSlide, 3000);
    return () => clearInterval(autoSlide);
  }, []);

  const gotoSlide = (index) => {
    setcurrentSlide(index);
  };
  return (
    <div className="min-h-[88vh]   bg-[#0F1824] text-white">
      <header className="text-black py-3">
        <div className="container mx-auto flex justify-center items-center px-6 mt-10">
          <a href="/">
            <img
              src="/e8gk63cgiwlqg4dgtxmi.webp"
              alt="Top Banner"
              className="w-auto hidden md:block"
            />
          </a>
          <a href="/">
            <img
              src="/finroeji0fnsqkwh0x6y.webp"
              alt="hhhh"
              className="w-auto md:hidden"
            />
          </a>
        </div>
      </header>

      <section className="container mx-auto flex  flex-col md:flex-row item-center justify-between pt-16 px-10 ">
        <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl  md:text-5xl  font-bold mb-4 leading-tight">Your Dream <br /> Our  Expertise</h1>
            <p  className="text-lg mb-6">What Bring us today?</p>
            <div  className="space-x-3 flex">
              <Button  label="NEET" onClick={()=>{console.log("Neet Clicked")}}/>
              <Button label="JEE"  onClick={()=>{
                console.log("JEE Clicked")
              }}/> 

              <Button label="Grade 6-10" 
              onClick={()=>{
                console.log("Grade 6-10 Clicked")
              }} />
            </div>
        </div>

        <div className="md:w-1/2 relative  overflow-hidden ">
          <div className="flex transition-transform duration-700 ease-in-out"  
          style={{
            transform:`translateX(-${currentSlide*100}%)`,
          }}>
            {slides.map((slide,index)=>(
              <div
              className="flex-shrink-0  w-full h-96 overflow-hidden" 
              key={index}>
                <img src={slide}
                 alt={`Slide ${index+1}`}
                className="w-full h-full  object-cover mx-auto" />
              </div>
            ))}
          </div>

          <div className="flex space-x-2 mt-5 justify-center items-center">
            {slides.map((_,index)=>(
              <div 
              key={index}
              onClick={()=>gotoSlide(index)}
              className={`cursor-pointer w-2 h-2 rounded-full transition-all duration-300 ease-in-out ${
                currentSlide===index
                ?"bg-white w-[10px] h-[10px]":
                "bg-gray-500"
              }`}></div>
            ))}
          </div>         
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
