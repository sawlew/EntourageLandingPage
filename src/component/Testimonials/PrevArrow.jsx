import * as FaIcon from "react-icons/fa";
const PrevArrow = ({ onClick }) => {
  return (
    <>
      <button data-aos="fade-left" className="prev-arrow" onClick={onClick}>
        <FaIcon.FaArrowLeft className="arr" />
      </button>
    </>
  );
};

export default PrevArrow;
