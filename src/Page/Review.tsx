import { Swiper, SwiperSlide } from "swiper/react";
import { LiaStarSolid } from "react-icons/lia";
import { motion } from "framer-motion";
import { FaTiktok } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { staggerContainer, textVariant } from "../utils/animation";
const Review = () => {
  return (
    <motion.section
      variants={staggerContainer(1, 1)}
      initial="hidden"
      whileInView="show"
      className=""
    >
      <motion.h2
        variants={textVariant}
        className=" font-body text-3xl pt-10 text-center font-bold"
      >
        We Care About Our Customers <br />
        Experience Too
      </motion.h2>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        loop={true}
        autoplay={{
          delay: 5000,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper py-20"
      >
        <SwiperSlide>
          <div className=" relative p-5 bg-gradient-to-r from-blue-600 to-violet-600 rounded-[10px] shadow-[5px_10px_50px_5px_#805ad5]">
            <img
              className="w-[70px] border-2 border-blue-400 absolute top-[-40px] left-5  object-cover object-center h-[70px] rounded-full"
              src="https://i.pinimg.com/564x/2c/fc/3f/2cfc3fc022aa67ab7039b51f21a89501.jpg"
            />
            <div className=" pt-6">
              <h2 className=" text-[14px] text-white pb-5 font-normal font-body">
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.Lorem Ipsum has
                been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it
                to make a type specimen book
              </h2>
              <hr />
              <div className=" flex justify-between py-2">
                <h2 className=" text-[16px] text-white font-serif">1975</h2>
                <div className=" flex justify-between items-center">
                  <LiaStarSolid size={20} color="#FFC700" />
                  <LiaStarSolid size={20} color="#FFC700" />
                  <LiaStarSolid size={20} color="#FFC700" />
                  <LiaStarSolid size={20} color="#FFC700" />
                  <LiaStarSolid size={20} color="#FFC700" />
                </div>
              </div>
              <h2 className=" font-body text-white text-[14px]"> Band</h2>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className=" relative p-5 bg-gradient-to-r from-blue-600 to-violet-600 rounded-[10px] shadow-[5px_10px_50px_5px_#805ad5]">
            <img
              className="w-[70px] border-2 border-blue-400 absolute top-[-40px] left-5  object-cover object-center h-[70px] rounded-full"
              src="https://i.pinimg.com/736x/0a/ad/e2/0aade2160037a050289c8bec8a8fa02b.jpg"
            />
            <div className=" pt-6">
              <h2 className=" text-[14px] text-white pb-5 font-normal font-body">
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.Lorem Ipsum has
                been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it
                to make a type specimen book
              </h2>
              <hr />
              <div className=" flex justify-between py-2">
                <h2 className=" text-[16px] text-white font-serif">
                  Martin Garrix
                </h2>
                <div className=" flex justify-between items-center">
                  <LiaStarSolid size={20} color="#FFC700" />
                  <LiaStarSolid size={20} color="#FFC700" />
                  <LiaStarSolid size={20} color="#FFC700" />
                  <LiaStarSolid size={20} color="#FFC700" />
                  <LiaStarSolid size={20} color="#FFC700" />
                </div>
              </div>
              <h2 className=" font-body text-white text-[14px]">
                EDM and Music producer
              </h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" relative p-5 bg-gradient-to-r from-blue-600 to-violet-600 rounded-[10px] shadow-[5px_10px_50px_5px_#805ad5]">
            <img
              className="w-[70px] border-2 border-blue-400 absolute top-[-40px] left-5  object-cover object-center h-[70px] rounded-full"
              src="https://i.pinimg.com/564x/a0/dc/eb/a0dceb9e8dbd8247294b61a7ab45a226.jpg"
            />
            <div className=" pt-6">
              <h2 className=" text-[14px] text-white pb-5 font-normal font-body">
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.Lorem Ipsum has
                been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it
                to make a type specimen book
              </h2>
              <hr />
              <div className=" flex justify-between py-2">
                <h2 className=" text-[16px] text-white font-serif">
                  Yellow Claw
                </h2>
                <div className=" flex justify-between items-center">
                  <LiaStarSolid size={20} color="#FFC700" />
                  <LiaStarSolid size={20} color="#FFC700" />
                  <LiaStarSolid size={20} color="#FFC700" />
                  <LiaStarSolid size={20} color="#FFC700" />
                  <LiaStarSolid size={20} color="#FFC700" />
                </div>
              </div>
              <h2 className=" font-body text-white text-[14px]">
                EDM and Music producer DUO
              </h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" relative p-5 bg-gradient-to-r from-blue-600 to-violet-600 rounded-[10px] shadow-[5px_10px_50px_5px_#805ad5]">
            <img
              className="w-[70px] border-2 border-blue-400 absolute top-[-40px] left-5  object-cover object-center h-[70px] rounded-full"
              src="https://i.pinimg.com/564x/f0/97/8c/f0978c9095b626c4eae7b3fe9c64f990.jpg"
            />
            <div className=" pt-6">
              <h2 className=" text-[14px] text-white pb-5 font-normal font-body">
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.Lorem Ipsum has
                been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it
                to make a type specimen book
              </h2>
              <hr />
              <div className=" flex justify-between py-2">
                <h2 className=" text-[16px] text-white font-serif">
                  Marshmello
                </h2>
                <div className=" flex justify-between items-center">
                  <LiaStarSolid size={20} color="#FFC700" />
                  <LiaStarSolid size={20} color="#FFC700" />
                  <LiaStarSolid size={20} color="#FFC700" />
                  <LiaStarSolid size={20} color="#FFC700" />
                  <LiaStarSolid size={20} color="#FFC700" />
                </div>
              </div>
              <h2 className=" font-body text-white text-[14px]">
                EDM and Music producer
              </h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" relative p-5 bg-gradient-to-r from-blue-600 to-violet-600 rounded-[10px] shadow-[5px_10px_50px_5px_#805ad5]">
            <img
              className="w-[70px] border-2 border-blue-400 absolute top-[-40px] left-5  object-cover object-center h-[70px] rounded-full"
              src="https://i.pinimg.com/564x/07/e8/cc/07e8ccd386730b7aed76142f895b28b1.jpg"
            />
            <div className=" pt-6">
              <h2 className=" text-[14px] text-white pb-5 font-normal font-body">
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.Lorem Ipsum has
                been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it
                to make a type specimen book
              </h2>
              <hr />
              <div className=" flex justify-between py-2">
                <h2 className=" text-[16px] text-white font-serif">
                  Han So Hee
                </h2>
                <div className=" flex justify-between items-center">
                  <LiaStarSolid size={20} color="#FFC700" />
                  <LiaStarSolid size={20} color="#FFC700" />
                  <LiaStarSolid size={20} color="#FFC700" />
                  <LiaStarSolid size={20} color="#FFC700" />
                  <LiaStarSolid size={20} color="#FFC700" />
                </div>
              </div>
              <h2 className=" font-body text-white text-[14px]"> Artist</h2>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </motion.section>
  );
};

export default Review;
