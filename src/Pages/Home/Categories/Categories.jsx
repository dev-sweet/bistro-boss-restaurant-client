import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

// import images
import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
const Categories = () => {
  return (
    <section>
      <SectionTitle title="ORDER ONLINE" subtitle="From 11:00am to 10:00pm" />
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="w-full" src={slide1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src={slide2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src={slide3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src={slide4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src={slide5} alt="" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Categories;
