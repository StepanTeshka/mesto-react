import React, { useState } from "react";
import Header from "../components/header";
import Main from "../components/main";
import Footer from "../components/footer";
import EditorPopup from "./modals/editor-popup";
import CreateCardPopup from "./modals/create-card-popup";
import ImageCardsPopup from "../components/imageCards-popup";
import EditorImageProfilePopup from "./modals/editor__image-profile-popup";
import { mockCards } from "../utils/mock-cards";

function App() {
  const [isOpenEditorPopup, setOpenEditorPopup] = useState(false);
  const [isOpenСreateCardPopup, setOpenCreateCardPopup] = useState(false);
  const [isOpenEditorImageProfilePopup, setOpenEditorImageProfilePopup] =
    useState(false);
  const [user, setUser] = useState({
    name: `Жак-Ив Фреско`,
    description: `Исследователь океанов`,
    link: "https://ltdfoto.ru/images/imaged4b237d071d85a63.jpg",
  });
  const [cards, setCards] = useState(mockCards);

  const [activeCard, setActiveCard] = useState();

  return (
    <>
      <Header />
      <Main
        setOpenEditorPopup={setOpenEditorPopup}
        setOpenCreateCardPopup={setOpenCreateCardPopup}
        setOpenEditorImageProfilePopup={setOpenEditorImageProfilePopup}
        user={user}
        cards={cards}
        setCards={setCards}
        setActiveCard={setActiveCard}
        activeCard={activeCard}
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
      />
      {activeCard ? (
        <ImageCardsPopup
          activeCard={activeCard}
          setActiveCard={setActiveCard}
        />
      ) : null}
      <EditorImageProfilePopup
        isOpen={isOpenEditorImageProfilePopup}
        setOpen={setOpenEditorImageProfilePopup}
        user={user}
        setUser={setUser}
      />
    </>
  );
}

export default App;
