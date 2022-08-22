import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import styles from "./styles.css";
export const links = () => {
  return [{ rel: "stylesheet", href: styles }];
};

const Slide = ({ portrait, landscape }) => {
  return (
    <div className="w-full h-[550px] relative ">
      <img
        className=" object-cover object-center "
        src={landscape.url}
        alt={landscape.name}
      />
      <div className="absolute z-10 -top-1/2 right-9 h-96">
        {" "}
        <img className=" " src={portrait.url} alt={portrait.url} />
      </div>
    </div>
  );
};

export const HomeSlider = ({ imageUrls }) => {
  let imageBlockArray = [];
  for (let i = 0; i < imageUrls.length / 2; i++) {
    imageBlockArray.push({
      portrait: imageUrls[i + 5],
      landscape: imageUrls[i],
    });
  }

  return (
    <div>
      <Swiper
        pagination={{
          type: "fraction",
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
        autoplay={{ delay: 2500, disableOnInteraction: false }}
      >
        {imageBlockArray.map((imgBlock, i) => {
          return (
            <SwiperSlide key={i}>
              <Slide
                portrait={imgBlock.portrait}
                landscape={imgBlock.landscape}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
