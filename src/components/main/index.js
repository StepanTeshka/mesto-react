import React, { useState } from "react";

const Main = ({
  setOpenEditorPopup,
  setOpenCreateCardPopup,
  user,
  cards,
  setCards,
}) => {
  const handleLike = (index) => {
    const newArray = cards.map((item, itemIndex) => {
      if (index === itemIndex) {
        const isliked = item.isLiked;
        item.isLiked = !isliked;
      }
      return item;
    });

    setCards(newArray);
  };

  return (
    <main className="main">
      <section className="main__section-interactions">
        <div className="section-interactions__profile">
          <img className="profile__image" src="./image.jpg" />
          <div className="profile__container">
            <div className="profile__information">
              {user && user.name ? (
                <h2 className="information__name">{user.name}</h2>
              ) : null}
              {user && user.description ? (
                <p className="information__profession">{user.description}</p>
              ) : null}
            </div>
            <button
              className="profile__edit-button"
              onClick={() => setOpenEditorPopup(true)}
            >
              <img src="./Edit Button.svg" />
            </button>
          </div>
        </div>
        <button
          className="section-interactions__button"
          onClick={() => setOpenCreateCardPopup(true)}
        >
          <img src="./callCardPopUp.svg" />
        </button>
      </section>
      <section className="main__section-cards">
        <div className="section-cards__container">
          {cards && cards.length ? (
            cards.map((item, index) => (
              <div key={index} className="card">
                <div className="card__container">
                  <img src={item.link} className="card__img" />
                  <div className="card__information-container">
                    <h3 className="information-container__h3">{item.title}</h3>
                    <button
                      className="information-container__button-like"
                      onClick={() => handleLike(index)}
                    >
                      <img
                        src={item.isLiked ? "./Union.svg" : "./Vector.svg"}
                      />
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <h2 style={style}>Добавьте картинки</h2>
          )}
        </div>
      </section>
    </main>
  );
};
export default Main;

const style = { color: "white", bg: "red" };
