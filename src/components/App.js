import React, { useState } from "react";
import Header from "../components/header";
import Main from "../components/main";
import Footer from "../components/footer";
import EditorPopup from "./modals/editor-popup";
import CreateCardPopup from "./modals/create-card-popup";
import ImagePopup from "../components/image-popup";
import { mockCards } from "../utils/mock-cards";

function App() {
  const [isOpenEditorPopup, setOpenEditorPopup] = useState(false);
  const [isOpenСreateCardPopup, setOpenCreateCardPopup] = useState(false);
  const [isOpenImagePopup, setOpenImagePopup] = useState(false);
  const [user, setUser] = useState({
    name: `Жак-Ив Фреско`,
    description: `Исследователь океанов`,
  });
  const [index, setIndex] = useState(null);
  const [cards, setCards] = useState(mockCards);

  return (
    <>
      <Header />
      <Main
        setOpenEditorPopup={setOpenEditorPopup}
        setOpenCreateCardPopup={setOpenCreateCardPopup}
        setOpenImagePopup={setOpenImagePopup}
        user={user}
        cards={cards}
        setCards={setCards}
        setIndex={setIndex}
      />
      <Footer />
      <EditorPopup
        user={user}
        setUser={setUser}
        isOpen={isOpenEditorPopup}
        setOpen={setOpenEditorPopup}
      />
      <CreateCardPopup
        cards={cards}
        setCards={setCards}
        isOpen={isOpenСreateCardPopup}
        setOpen={setOpenCreateCardPopup}
        index={index}
      />
      <ImagePopup
        isOpen={isOpenImagePopup}
        setOpen={setOpenImagePopup}
        cards={cards}
        index={index}
      />
    </>
  );
}

export default App;
