import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, Pagination } from "swiper";
import { BsPeopleFill } from "react-icons/bs";
import "swiper/css";
import "swiper/css/pagination";
const HomeCarousel = () => {
  return (
    <Swiper
      className="w-full max-w-[500px] min-h-[300px] rounded-3xl bg-white"
      modules={[Thumbs, Navigation, Pagination]}
      spaceBetween={50}
      navigation
      pagination={{ clickable: true }}
      slidesPerView={1}
      scrollbar={{ draggable: true }}
    >
      <SwiperSlide className="p-12">
        <div className="flex flex-col w-full h-full gap-10">
          <p className="font-black text-black text-3xl">
            독서 서비스 <span className="text-green-600">Bookers</span>
          </p>
          <p className="font-black text-black text-2xl">
            <span className="text-green-600">Bookers</span>와 함께 함께 책 읽을
            사람을 찾아보세요
          </p>
          <BsPeopleFill fontSize={200} className="text-green-600" />
        </div>
      </SwiperSlide>
      <SwiperSlide className="p-12">
        <div className="flex flex-col w-full h-full gap-10">
          <p className="font-black text-black text-3xl">
            검색 기능을 활용하여 읽은 책들을 등록해보세요
          </p>
          <p className="font-black text-black text-2xl">
            자신의 독서기록을 공유해보세요
          </p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HomeCarousel;
