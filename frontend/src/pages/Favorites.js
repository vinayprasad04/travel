import React from "react";
import imgCard from "../assets/img/Image119.jpg";

const Favorites = () => {
  const storedFavorites = JSON.parse(localStorage.getItem("favourites"));

  return (
    <div style={{ marginTop: "300px" }}>
      {storedFavorites?.map((item) => {
        return (
          <div className="card__item" style={{ margin: "70px 70px 70px 70px" }}>
            <div className="card__item">
              <a href="#" className="card__link">
                <div className="card__thumb">
                  <img src={imgCard} alt="event name" className="card__img" />
                </div>
                <div className="card__info">
                  <div className="card__row">
                    <div className="vibes">
                      <img
                        src={require(`../assets/img/${item.srcemoji}.svg`)}
                        alt="Overwhelmed"
                        className="vibes__icon"
                      />
                      <span className="vibes__text">{item.srcemoji}</span>
                    </div>
                    <div className="card__date">
                      {item.scheduledevents[0].scheduleddate}
                    </div>
                  </div>
                  <h3 className="card__title">{item.eventname}</h3>
                  <div className="card__price">{item.cost} per person</div>
                </div>
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Favorites;
