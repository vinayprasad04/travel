import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import holiday_0 from "../../assets/img/holiday_0.png";
import overwhelmed from "../../assets/img/overwhelmed.svg";
import Swal from "sweetalert2";

const FavItenarieCard = () => {
  const [favList, setFavList] = useState([]);
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user"))
  );

  const name = currentUser?.data?.user?.name
    ? currentUser?.data?.user?.name
    : "Charlie";

  const getFav = () => {
    axios
      .get(process.env.REACT_APP_SERVER_URL + "/favourite/get")
      .then((res) => {
        // console.log(res.data);
        setFavList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleRemove = (id) => {
    console.log(id);
    axios
      .delete(process.env.REACT_APP_SERVER_URL + `/favourite/delete/${id}`)
      .then((res) => {
        if (res.status === 200) {
          Swal.fire({
            icon: "success",
            title: "Removed Successfully !",
          });
        }
        getFav();
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: `${err}`,
        });
      });
  };

  useEffect(() => {
    getFav();
  }, []);

  return (
    <div>
      <div className="recommendations">
        <div className="container">
          <h2 className="recSlider__title">Good morning {name}!</h2>
          <div className="recSlider__subtitle">
            You have short listed {favList.length} events to join later.
          </div>
          <div className="card__grid">
            {favList.map((data, index) => {
              return (
                <div className="card__item" key={index}>
                  <Link to="#" className="card__link">
                    <div className="card__thumb">
                      <button
                        className="card__remove"
                        onClick={() => handleRemove(data.id)}
                      >
                        Remove
                      </button>
                      <img
                        src={data?.img ? data?.img : holiday_0}
                        alt="event name"
                        className="card__img"
                      />
                    </div>
                    <div className="card__info">
                      <div className="card__row">
                        <div className="vibes">
                          <img
                            src={overwhelmed}
                            alt="Overwhelmed"
                            className="vibes__icon"
                          />
                          <span className="vibes__text">{data.rating}</span>
                        </div>
                        <div className="card__date">{data.startdate}</div>
                      </div>
                      <h3 className="card__title">{data.title}</h3>
                      <div className="card__price">{data.price} AED/person</div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavItenarieCard;
