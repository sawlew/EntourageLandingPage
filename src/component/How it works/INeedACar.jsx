import Jeep from "../../assets/singlejeep.png";
import { useState } from "react";
import Works from "../../utils/HowItWorksData";

const INeedACar = () => {
  const [howItWorks, setHowItWorks] = useState(Works);
  

  return (
    <>
      <div className="need-car-container">
        <div className="real-left-container">
          {howItWorks.map((needacar) => {
          const {id, title, desc, image} = needacar;
          return (
            <div className="need-car-left-container" key={id}>
              <div data-aos="fade-right" className="need-car-left-content">
                <div className="left-content-left-img">
                  <img src={image} alt={image} />
                </div>
                <div className="left-content-right">
                  <div className="left-content-right-title">
                    <h4>{title}</h4>
                  </div>
                  <div className="left-content-right-desc">
                    <p>{desc}</p>
                  </div>
                </div>
              </div>
            </div>
          );
          })}
        </div>

        <div data-aos="fade-left" className="need-car-right">
          <div className="image-container" style={{backgroundImage: `url(${Jeep})`}}>
            {/* <img src={Jeep} alt="" className="" /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default INeedACar;
