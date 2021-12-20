import PopupOverlay from "../../popup-overlay";

const CreateCardPopup = ({ isOpen, setOpen }) => (
  <PopupOverlay
    isOpen={isOpen}
    setOpen={setOpen}
    heading="Новое место"
    placeholderTop="Название"
    placeholderButton="Ссылка на картинку"
    saveButton="Создать"
  ></PopupOverlay>
);
export default CreateCardPopup;
