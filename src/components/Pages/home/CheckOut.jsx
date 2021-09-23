import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss"; // Swiper Carousel Style
import SwiperCore from "swiper";
import Title from "../../blocks/Title";
//

//

class CheckOut extends Component {
  handleClick() {
    console.log("Click happened");
  }
  render() {
    return (
      <div className="checkout">
        <Container>
          <div className="checkout__content">
            <div className="left">
              <Title
                title1="CHECKOUT FEATURES"
                title2="The only app you will need"
              />
              <ul>
                <li>
                  <i
                    class="fas fa-long-arrow-alt-left fa-2x clscheme swiper-button-disabled"
                    tabindex="0"
                    role="button"
                    aria-label="Next slide"
                    aria-disabled="true"
                  ></i>
                </li>
                <li>
                  <i
                    class="fas fa-long-arrow-alt-right fa-2x clscheme"
                    tabindex="0"
                    role="button"
                    aria-label="Previous slide"
                    aria-disabled="false"
                    onClick={() => this.handleClick()}
                  ></i>
                </li>
              </ul>
            </div>
            <div className="right">
              {" "}
              <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={10}
                slidesPerView={1}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
                allowSlidePrev
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
                allowSlideNext={true}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  576: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  // when window width is >= 480px
                  800: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  // when window width is >= 640px
                  992: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                  },
                  1400: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                  },
                }}
              >
                <SwiperSlide>
                  <div className="slide">
                    <img src="/images/img-icon1.png" alt="1" />
                    <h3>Free Caliing Service</h3>
                    <p>
                      Direct mailing research development buyer iPad validation
                      startup social proof learning curve user experience
                      analytics
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slide">
                    <img src="/images/img-icon2.png" alt="1" />
                    <h3>Free Caliing Service</h3>
                    <p>
                      Direct mailing research development buyer iPad validation
                      startup social proof learning curve user experience
                      analytics
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slide">
                    <img src="/images/img-icon3.png" alt="1" />
                    <h3>Free Caliing Service</h3>
                    <p>
                      Direct mailing research development buyer iPad validation
                      startup social proof learning curve user experience
                      analytics
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slide">
                    <img src="/images/img-icon1.png" alt="1" />
                    <h3>Free Caliing Service</h3>
                    <p>
                      Direct mailing research development buyer iPad validation
                      startup social proof learning curve user experience
                      analytics
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slide">
                    <img src="/images/img-icon2.png" alt="1" />
                    <h3>Free Caliing Service</h3>
                    <p>
                      Direct mailing research development buyer iPad validation
                      startup social proof learning curve user experience
                      analytics
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slide">
                    <img src="/images/img-icon3.png" alt="1" />
                    <h3>Free Caliing Service</h3>
                    <p>
                      Direct mailing research development buyer iPad validation
                      startup social proof learning curve user experience
                      analytics
                    </p>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default CheckOut;
