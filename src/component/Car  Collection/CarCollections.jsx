import React, { useState } from 'react';
import Speedometer from "../../assets/speedometer-01.png";
import ManualGearBox from "../../assets/manual-gearbox.png";
import Users from "../../assets/users-01.png";
import FuelPomp from "../../assets/gas-station.png";
import { motion } from "framer-motion";

const CarCollections = ({ carsdata, showAll, displayModal }) => {

  return (
    <>
      <div className="car-cards-container">
        {carsdata.slice(0, showAll ? carsdata.length : 6).map((carsdata) => {
          const { id, title, price, image } = carsdata;
          return (
            <motion.article
              data-aos="fade-right"
              key={id}
              className="car-card"
              whileHover={{ scale: 1.05, border: "1px solid #000000" }}
              transition={{ duration: 0.1 }}
            >
              <img src={image} alt={image} />
              <div className="card-title-container">
                <div className="card-title">
                  <p>{title}</p>
                </div>
                <div className="price-container">
                  <h4 className="price">
                    {price}
                    <span>/day</span>
                  </h4>
                </div>
                <div className="car-features-main-container">
                  <div className="car-features-flex-container">
                    <div className="feature">
                      <img src={Speedometer} alt="Speedo meter" />
                      <span>4,000</span>
                    </div>
                    <div className="feature">
                      <img src={ManualGearBox} alt="Manual gear box" />
                      <span>Auto</span>
                    </div>
                    <div className="feature">
                      <img src={Users} alt="Users" />
                      <span>4 Person</span>
                    </div>
                    <div className="feature">
                      <img src={FuelPomp} alt="Fuel pomp" />
                      <span>Electric</span>
                    </div>
                  </div>
                </div>

                <a className="car-card-btn" onClick={() => displayModal()}>
                  
                    Rent Now
                  {/* </motion.button> */}
                </a>
              </div>
            </motion.article>
          );
        })}
      </div>
    </>
  );
};

export default CarCollections;
