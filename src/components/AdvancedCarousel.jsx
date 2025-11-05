import React from "react";
import { useSnapCarousel } from "react-snap-carousel";
import { programs } from "../constants/Events.js";
import "./css/AdvancedCarousel.css";

const AdvancedCarousel = () => {
  // useEffect(() => {
  const { scrollRef, next, prev } =
    useSnapCarousel();
  // }, [])
  return (
    <>
      <div
        ref={scrollRef}
        className="md:mx-24 mt-16 mx-6 gap-8"
        style={{
          display: "flex",
          overflow: "hidden",
          scrollSnapType: "x mandatory",
        }}
      >
        {programs.map((program, i) => {
          return (
            <div key={i} className="">
              <div className="w-[308px] h-[308px]">
                <img className="w-full h-full" src={program.image} alt="" />
              </div>
              <div className="flex w-[308px] justify-between px-4 py-2 bg-gradient-to-l from-neutral-900 to-gray-900 rounded">
                <div className="mx-2 px-2">
                  <div className="text-center py-2 text-cyan-400 text-xl font-bold">
                    {program.mon}
                  </div>
                  <div className="text-white text-xl font-bold">
                    {program.date}
                  </div>
                </div>
                <div>
                  <div className="text-white text-[1.2rem] font-bold">
                    {program.title}
                  </div>
                  <div className="text-gray-400 text-[1rem] font-normal">
                    {program.content}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="cursor-pointer mb-[15rem] mt-[-15rem] top-1/2 transform translate-y-[-50%] left-0 w-full">
        <button
          className="p-2 bg-gray-800 text-white rounded-full absolute left-0"
          style={{ marginLeft: "1rem" }}
          onClick={() => prev()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-chevron-left"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        <button
          className="p-2 bg-gray-800 text-white rounded-full absolute right-0"
          style={{ marginRight: "1rem" }}
          onClick={() => next()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-chevron-right"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>
      {/* <ol
        className="text-center justify-center mx-auto"
        style={{ display: "flex" }}
      >
        {pages.map((_, i) => (
          <li key={i}>
            <button
              className="text-center mx-auto"
              style={i === activePageIndex ? { opacity: 0.5 } : {}}
              onClick={() => goTo(i)}
            >
              {i + 1}
            </button>
          </li>
        ))}
      </ol> */}
    </>
  );
};

// const AdvancedCarousel = ({ images }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [direction, setDirection] = useState(null);

//   const slideVariants = {
//     hiddenRight: {
//       x: "100%",
//       opacity: 0,
//     },
//     hiddenLeft: {
//       x: "-100%",
//       opacity: 0,
//     },
//     visible: {
//       x: "0",
//       opacity: 1,
//       transition: {
//         duration: 1,
//       },
//     },
//     exit: {
//       opacity: 0,
//       scale: 0.8,
//       transition: {
//         duration: 0.5,
//       },
//     },
//   };
//   // const slidersVariants = {
//   //   hover: {
//   //     scale: 1.2,
//   //     backgroundColor: "#ff00008e",
//   //   },
//   // };
//   // const dotsVariants = {
//   //   initial: {
//   //     y: 0,
//   //   },
//   //   animate: {
//   //     y: -10,
//   //     scale: 1.2,
//   //     transition: { type: "spring", stiffness: 1000, damping: "10" },
//   //   },
//   //   hover: {
//   //     scale: 1.1,
//   //     transition: { duration: 0.2 },
//   //   },
//   // };

//   // const handleNext = () => {
//   //   setDirection("right");
//   //   setCurrentIndex((prevIndex) =>
//   //     prevIndex + 1 === images.length ? 0 : prevIndex + 1
//   //   );
//   // };

//   // const handlePrevious = () => {
//   //   setDirection("left");

//   //   setCurrentIndex((prevIndex) =>
//   //     prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
//   //   );
//   // };

//   // const handleDotClick = (index) => {
//   //   setDirection(index > currentIndex ? "right" : "left");
//   //   setCurrentIndex(index);
//   // };

//   return (
//     <div className="carousel w-screen h-full">
//       <div className="EventOverlay">
//         <div className="carousel-images">
//           <AnimatePresence>
//             <motion.img
//               key={currentIndex}
//               src={images[currentIndex]}
//               initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
//               animate="visible"
//               transition={{ duration: 5, ease: 'linear', repeat: Infinity }}
//               exit="exit"
//               variants={slideVariants}
//             />
//           </AnimatePresence>
//           {/* <div className="slide_direction">
//             <motion.div
//               variants={slidersVariants}
//               whileHover="hover"
//               className="left"
//               onClick={handlePrevious}
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 height="20"
//                 viewBox="0 96 960 960"
//                 width="20"
//               >
//                 <path d="M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z" />
//               </svg>
//             </motion.div>
//             <motion.div
//               variants={slidersVariants}
//               whileHover="hover"
//               className="right"
//               onClick={handleNext}
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 height="20"
//                 viewBox="0 96 960 960"
//                 width="20"
//               >
//                 <path d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z" />
//               </svg>
//             </motion.div>
//           </div> */}
//         </div>
//       </div>
//       {/* <div className="carousel-indicator">
//         {images.map((_, index) => (
//           <motion.div
//             key={index}
//             className={`dot ${currentIndex === index ? "active" : ""}`}
//             onClick={() => handleDotClick(index)}
//             initial="initial"
//             animate={currentIndex === index ? "animate" : ""}
//             whileHover="hover"
//             variants={dotsVariants}
//           ></motion.div>
//         ))}
//       </div> */}
//     </div>
//   );
// };
export default AdvancedCarousel;
