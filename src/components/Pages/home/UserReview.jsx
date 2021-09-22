import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss"; // Swiper Carousel Style
import Title from "./../../blocks/Title";

class UserReview extends Component {
  render() {
    return (
      <Container>
        <div className="User-review">
          <Title title1="USER REVIEWS" title2="What users say about us" />
          <fluid>
            <div className="User-review__content">
              {" "}
              {/* Swiper Carousel Start */}
              <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={4}
                navigation
                loop={true}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
                breakpoints={{
                  // when window width is >= 320px
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 50,
                  },
                  // when window width is >= 993px
                  993: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                }}
              >
                <SwiperSlide>
                  <div className="user">
                    <img src="/images/img-testimonial1.png" />
                    <h3>Arya Stark</h3>
                    <h4>Client</h4>
                    <ul>
                      <li>
                        <i class="fa fa-star"></i>
                      </li>
                      <li>
                        <i class="fa fa-star"></i>
                      </li>
                      <li>
                        <i class="fa fa-star"></i>
                      </li>
                      <li>
                        <i class="fa fa-star"></i>
                      </li>
                      <li>
                        <i class="fa fa-star"></i>
                      </li>
                    </ul>
                    <p>
                      As part of the classes I teach, I task my students with
                      preparing a lot of presentations. To save time &amp;
                      reduce boredom, I occasionally have only a pick who
                      presents the good work!
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="user">
                    <img src="/images/img-testimonial2.png" />
                    <h3>Arya Stark</h3>
                    <h4>Client</h4>
                    <ul>
                      <li>
                        <i class="fa fa-star"></i>
                      </li>
                      <li>
                        <i class="fa fa-star"></i>
                      </li>
                      <li>
                        <i class="fa fa-star"></i>
                      </li>
                      <li>
                        <i class="fa fa-star"></i>
                      </li>
                      <li>
                        <i class="fa fa-star"></i>
                      </li>
                    </ul>
                    <p>
                      As part of the classes I teach, I task my students with
                      preparing a lot of presentations. To save time &amp;
                      reduce boredom, I occasionally have only a pick who
                      presents the good work!
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="user">
                    <img src="/images/img-testimonial3.png" />
                    <h3>Arya Stark</h3>
                    <h4>Client</h4>
                    <ul>
                      <li>
                        <i class="fa fa-star"></i>
                      </li>
                      <li>
                        <i class="fa fa-star"></i>
                      </li>
                      <li>
                        <i class="fa fa-star"></i>
                      </li>
                      <li>
                        <i class="fa fa-star"></i>
                      </li>
                      <li>
                        <i class="fa fa-star"></i>
                      </li>
                    </ul>
                    <p>
                      As part of the classes I teach, I task my students with
                      preparing a lot of presentations. To save time &amp;
                      reduce boredom, I occasionally have only a pick who
                      presents the good work!
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="user">
                    <img src="/images/img-testimonial1.png" />
                    <h3>Arya Stark</h3>
                    <h4>Client</h4>
                    <ul>
                      <li>
                        <i class="fa fa-star"></i>
                      </li>
                      <li>
                        <i class="fa fa-star"></i>
                      </li>
                      <li>
                        <i class="fa fa-star"></i>
                      </li>
                      <li>
                        <i class="fa fa-star"></i>
                      </li>
                      <li>
                        <i class="fa fa-star"></i>
                      </li>
                    </ul>
                    <p>
                      As part of the classes I teach, I task my students with
                      preparing a lot of presentations. To save time &amp;
                      reduce boredom, I occasionally have only a pick who
                      presents the good work!
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="user">
                    <img src="/images/img-testimonial2.png" />
                    <h3>Arya Stark</h3>
                    <h4>Client</h4>
                    <ul>
                      <li>
                        <i class="fa fa-star"></i>
                      </li>
                      <li>
                        <i class="fa fa-star"></i>
                      </li>
                      <li>
                        <i class="fa fa-star"></i>
                      </li>
                      <li>
                        <i class="fa fa-star"></i>
                      </li>
                      <li>
                        <i class="fa fa-star"></i>
                      </li>
                    </ul>
                    <p>
                      As part of the classes I teach, I task my students with
                      preparing a lot of presentations. To save time &amp;
                      reduce boredom, I occasionally have only a pick who
                      presents the good work!
                    </p>
                  </div>
                </SwiperSlide>
              </Swiper>
              {/* Swiper Carousel End */}
            </div>
          </fluid>
        </div>
      </Container>
    );
  }
}

export default UserReview;
