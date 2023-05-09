import React, { Fragment, useState } from "react";
import useFetch from "../../hooks/useFetch";
import imgCard from "../../assets/img/Image119.jpg";
import Swal from "sweetalert2";
import { favouritesActions } from "../../store/dataStore";
import { useDispatch, useSelector } from "react-redux";

const EventRecommendation = ({ id }) => {
  const recommendations = useFetch(
    `http://localhost:8080/api/user-reviews/recommendation/${id}`
  );
  const data = useSelector((state) => state.favourites);

  const dispatch = useDispatch();

  const [favourites, setFavourites] = useState([]);

  const recommended = recommendations?.[0]?.data;

  const handeFavourite = (e, index) => {
    e.preventDefault();

    if (favourites.includes(recommended[index])) {
      const newFavourites = favourites.filter((f) => f !== recommended[index]);

      Swal.fire("Itinerary removed from favourites");
      dispatch(favouritesActions.getFavourites({ payload: newFavourites }));
      setFavourites(newFavourites);
    } else {
      const newFavourites = [...favourites, recommended[index]];

      dispatch(
        favouritesActions.getFavourites({
          payload: newFavourites,
        })
      );
      setFavourites(newFavourites);
      Swal.fire("Itinerary added to favourites");
      localStorage.setItem("favourites", JSON.stringify(newFavourites));
    }
  };

  return (
    <Fragment>
      {" "}
      {recommended &&
        recommended.map((item, index) => {
          return (
            <div className="card__item">
              <a href="#" className="card__link">
                <div className="card__thumb">
                  <button
                    key={index}
                    className={
                      favourites.includes(recommended[index])
                        ? `card__addFav`
                        : `card__fav `
                    }
                    onClick={(e) => {
                      handeFavourite(e, index);
                    }}
                  >
                    <span className="icon-heart"></span>
                  </button>
                  <img src={imgCard} alt="event name" className="card__img" />
                </div>
                <div className="card__info">
                  <div className="card__row">
                    {/* <!-- <div className="card__rating"><span className="icon-star"></span> 4.9 (123 reviews)</div> --> */}
                    <div className="vibes">
                      <img
                        src={require(`../../assets/img/${item.srcemoji}.svg`)}
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
          );
        })}
    </Fragment>
  );
};

export default EventRecommendation;
