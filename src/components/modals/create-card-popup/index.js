import { useState, useEffect } from "react";
import PopupOverlay from "../../popup-overlay";

const CreateCardPopup = ({ isOpen, setOpen, setCards, cards }) => {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [linkError, setLinkError] = useState(null);

  const handleClick = (evt) => {
    evt.preventDefault();

    if (!link) {
      setLinkError({ message: "Введите ссылку" });
    }

    if (!linkRegular.test(link)) {
      setLinkError({ message: "Неправильный формат сслыки" });
      return;
    }

    if (!title || !link) return;

    setCards([...cards, { title, link, isLiked: false }]);
    setOpen(false);
  };

  useEffect(() => {
    if (!isOpen) {
      setLink("");
      setTitle("");
      setLinkError(null);
    }
  }, [isOpen]);

  return (
    <PopupOverlay isOpen={isOpen} setOpen={setOpen} heading="Новое место">
      <form onSubmit={handleClick}>
        <input
          onChange={(evt) => setTitle(evt.target.value)}
          placeholder="Название"
          className={`popup-card__input ${
            !title ? "popup-card__input_error" : ""
          }`}
          type="text"
          name="title"
          value={title}
          maxLength="20"
        />
        <span className={`form_error ${!title ? "form_error_on" : ""}`}>
          Вы пропустили это поле
        </span>

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
        className="popup-card__input"
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
{
  /* <input
          onChange={(evt) => setLink(evt.target.value)}
          placeholder="Ссылка на карточку"
          className={`popup-card__input ${
            !link ? "popup-card__input_error" : ""
          }`}
          type="text"
          name="link"
          value={link}
          pattern="https?://.*"
        /> */
}

{
  /* {!link ? (
          <span className={`form_error ${!link ? "form_error_on" : ""}`}>
            Вы пропустили это поле
          </span>
        ) : (
          <span className="form_error__create-card">
            Это поле должно содержать URL в формате http://mesto.ru
          </span>
        )} */
}
