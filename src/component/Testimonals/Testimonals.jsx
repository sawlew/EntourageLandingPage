import "./testimonals.css";
import TestimonalAvatar from "../../assets/testimonal-avatar.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";


const Testimonals = () => {



  var settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <>
      <section className="textimonal-main-container">
        <div className="testimonail-sub-container">
          <div className="testimonail-contents">
            <div className="testimonal-header">
              <div className="testimonal-title">
                <h4 data-aos="fade-up">What Our Customers Say</h4>
              </div>
            </div>
            <Slider {...settings}>
              <div className="testimonal">
                <p data-aos="fade-up">
                  “I was really impressed with the level of service I received
                  from this car rental company. The process was smooth and easy,
                  and the car I rented was in excellent condition. The staff was
                  friendly and helpful, and I felt well taken care of throughout
                  my rental period. I would definitely recommend this company to
                  anyone looking for a premium car rental experience.”
                </p>
                <div className="testimonal-avatar">
                  <div className="avatar">
                    <img src={TestimonalAvatar} alt="" />
                  </div>
                  <div data-aos="fade-up" className="avatar-name">
                    <p>Lokman Hossain</p>
                    <span>From Texas</span>
                  </div>
                </div>
              </div>
              <div className="testimonal">
                <p>
                  “I was really impressed with the level of service I received
                  from this car rental company. The process was smooth and easy,
                  and the car I rented was in excellent condition. The staff was
                  friendly and helpful, and I felt well taken care of throughout
                  my rental period. I would definitely recommend this company to
                  anyone looking for a premium car rental experience.”
                </p>
                <div className="testimonal-avatar">
                  <div className="avatar">
                    <img src={TestimonalAvatar} alt="" />
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

export default Testimonals;
