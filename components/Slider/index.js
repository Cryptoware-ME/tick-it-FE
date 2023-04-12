import Image from "next/image";
import styles from "./Slider.module.scss";
import { Autoplay } from "swiper";

import { Container, Col, Row } from "react-bootstrap";
import YellowButton from "../yellowButton";
import { EffectFade, Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/scrollbar";
import "swiper/css/effect-fade";

export default function Slider() {
  let slides = [
    {
      image: "/images/acdc.png",
      name: "AC/DC",
    },
    {
      image: "/images/opeth.png",
      name: "OPETH",
    },
    {
      image: "/images/thelyric.png",
      name: "THE LYRIC",
    },
  ];
  return (
    <Swiper
      // install Swiper modules
      modules={[EffectFade, Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      effect={"fade"}
      className={styles.wrapper}
      pagination={{ clickable: true }}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log("slide change")}
      loop={true}
      centeredSlides={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      speed={1000}
    >
      {slides?.map((item, k) => (
        <SwiperSlide
          key={k}
          style={{
            backgroundImage: `url(${item.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className={styles.shadow}>
            <Container className={styles.sliderContainer}>
              <Row>
                <h1>{item.name} </h1>
                <p>
                  This is the first {item.name} concert in Germany in years.
                  Reserve your ticket now!
                </p>
                <div>
                  <YellowButton text="Reserve" />
                </div>
              </Row>
            </Container>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
