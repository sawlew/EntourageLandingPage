import "./footer.css"
import InstagramIcon from '../../assets/instagram icon.png';
import InternetIcon from "../../assets/internet icon.png";
import TwitterIcon from "../../assets/twitter icon.png";
import YouTubeIcon from "../../assets/youtube icon.png";
// import * as FaIcon from "react-icons/fa6";
const Footer = () => {
  return (
    <>
      <footer>
        <section className="footer-sub-container">
          <div className="footer-flex">
            <div className="footer-title">
              <h4>Entourage</h4>
            </div>
            <nav className="footer-nav-links">
              <ul>
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#about">About Us</a>
                </li>
                <li>
                  <a href="#services">Services</a>
                </li>
                <li>
                  <a href="#contact">Contact Us</a>
                </li>
              </ul>
            </nav>
            <div className="social-medias">
              <ul>
                <li>
                  <a href="#insta">
                    {/* <FaIcon.FaInstagram className="social-medias-icon" /> */}
                    <img src={InstagramIcon} alt="" />
                  </a>
                </li>
                <li>
                  <a href="#inter">
                    {/* <FaIcon.FaSquareFacebook className="social-medias-icon" /> */}
                    <img src={InternetIcon} alt="" />
                  </a>
                </li>
                <li>
                  <a href="#twitt">
                    {/* <FaIcon.FaTwitter className="social-medias-icon" /> */}
                    <img src={TwitterIcon} alt="" />
                  </a>
                </li>
                <li>
                  <a href="#you">
                    {/* <FaIcon.FaYoutube className="social-medias-icon" /> */}
                    <img src={YouTubeIcon} alt="" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
}
 
export default Footer;