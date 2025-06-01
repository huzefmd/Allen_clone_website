import React, { useEffect, useState } from "react";
import SectionContainer from "./SectionContainer";

function OfferBanner() {
  const slides = [
    "/finroeji0fnsqkwh0x6y.webp",
    "/gbvvlbtgpsecq57ivwff.webp",
    "/Homepage_Banner_1_sn5css.webp",
    "/v6cgvy44tde2yjq4yguo.webp",
    "/wr9qyk4gyqgnntgonfvy.webp",
  ];

  const [currentSlide, setcurrentSlide] = useState(0);
  const slideCount = slides.length;

  const nextSlide = () => {
    setcurrentSlide((prevSlide) => (prevSlide + 1) % slideCount);
  };

  useEffect(()=>{
    const autoSlide=setInterval(nextSlide,3000)
    return()=>clearInterval(autoSlide)
  },[])

  const gotoSlide=(index)=>{
    setcurrentSlide(index)
  }
  return(
    <SectionContainer>
        <div className="overflow-hidden">
            <div className="flex transition-transform duration-700 ease-in-out"
            style={{
                transform:`translateX(-${currentSlide*100}%)`}}>
                {slides.map((slide,index)=>(
                    <div className="flex-shrink-0 w-full key={index} ">
                        <a href="/">
                        <img src={slide} alt={`Banner ${index+1}`} 
                        className="w-full h-auto"/>
                        </a>
                    </div>
                ))}
            </div>

            <div className="flex mt-5 space-x-3 justify-center items-center">
                {slides.map((_,index)=>(
                    <div 
                        key={index}
                        onClick={()=>gotoSlide(index)}
                        className={`cursor-pointer w-2 h-2 rounded-full transition-all duration-300 ease-in-out ${currentSlide===index ? 'bg-white w-[10px] h-[10px]' :"bg-gray-500"}`}
                    ></div>
                ))}
            </div>
        </div>
    </SectionContainer>)
    
}          

export default OfferBanner;
