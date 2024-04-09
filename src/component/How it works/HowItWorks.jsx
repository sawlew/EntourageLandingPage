import "./howitworks.css";
import INeedACar from "./INeedACar";
import IAmADealer from "./IAmADealer";
import DealerButton from "./IAmADealerButton";
import NeedACarButton from "./INeedACarButton";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const HowItWorksMain = () => {


  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <DealerButton />,
    prevArrow: <NeedACarButton />,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //       infinite: true,
    //       dots: true,
    //     },
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //       initialSlide: 1,
    //     },
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    // ],
  };
  return (
    <>
      <section data-aos="fade-right" className="how-it-works-main-container" id="howItWorks">
        <div className="how-it-works-sub-container">
          <div className="how-it-works-header">
            <div className="how-it-works-title">
              <h4>How it woks</h4>
            </div>
            <div className="how-it-works-description">
              <p>
                Renting a luxury car has never been easier. Our streamlined
                process makes it simple for you to book and confirm your vehicle
                of choice online
              </p>
            </div>
          </div>
          <Slider {...settings}>
            <INeedACar />
            <IAmADealer />
          </Slider>
        </div>
      </section>
    </>
  );
};

export default HowItWorksMain;
