const Main = ({ setOpenEditorPopup, setOpenCreateCardPopup, user, cards }) => (
  <main className="main">
    <section className="main__section-interactions">
      <div className="section-interactions__profile">
        <img className="profile__image" src="./image.jpg" />
        <div className="profile__information">
          <h2 className="information__name">{user.name}</h2>
          <p className="information__profession">{user.description}</p>
        </div>
        <button
          className="profile__edit-button"
          onClick={() => setOpenEditorPopup(true)}
        >
          <img src="./Edit Button.svg" />
        </button>
      </div>
      <button
        className="section-interactions__button"
        onClick={() => setOpenCreateCardPopup(true)}
      >
        <img src="./Add Button.svg" />
      </button>
    </section>
    <section className="section-cards">
      {/* <div className="section-cards__organizing"></div> */}
      <div className="flex-container">
        {cards && cards.length ? (
          cards.map((item, index) => <Card key={index} {...item} />)
        ) : (
          <h3 style={{ color: "white" }}>Нет добавленных изображений</h3>
        )}
      </div>
    </section>
  </main>
);
export default Main;

const Card = () => {
  return <div></div>;
};
