import { useState, useEffect } from "react";
import PopupOverlay from "../../popup-overlay";

const EditorImageProfilePopup = ({ isOpen, setOpen, user, setUser }) => {
  const [linkProfileImage, setLinkProfileImage] = useState(user.link);
  const [linkProfileImageError, setLinkProfileImageError] = useState(null);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (!linkProfileImage) {
      setLinkProfileImageError({ message: "Введите ссылку." });
    }

    if (!linkRegular.test(linkProfileImage)) {
      setLinkProfileImageError({ message: "Неправильный формат сслыки." });
      return;
    }

    user.link = linkProfileImage;

    if (!linkProfileImage) return;

    setOpen(false);

    return user;
  };
  useEffect(() => {
    if (!isOpen) {
      setLinkProfileImage("");
      setLinkProfileImageError(null);
    }
  }, [isOpen]);

  return (
    <PopupOverlay isOpen={isOpen} setOpen={setOpen} heading="Новая аватарка">
      <form onSubmit={handleSubmit}>
        <Input
          onChange={(evt) => {
            setLinkProfileImageError(null);
            setLinkProfileImage(evt.target.value);
          }}
          placeholder="Ссылка на аватарку"
          type="text"
          name="linkProfileImage"
          value={linkProfileImage}
          error={linkProfileImageError}
        />
        <button className="popup-card__button-save button">Изменить</button>
      </form>
    </PopupOverlay>
  );
};
export default EditorImageProfilePopup;

const linkRegular =
  /^((ftp|http|https):\/\/)?(www\.)?([A-Za-zА-Яа-я0-9]{1}[A-Za-zА-Яа-я0-9\-]*\.?)*\.{1}[A-Za-zА-Яа-я0-9-]{2,8}(\/([\w#!:.?+=&%@!\-\/])*)?/;

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
