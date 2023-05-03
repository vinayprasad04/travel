import React, { useEffect, useState } from "react";
import img from "../assets/img/overwhelmed.svg";
import { useDispatch, useSelector } from "react-redux";
import { RemoveToFav, getFav } from "../redux/actions/favoriteAction";

const Favorites = () => {
  const { user } = useSelector((state) => state.users);
  const [fav, setFav] = useState();
  const dispatch = useDispatch();
  const getFavorites = async () => {
    try {
      const token = localStorage.getItem("token");
      const data = await getFav(token);
      if (data?.data.data) setFav(data?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleRemove = async (id) => {
    try {
      const token = localStorage.getItem("token");
      const fav = await RemoveToFav(id, token);
      if (fav?.data.data) {
        getFavorites();
        dispatch({ type: "addToFav", payload: fav?.data.data.fav });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFavorites();
  }, []);

  return (
    <main className="content favorites">
      <div className="recommendations">
        <div className="container">
          <h2 className="recSlider__title">Hii {user?.data.name}!</h2>
          <div className="recSlider__subtitle">
            You have short listed {fav?.length} events to join later.
          </div>
          <div className="card__grid">
            {fav?.map((d) => (
              <div className="card__item" key={d?.id}>
                <a className="card__link">
                  <div className="card__thumb">
                    <button
                      className="card__remove"
                      onClick={() => handleRemove(d?.id)}
                    >
                      Remove
                    </button>
                    <img
                      src={`https://cdn.firsttry.live/${d.images[0].url}`}
                      alt="event name"
                      className="card__img"
                    />
                  </div>
                  <div className="card__info">
                    <div className="card__row">
                      <div className="vibes">
                        <img
                          src={img}
                          alt="Overwhelmed"
                          className="vibes__icon"
                        />
                        <span className="vibes__text">Overwhelmed</span>
                      </div>
                      <div className="card__date">
                        {new Date(d?.eventstartdate).toLocaleDateString()}
                      </div>
                    </div>
                    <h3 className="card__title">{d?.title}</h3>
                    <div className="card__price">1800 AED/person</div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Favorites;
