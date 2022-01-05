import { useState } from "react";
import PopupOverlay from "../../popup-overlay";

const CreateCardPopup = ({ isOpen, setOpen, setCards, cards }) => {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");

  const handleClick = (evt) => {
    evt.preventDefault();

    if (!title || !link) return;

    setCards([...cards, { title, link, isLiked: false }]);

    setOpen(false);
    setTitle("");
    setLink("");
  };

  return (
    <PopupOverlay isOpen={isOpen} setOpen={setOpen} heading="Новое место">
      <form onSubmit={handleClick}>
        <input
          onChange={(evt) => setTitle(evt.target.value)}
          placeholder="Название"
          className="popup-card__input"
          type="text"
          name="title"
          value={title}
          maxlength="20"
        />
        <input
          onChange={(evt) => setLink(evt.target.value)}
          placeholder="Ссылка на карточку"
          className="popup-card__input"
          type="text"
          name="link"
          value={link}
        />
        <button className="popup-card__button-save" onSubmit={handleClick}>
          Создать
        </button>
      </form>
    </PopupOverlay>
  );
};
export default CreateCardPopup;
