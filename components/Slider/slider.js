"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import Image from "next/image";
import styles from "./Slider.module.scss";
import { Autoplay } from "swiper";
import { Container, Col, Row } from "react-bootstrap";
import YellowButton from "../Buttons/yellowButton";
export default function Slider() {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      className={styles.wrapper}
      pagination={true}
      navigation={true}
      loop={true}
      centeredSlides={true}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
      speed={2500}
      modules={[Autoplay]}
    >
      {[0, 1, 2, 3]?.map((item, k) => (
        <SwiperSlide
          style={{
            backgroundImage: `url('/images/acdc.png')`,
            backgroundSize: "cover",
          }}
        >
          <div className={styles.shadow}>
            <Container className={styles.sliderContainer}>
              <Row>
                <h1>AC/DC live in Munich {k}</h1>
                <p>
                  This is the first ACDC concert in Germany in years. Reserve
                  your ticket now!
                </p>
               <YellowButton text="Reserve"/>
              </Row>
            </Container>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
