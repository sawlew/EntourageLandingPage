const DealerButton = ({onClick}) => {
  return (
    <>
      <button data-aos="fade-left"
      className='how-it-works-slider-btn dealer'
      onClick={onClick}>
        I am a dealer
      </button>
    </>
  );
}
 
export default DealerButton;