import React, { useState } from "react";
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
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <DealerButton />,
    prevArrow: <NeedACarButton />,
    pauseOnHover: false,
    swipe: false,
  };
  return (
    <>
      <section className="how-it-works-main-container" id="howItWorks">
        <div className="how-it-works-sub-container">
          <div className="how-it-works-header">
            <div className="how-it-works-title">
              <h4 data-aos="fade-right">How it woks</h4>
            </div>
            <div className="how-it-works-description">
              <p data-aos="fade-left">
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
