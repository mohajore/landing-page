import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";

class AppScreen extends Component {
  render() {
    return (
      <div className="appScreen">
        <Container>
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={4}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            breakpoints={{
              "@0.00": {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              "@0.75": {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              "@1.00": {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              "@1.50": {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
          >
            <SwiperSlide>
              <img src="images/img-screen1.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="images/img-screen2.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="images/img-screen3.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="images/img-screen4.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="images/img-screen5.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="images/img-screen1.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="images/img-screen2.jpg" />
            </SwiperSlide>
            ...
          </Swiper>
        </Container>
      </div>
    );
  }
}

export default AppScreen;
