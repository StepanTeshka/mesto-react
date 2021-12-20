const PopupOverlay = ({ isOpen, setOpen, heading, children }) => {
  return (
    <div class={`popup ${isOpen ? "popup_opened" : ""}`}>
      <div class="popup-overlay" onClick={() => setOpen(false)} />
      <div class="popup-card">
        {heading ? <h3 class="destiny-popup__h3">{heading}</h3> : null}
        {children}
      </div>
    </div>
  );
};

export default PopupOverlay;
