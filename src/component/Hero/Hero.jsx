import { Form, Header } from "..";
import { useState } from "react";
import HeroContent from "./HeroContent";
import Herodata from "../../utils/HeroSlidesData";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
const Hero = () => {
  // const [bg, setbg] = useState(Herodata);
  const [ id, setId ] = useState(Herodata);
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    pauseOnHover: false,
  };
  return (
    <>
      

      <Slider {...settings}>
        {Herodata.map((data) => (
          <HeroContent key={data.id} Herodata={data} />
        ))}
        </Slider>
    </>
  );
}
 
export default Hero;