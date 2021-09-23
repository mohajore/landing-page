import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import Title from "./../../blocks/Title";
// React elastic carousel start
import Carousel from "react-elastic-carousel";
// React elastic carousel end

class AppScreen extends Component {
  constructor(props) {
    super(props);
    this.breakPoints = [
      { width: 1, itemsToShow: 1 },
      { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
      { width: 850, itemsToShow: 3 },
      { width: 1150, itemsToShow: 4, itemsToScroll: 1 },
    ];
  }

  render() {
    return (
      <div className="appScreen">
        <Title title1="APP SCREEN" title2="How our app looks like" />
        <Container>
          <Carousel
            showArrows={false}
            itemPadding={[10, 18]}
            breakPoints={this.breakPoints}
          >
            <div>
              {" "}
              <img src="images/img-screen1.jpg" />
            </div>
            <div>
              {" "}
              <img src="images/img-screen2.jpg" />
            </div>
            <div>
              {" "}
              <img src="images/img-screen3.jpg" />
            </div>
            <div>
              {" "}
              <img src="images/img-screen4.jpg" />
            </div>
            <div>
              {" "}
              <img src="images/img-screen5.jpg" />
            </div>
            <div>
              {" "}
              <img src="images/img-screen1.jpg" />
            </div>
            <div>
              {" "}
              <img src="images/img-screen2.jpg" />
            </div>
            <div>
              {" "}
              <img src="images/img-screen3.jpg" />
            </div>
            <div>
              {" "}
              <img src="images/img-screen4.jpg" />
            </div>
            <div>
              {" "}
              <img src="images/img-screen5.jpg" />
            </div>
          </Carousel>
          {/* <Swiper
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
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              576: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              // when window width is >= 480px
              768: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              // when window width is >= 640px
              1400: {
                slidesPerView: 4,
                spaceBetween: 40,
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
          </Swiper> */}
        </Container>
      </div>
    );
  }
}

export default AppScreen;
