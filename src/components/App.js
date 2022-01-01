import React, { useState } from "react";
import Header from "../components/header";
import Main from "../components/main";
import Footer from "../components/footer";
import EditorPopup from "./modals/editor-popup";
import CreateCardPopup from "./modals/create-card-popup";
import { mockCards } from "../utils/mock-cards";

function App() {
  const [isOpenEditorPopup, setOpenEditorPopup] = useState(false);
  const [isOpenСreateCardPopup, setOpenCreateCardPopup] = useState(false);
  const [user, setUser] = useState({
    name: `Жак-Ив Фреско`,
    description: `Исследователь океанов`,
  });

  const [cards, setCards] = useState(mockCards);

  console.log("isOpen editor popup", isOpenEditorPopup);
  console.log("isOpen editor popup", isOpenСreateCardPopup);
  console.log(cards);
  return (
    <>
      <Header />
      <Main
        setOpenEditorPopup={setOpenEditorPopup}
        setOpenCreateCardPopup={setOpenCreateCardPopup}
        user={user}
        cards={cards}
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
    </>
  );
}

export default App;
