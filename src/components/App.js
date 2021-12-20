import React, { useState } from "react";
import Header from "../components/header";
import Main from "../components/main";
import Footer from "../components/footer";
import EditorPopup from "./modals/editor-popup";
import CreateCardPopup from "./modals/create-card-popup";

function App() {
  const [isOpenEditorPopup, setOpenEditorPopup] = useState(false);
  const [isOpenСreateCardPopup, setOpenCreateCardPopup] = useState(false);
  const [user, setUser] = useState({
    name: `Жак-Ив Фреско`,
    description: `Исследователь океанов`,
  });
  const [cards, setCards] = useState([]);

  console.log("isOpen editor popup", isOpenEditorPopup);
  console.log("isOpen editor popup", isOpenСreateCardPopup);
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
        isOpen={isOpenСreateCardPopup}
        setOpen={setOpenCreateCardPopup}
      />
    </>
  );
}

export default App;
