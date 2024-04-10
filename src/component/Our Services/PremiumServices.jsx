import "./services.css";
import StarIcon from "../../assets/stars-01.png";
import CoinsHand from "../../assets/coins-hand.png";
import CheckIcon from "../../assets/check-verified-01.png";

const PremiumServices = () => {

  return (
    <>
      <section className="premium-service-main-container" id="services">
        <div className="overlay">
        <div className="premium-service-sub-container">
          <div className="premium-service-header">
            <div className="premium-service-title">
              <h4 data-aos="fade-left">Our Premium Services </h4>
            </div>
            <div className="premium-service-description">
              <p data-aos="fade-right">
                To make renting easy and hassle-free, we provide a variety of
                services and advantages. We have you covered with a variety of
                vehicles and flexible rental terms.
              </p>
            </div>
          </div>

          <div data-aos="fade-left" className="premium-service-grid">
            <div className="premium-service-feature">
              <div className="service-feature-icon">
                <img src={StarIcon} alt="" />
              </div>
              <div className="detail one">
                <h4>Quality Choice</h4>
                <p>
                  We offer a wide range of high-quality vehicles to choose from,
                  including luxury cars, SUVs, vans, and more.
                </p>
              </div>
            </div>
            <div className="premium-service-feature">
              <div className="service-feature-icon">
                <img src={CoinsHand} alt="" />
              </div>
              <div className="detail two">
                <h4>Affordable Prices</h4>
                <p>
                  Our rental rates are highly competitive and affordable,
                  allowing our customers to enjoy their trips without breaking
                  the bank.
                </p>
              </div>
            </div>
            <div className="premium-service-feature">
              <div className="service-feature-icon">
                <img src={CheckIcon} alt="" />
              </div>
              <div className="detail three">
                <h4>Convenient Online Booking</h4>
                <p>
                  With our easy-to-use online booking system, customers can
                  quickly and conveniently reserve their rental car from
                  anywhere, anytime.
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>

      </section>
    </>
  );
};

export default PremiumServices;
