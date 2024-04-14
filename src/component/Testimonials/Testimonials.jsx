import "./testimonials.css";
import TestimonialAvatar from "../../assets/testimonial-avatar.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";
import { useRef } from "react";


const Testimonials = () => {

  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };


  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <section className="testimonial-main-container">
        <div className="testimonial-sub-container">
          <div className="testimonial-contents">
            <div className="testimonial-header">
              <div className="testimonial-title">
                <h4 data-aos="fade-up">What Our Customers Say</h4>
              </div>
              <div className="nextPrev-keys">
                <PrevArrow onClick={previous} />
                <NextArrow onClick={next} />
              </div>
            </div>
            <Slider
              ref={slider => {
                sliderRef = slider;
              }}
              {...settings}
            >
              <div className="testimonial">
                <p data-aos="fade-up">
                  “I was really impressed with the level of service I received
                  from this car rental company. The process was smooth and easy,
                  and the car I rented was in excellent condition. The staff was
                  friendly and helpful, and I felt well taken care of throughout
                  my rental period. I would definitely recommend this company to
                  anyone looking for a premium car rental experience.”
                </p>
                <div data-aos="fade-up" className="testimonial-avatar">
                  <div className="avatar">
                    <img src={TestimonialAvatar} alt="" />
                  </div>
                  <div className="avatar-name">
                    <p>Lokman Hossain</p>
                    <span>From Texas</span>
                  </div>
                </div>
              </div>
              <div className="testimonial">
                <p>
                  “I was really impressed with the level of service I received
                  from this car rental company. The process was smooth and easy,
                  and the car I rented was in excellent condition. The staff was
                  friendly and helpful, and I felt well taken care of throughout
                  my rental period. I would definitely recommend this company to
                  anyone looking for a premium car rental experience.”
                </p>
                <div className="testimonial-avatar">
                  <div className="avatar">
                    <img src={TestimonialAvatar} alt="" />
                  </div>
                  <div className="avatar-name">
                    <p>Lokman Hossain</p>
                    <span>From Texas</span>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
