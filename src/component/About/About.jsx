import "./about.css";
import AboutImg from "../../assets/about-img.png";

const AboutUs = () => {

  return (
    <>
      <section className="about-main-container" id="about">
        <div className="about-sub-container">
          <div className="about-title">
            <h4 data-aos="fade-left">Your journey starts here with our wheels at your command.</h4>
          </div>
          <div className="about-flex">
            <div data-aos="fade-right" className="about-left">
              <div className="about-sub-title">
                <h4>Entourage</h4>
              </div>
              <p>
                ENTOURAGE is a luxury car hire platform employing the use of
                technology in providing a unique solution to the growing demand
                for car rentals in Nigeria with more emphasis on comfort, ease
                of access, convenience and luxury.
              </p>
            </div>
            <div data-aos="fade-up" className="about-right">
              <img src={AboutImg} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
