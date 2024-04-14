import React from 'react'
import "./hero.css";


const HeroContent = ({ Herodata }) => {

  const { image } = Herodata;
  return (
    <>
        <section className="hero" id="home" style={{ backgroundImage: `url(${image})` }}>
            <div data-aos="fade-down" className="hero-content">
              <p>Discover the world on wheels</p><br />
              <p>with our car rental service</p>
            </div>
        </section>
    </>
  )
}

export default HeroContent