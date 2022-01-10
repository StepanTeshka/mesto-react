import { useState, useEffect } from "react";
import PopupOverlay from "../../popup-overlay";

const EditorPopup = ({ isOpen, setOpen, setUser, user }) => {
  const [nameInput, setNameInput] = useState(user.name);
  const [descriptionInput, setDescriptionInput] = useState(user.description);
  const [descriptionInputError, setDescriptionInputError] = useState(null);
  const [nameInputError, setNameInputError] = useState(null);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (!descriptionInput) {
      setDescriptionInputError({ message: "Вы пропустили это поле." });
    }
    if (!nameInput) {
      setNameInputError({ message: "Вы пропустили это поле." });
    }

    if (!nameInput || !descriptionInput) return;

    setUser({ name: nameInput, description: descriptionInput });
    setOpen(false);
  };

  useEffect(() => {
    if (!isOpen) {
      setNameInput(nameInput);
      setDescriptionInput(descriptionInput);
      setDescriptionInputError(null);
      setNameInputError(null);
    }
  }, [isOpen]);

  return (
    <PopupOverlay
      isOpen={isOpen}
      setOpen={setOpen}
      heading="Редактирование профиля"
    >
      <form onSubmit={handleSubmit}>
        <Input
          onChange={(evt) => {
            setNameInputError(null);
            setNameInput(evt.target.value);
          }}
          placeholder="Имя"
          type="text"
          name="name"
          value={nameInput}
          error={nameInputError}
        />
        <Input
          onChange={(evt) => {
            setDescriptionInputError(null);
            setDescriptionInput(evt.target.value);
          }}
          placeholder="Описание"
          type="text"
          name="description"
          value={descriptionInput}
          error={descriptionInputError}
        />
        <button className="popup-card__button-save">Сохранить</button>
      </form>
    </PopupOverlay>
  );
};
export default EditorPopup;

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
