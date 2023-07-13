import React, { useEffect, useState } from "react";
import { EventsTop } from "../constants";
import { GlimpseButton } from "../components";
import { Carousel } from "react-responsive-carousel";
import "./css/Carousel.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const MyCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === EventsTop.length - 1 ? 0 : prevSlide + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    
    <Carousel
      selectedItem={currentSlide}
      showStatus={false}
      showThumbs={false}
      autoPlay
      infiniteLoop
      interval={6000}
      renderIndicator={false}
    >
      {EventsTop.map((slide, index) => (
        <div
          key={index}
          className="relative md:h-[400px] h-[500px] bg-cover bg-center"
        >
          {/* <div className="overlays"> */}
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
          {/* </div> */}
          <div className="ml-4 carousel-overlay absolute inset-0 flex flex-col justify-center items-start text-center gap-2">
            <h1 className="text-white text-2xl md:text-4xl font-bold leading-tight font-inter">
              {slide.title}
            </h1>
            <h3 className="text-[#93DEFF] text-lg md:text-2xl font-normal leading-tight font-inter">
              {slide.description}
            </h3>
            <a href="https://github.com/OpenLake">
              <GlimpseButton ButtonName="View More Glimpses" />
            </a>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default MyCarousel;
