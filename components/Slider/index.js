import Image from "next/image";
import styles from "./Slider.module.scss";
import { Autoplay } from "swiper";

import { Container, Col, Row } from "react-bootstrap";
import YellowButton from "../Buttons/yellowButton";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/scrollbar";
export default function Slider() {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      className={styles.wrapper}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      loop={true}
      centeredSlides={true}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
      speed={2500}
    >
      {[0, 1, 2, 3]?.map((item, k) => (
        <SwiperSlide
          key={k}
          style={{
            backgroundImage: `url('/images/acdc.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className={styles.shadow}>
            <Container className={styles.sliderContainer}>
              <Row>
                <h1>AC/DC live in Munich </h1>
                <p>
                  This is the first ACDC concert in Germany in years. Reserve
                  your ticket now!
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
