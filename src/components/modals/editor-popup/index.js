import { useState } from "react";
import PopupOverlay from "../../popup-overlay";

const EditorPopup = ({ isOpen, setOpen, setUser, user }) => {
  const [nameInput, setNameInput] = useState(user.name);
  const [descriptionInput, setDescriptionInput] = useState(user.description);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (!nameInput || !descriptionInput) return;

    setUser({ name: nameInput, description: descriptionInput });
    setOpen(false);
  };

  return (
    <PopupOverlay
      isOpen={isOpen}
      setOpen={setOpen}
      heading="Редактирование профиля"
    >
      <form onSubmit={handleSubmit}>
        <input
          value={nameInput}
          onChange={(evt) => setNameInput(evt.target.value)}
          placeholder="Имя"
          class="popup-card__input"
        />
        <input
          value={descriptionInput}
          onChange={(evt) => setDescriptionInput(evt.target.value)}
          placeholder="Профессия"
          class="popup-card__input"
        />
        <button class="popup-card__button-save">Сохранить</button>
      </form>
    </PopupOverlay>
  );
};
export default EditorPopup;
