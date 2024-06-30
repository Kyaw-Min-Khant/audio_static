import { Swiper, SwiperSlide } from "swiper/react";
import Slide from "../component/home/Slide";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { data } from "../constants/HomeCarousel";
const Home = () => {
  return (
    <section className=" min-h-screen">
      <Swiper
        modules={[Autoplay, Pagination]}
        pagination={{ clickable: true }}
        slidesPerView={1}
        navigation={true}
        style={{ color: "red" }}
        autoplay={{
          delay: 5000,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        }}
        loop
        className="swiper-container"
      >
        {data?.map((item) => (
          <SwiperSlide key={item?.id}>
            <Slide item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Home;
