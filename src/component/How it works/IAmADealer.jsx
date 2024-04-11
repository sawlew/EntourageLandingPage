import Jeep from "../../assets/tripplejeep.png";
import { useState } from "react";
import Works from "../../utils/HowItWorksData";


const IAmADealer = () => {
  const [howItWorks, setHowItWorks] = useState(Works);
  

  return (
    <>
      <div className="need-car-container2">
        <div data-aos="fade-right" className="real-left-container2">
        {howItWorks.map((needacar) => {
          const {id, title2, desc2, image} = needacar;
          return (
            <div className="need-car-left-container2" key={id}>
              <div className="need-car-left-content2">
                <div className="left-content-left-img2">
                  <img src={image} alt={image} />
                </div>
                <div className="left-content-right2">
                  <div className="left-content-right-title2">
                    <h4>{title2}</h4>
                  </div>
                  <div className="left-content-right-desc2">
                    <p>{desc2}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        </div>

        <div data-aos="fade-left" className="need-car-right2">
          <div className="image-container2" style={{backgroundImage: `url(${Jeep})`}}>
            {/* <img src={Jeep} alt="" className="" /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default IAmADealer;
