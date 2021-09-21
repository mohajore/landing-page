import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";

// import "swiper/scss";
// import "swiper/scss/navigation";
// import "swiper/scss/pagination";
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
          >
            <SwiperSlide>
              <img src="images/img-screen2.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="images/img-screen2.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="images/img-screen2.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="images/img-screen2.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="images/img-screen2.jpg" />
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
