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
            </div>
            <div className="right">
              {" "}
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                slidesPerGroup={3}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                className="mySwiper"
                breakpoints={{
                  // when window width is >= 320px
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 50,
                  },
                  // when window width is >= 993px
                  993: {
                    slidesPerView: 5,
                    spaceBetween: 30,
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
                    <img src="/images/img-icon1.png" alt="1" />
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
