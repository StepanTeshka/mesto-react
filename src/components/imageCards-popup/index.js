const ImageCardsPopup = ({ activeCard, setActiveCard }) => {
  const handleClose = () => setActiveCard(null);

  return (
    <div className={`popup ${activeCard ? "popup_opened" : ""}`}>
      <div className="popup-overlay" onClick={handleClose} />
      <div className="popup-image">
        <button
          className="popup-card__button-close button"
          onClick={handleClose}
        >
          <img alt="close icon" src="./Close Icon.svg" />
        </button>
        {activeCard.link ? (
          <img className="popup-image__image" src={activeCard.link} />
        ) : null}
        {activeCard.title ? (
          <div className="popup-image__container">
            <h3 className="text-title text-color_white">{activeCard.title}</h3>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ImageCardsPopup;
