const Main = ({
  setOpenEditorPopup,
  setOpenCreateCardPopup,
  setOpenImagePopup,
  user,
  cards,
  setCards,
  setIndex,
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
  const handleClick = (index) => {
    setIndex(index);
    setOpenImagePopup(true);
  };

  return (
    <main className="main">
      <section className="main__section-interactions">
        <div className="section-interactions__profile">
          <img
            className="profile__image"
            src="./image.jpg"
            alt="profile_image"
          />
          <div className="profile__container">
            <div className="profile__information">
              {user && user.name ? (
                <h2 className="information__name text-color_white">
                  {user.name}
                </h2>
              ) : null}
              {user && user.description ? (
                <p className="information__profession text-color_white">
                  {user.description}
                </p>
              ) : null}
            </div>
            <button
              className="button profile__edit-button"
              onClick={() => setOpenEditorPopup(true)}
            >
              <img src="./Edit Button.svg" alt="Edit Button" />
            </button>
          </div>
        </div>
        <button
          className="button section-interactions__button"
          onClick={() => setOpenCreateCardPopup(true)}
        >
          <img src="./callCardPopUp.svg" alt="plus" />
        </button>
      </section>
      <section className="main__section-cards">
        <div className="section-cards__container">
          {cards && cards.length ? (
            cards.map((item, index) => (
              <div key={index} className="card">
                <div className="card__container">
                  <img
                    src={item.link}
                    className="card__img button"
                    alt="img__card"
                    onClick={() => handleClick(index)}
                  />
                  <div className="card__information-container">
                    <h3 className="text-title">{item.title}</h3>
                    <button
                      className="button information-container__button-like"
                      onClick={() => handleLike(index)}
                    >
                      <img
                        alt="like"
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
