import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss"; // Swiper Carousel Style
import Title from "./../../blocks/Title";

// React elastic carousel start
import Carousel from "react-elastic-carousel";
// React elastic carousel end

class UserReview extends Component {
  constructor(props) {
    super(props);
    this.breakPoints = [
      { width: 1, itemsToShow: 1 },
      { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
      { width: 850, itemsToShow: 3 },
      { width: 1150, itemsToShow: 3, itemsToScroll: 1 },
    ];
  }
  render() {
    return (
      <Container>
        <div className="User-review">
          <Title title1="USER REVIEWS" title2="What users say about us" />
          <div className="User-review__content">
            <div className="User-review__content__background"></div>
            {/* Swiper Carousel Start */}
            <div className="User-review__content__Swiper-container">
              {/*elastic carousel start */}
              {/* <Carousel
                showArrows={false}
                itemPadding={[10, 18]}
                breakPoints={this.breakPoints}
              >
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
                    preparing a lot of presentations. To save time &amp; reduce
                    boredom, I occasionally have only a pick who presents the
                    good work!
                  </p>
                </div>

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
                    preparing a lot of presentations. To save time &amp; reduce
                    boredom, I occasionally have only a pick who presents the
                    good work!
                  </p>
                </div>

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
                    preparing a lot of presentations. To save time &amp; reduce
                    boredom, I occasionally have only a pick who presents the
                    good work!
                  </p>
                </div>

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
                    preparing a lot of presentations. To save time &amp; reduce
                    boredom, I occasionally have only a pick who presents the
                    good work!
                  </p>
                </div>

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
                    preparing a lot of presentations. To save time &amp; reduce
                    boredom, I occasionally have only a pick who presents the
                    good work!
                  </p>
                </div>
              </Carousel> */}
              {/*elastic carousel End */}

              <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={4}
                navigation
                loop={true}
                controller
                pagination={{
                  clickable: true,
                  el: ".swiper-pagination",
                  type: "bullets",
                }}
                inverse={true}
                dynamicBullets={true}
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
            </div>
            {/* Swiper Carousel End */}
          </div>
        </div>
      </Container>
    );
  }
}

export default UserReview;
