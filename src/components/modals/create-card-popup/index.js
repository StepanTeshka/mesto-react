import { useState, useEffect } from "react";
import PopupOverlay from "../../popup-overlay";

const CreateCardPopup = ({ isOpen, setOpen, setCards, cards }) => {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [linkError, setLinkError] = useState(null);
  const [titleError, setTitleError] = useState(null);

  const handleClick = (evt) => {
    evt.preventDefault();

    if (!title) {
      setTitleError({ message: "Вы пропустили это поле." });
    }

    if (!link) {
      setLinkError({ message: "Введите ссылку." });
    }

    if (!linkRegular.test(link)) {
      setLinkError({ message: "Неправильный формат сслыки." });
      return;
    }

    if (!title || !link) return;

    setCards([...cards, { title, link, isLiked: false, id: cards.length }]);
    setOpen(false);
  };

  useEffect(() => {
    if (!isOpen) {
      setLink("");
      setTitle("");
      setLinkError(null);
      setTitleError(null);
    }
  }, [isOpen]);

  return (
    <PopupOverlay isOpen={isOpen} setOpen={setOpen} heading="Новое место">
      <form onSubmit={handleClick}>
        <Input
          onChange={(evt) => {
            setTitleError(null);
            setTitle(evt.target.value);
          }}
          placeholder="Название"
          type="text"
          name="Title"
          value={title}
          error={titleError}
        />
        <Input
          onChange={(evt) => {
            setLinkError(null);
            setLink(evt.target.value);
          }}
          placeholder="Ссылка на карточку"
          type="text"
          name="link"
          value={link}
          error={linkError}
        />
        <button className="popup-card__button-save" onSubmit={handleClick}>
          Создать
        </button>
      </form>
    </PopupOverlay>
  );
};
export default CreateCardPopup;

const Input = ({
  onChange,
  placeholder,
  pattern,
  value,
  type = "text",
  name,
  error,
}) => {
  return (
    <div>
      <input
        onChange={onChange}
        placeholder={placeholder}
        className={`popup-card__input ${
          error ? "popup-card__input_error" : ""
        }`}
        type={type}
        name={name}
        value={value}
        pattern={pattern}
      />
      {error ? (
        <span className="form_error form_error_on">{error.message}</span>
      ) : null}
    </div>
  );
};

const linkRegular =
  /^((ftp|http|https):\/\/)?(www\.)?([A-Za-zА-Яа-я0-9]{1}[A-Za-zА-Яа-я0-9\-]*\.?)*\.{1}[A-Za-zА-Яа-я0-9-]{2,8}(\/([\w#!:.?+=&%@!\-\/])*)?/;
