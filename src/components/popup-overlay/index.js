const PopupOverlay = ({ isOpen, setOpen, heading, children }) => {
  return (
    <div className={`popup ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup-overlay" onClick={() => setOpen(false)} />
      <div className="popup-card">
        <button
          className="popup-card__button-close"
          onClick={() => setOpen(false)}
        >
          <img alt="close icon" src="./Close Icon.svg" />
        </button>
        {heading ? <h3 className="destiny-popup__h3">{heading}</h3> : null}
        {children}
      </div>
    </div>
  );
};

export default PopupOverlay;
