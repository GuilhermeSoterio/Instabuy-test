"use client";

import produtojpeg from "../../../common/produto.jpeg";
import reactlogo from "../../../common/reactlogo.png";
import analytics from "../../../common/analytics.png";
import * as S from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const PromotionalCarousel = () => {
  const slides = [produtojpeg, reactlogo, analytics];

  return (
    <>
      <S.Container>
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 4000 }}
          loop={true} // Habilita o loop do carousel
          style={{ width: "100%", height: "100%" }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide
              key={index}
              className="swiper-wrapper"
              style={{ width: "100%", height: "100%" }}
            >
              {" "}
              {/* Adicione a classe swiper-wrapper */}
              <S.Img src={slide.src} alt={"name"} />
            </SwiperSlide>
          ))}
        </Swiper>
      </S.Container>
    </>
  );
};

export default PromotionalCarousel;
