const ImagePopup = ({ isOpen, setOpen, cards, index }) => {
  let item = cards.find((item) => item.id === index);
  console.log(item);
  return (
    <div className={`popup ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup-overlay" onClick={() => setOpen(false)} />
      <div className="popup-image">
        <button
          className="popup-card__button-close"
          onClick={() => setOpen(false)}
        >
          <img alt="close icon" src="./Close Icon.svg" />
        </button>
        <img className="popup-image__image" src={item.link} />
        <div className="popup-image__container">
          <h3 className="text-title text-color_white">{item.title}</h3>
        </div>
      </div>
    </div>
  );
};
export default ImagePopup;
