// import AliceCarousel from "react-alice-carousel";
// import HomeProductCard from "./HomeProductCard";
// //import "./HomeProductSection.css";
// import { Button } from "@mui/material";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// import { useState } from "react";

// const HomeProductSection = ({ section, data }) => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const slidePrev = () => setActiveIndex(activeIndex - 1);
//   const slideNext = () => setActiveIndex(activeIndex + 1);
//   const syncActiveIndex = ({ item }) => setActiveIndex(item);

//   const responsive = {
//     0: {
//       items: 2,
//       itemsFit: "contain",
//     },
//     568: {
//       items: 3,
//       itemsFit: "contain",
//     },
//     1024: {
//       items: 5.5,
//       itemsFit: "contain",
//     },
//   };
//   const items = data?.slice(0, 10).map((item) => (
//     <div className="">
//       {" "}
//       <HomeProductCard product={item} />
//     </div>
//   ));

//   // const slideInFromRight = (t) => {
//   //   return `translateX(${100 - t * 100}%)`;
//   // };

//   return (
//     <div className="relative px-4 sm:px-6 lg:px-8 ">
//       <h2 className="text-2xl font-extrabold text-gray-900 py-5">{section}</h2>
//       <div className="relative border p-5">
//         <AliceCarousel
//           disableButtonsControls
//           disableDotsControls
//           mouseTracking
//           items={items}
//           activeIndex={activeIndex}
//           responsive={responsive}
//           onSlideChanged={syncActiveIndex}
//           animationType="fadeout"
//           animationDuration={2000}
//         />
//         {activeIndex !== items.length - 5 && (
//           <Button
//             onClick={slideNext}
//             variant="contained"
//             className="z-50 bg-[]"
//             sx={{
//               position: "absolute",
//               top: "8rem",
//               right: "0rem",
//               transform: "translateX(50%) rotate(90deg)",
//             }}
//             color="white"
//             aria-label="next"
//           >
//             <ArrowForwardIosIcon
//               className=""
//               sx={{ transform: "rotate(-90deg)" }}
//             />
//           </Button>
//         )}

//         {activeIndex !== 0 && (
//           <Button
//             onClick={slidePrev}
//             variant="contained"
//             className="z-50 bg-[]"
//             color="white"
//             sx={{
//               position: "absolute",
//               top: "8rem",
//               left: "0rem",
//               transform: "translateX(-50%)  rotate(90deg)",
//             }}
//             aria-label="next"
//           >
//             <ArrowForwardIosIcon
//               className=""
//               sx={{ transform: " rotate(90deg)" }}
//             />
//           </Button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default HomeProductSection;
import AliceCarousel from "react-alice-carousel";
import HomeProductCard from "./HomeProductCard";
import { Button } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useRef, useState } from "react";

const HomeProductSection = ({ section, data }) => {
  const carouselRef = useRef();
  const [activeIndex, setActiveIndex] = useState(0);

  const visibleItems = 5;
  const totalItems = data?.length || 0;

  const items = data?.map((item, index) => (
    <div key={index}>
      <HomeProductCard product={item} />
    </div>
  ));

  const handleSlideChange = (e) => {
    setActiveIndex(e.item);
  };

  const slideNext = () => {
    if (activeIndex < totalItems - visibleItems) {
      carouselRef.current.slideTo(activeIndex + 1);
    }
  };

  const slidePrev = () => {
    if (activeIndex > 0) {
      carouselRef.current.slideTo(activeIndex - 1);
    }
  };

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: visibleItems },
  };

  return (
    <div className="relative px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-extrabold text-gray-900 py-5">{section}</h2>
      <div className="relative border p-5">
        <AliceCarousel
          ref={carouselRef}
          disableButtonsControls
          disableDotsControls
          mouseTracking
          items={items}
          responsive={responsive}
          onSlideChanged={handleSlideChange}
          activeIndex={activeIndex}
          animationDuration={600}
        />

        {/* Next Button */}
        {activeIndex < totalItems - visibleItems && (
          <Button
            onClick={slideNext}
            variant="contained"
            sx={{
              position: "absolute",
              top: "8rem",
              right: "0rem",
              transform: "translateX(50%) rotate(90deg)",
            }}
            color="primary"
          >
            <ArrowForwardIosIcon sx={{ transform: "rotate(-90deg)" }} />
          </Button>
        )}

        {/* Previous Button */}
        {activeIndex > 0 && (
          <Button
            onClick={slidePrev}
            variant="contained"
            sx={{
              position: "absolute",
              top: "8rem",
              left: "0rem",
              transform: "translateX(-50%) rotate(90deg)",
            }}
            color="primary"
          >
            <ArrowForwardIosIcon sx={{ transform: "rotate(90deg)" }} />
          </Button>
        )}
      </div>
    </div>
  );
};

export default HomeProductSection;
