import "./collection.css";
import { useState, useEffect } from "react";
import CarCollections from "./CarCollections";
import carsdata from "../../utils/CarCollectionData";
import * as FaIcon from "react-icons/fa6";
import { motion } from "framer-motion";
import AOS from 'aos';
import 'aos/dist/aos.css';
// import Collections from "./Collections";
const OurCarCollections = () => {

  useEffect(() => {
    AOS.init();
  }, [])

  const [cars, setCars] = useState(carsdata);
  // const [collections, setCollections] = useState(allCollections);
  return (
    <>
      <section className="car-collection-main-container">
        <div className="car-collection-sub-container">
          <div className="car-collection-header">
            <div className="car-collection-title">
              <h4 data-aos="fade-up">Our Impressive Collection of Cars</h4>
            </div>
            <div className="car-collection-description">
              <p data-aos="fade-up">
                Ranging from elegant sedans to powerful sports cars, all
                carefully selected to provide our customers with the ultimate
                driving experience from our Top dealers.
              </p>
            </div>
          </div>
          <div data-aos="fade-up" className="collection-filter-container">
            <nav className="collection-filter-btns">
              <button className="filter-btn active">Popular Car</button>
              <button className="filter-btn">Luxury Car</button>
              <button className="filter-btn">Executive Car</button>
              <button className="filter-btn">Premium Car</button>
            </nav>
          </div>
          <CarCollections carsdata={cars} />
          <div className="see-all-cars">
            <motion.button className="see-all-cars-btn" whileHover={{scale: 0.9}}>
              See all Cars
              <FaIcon.FaArrowRight className="arrow-icon" />
            </motion.button>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurCarCollections;
