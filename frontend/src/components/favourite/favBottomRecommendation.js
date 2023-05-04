import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

import holiday_0 from "../../assets/img/holiday_0.png";
import rolce from "../../assets/img/rolce.png";
import trending2 from "../../assets/img/trending2.jpg";
import overwhelmed from "../../assets/img/overwhelmed.svg";
import oneRank from "../../assets/img/one.svg";
import twoRank from "../../assets/img/two.svg";
import threeRank from "../../assets/img/three.svg";
import fourRank from "../../assets/img/four.svg";
import fiveRank from "../../assets/img/five.svg";
import { eventData } from "./data";

const FavouriteBottomRecomm = () => {
  const addFavouriteHandle = (eventData, index) => {
    axios
      .post(
        process.env.REACT_APP_SERVER_URL + "/favourite/add",
        eventData[index]
      )
      .then((res) => {
        console.log("res", res);
        if (res.status === 200) {
          Swal.fire({
            icon: "success",
            title: "Item added to favorite list !",
          });
        }
      })
      .catch((err) => {
        console.log("err", err);
        Swal.fire({
          icon: "error",
          title: err,
        });
      });
  };

  return (
    <div>
      <div className="trending mb-8">
        <div className="container">
          <h2 className="trending__title">
            Top {eventData.length} activities on this island today
          </h2>
          <div className="card__grid">
            {eventData.map((event, index) => {
              return (
                <div key={index} className="card__item">
                  <Link to="" className="card__link">
                    <div className="card__thumb">
                      <button
                        className="card__fav"
                        onClick={() => addFavouriteHandle(eventData, index)}
                      >
                        <span className="icon-heart"></span>
                      </button>
                      <img
                        src={event.img}
                        alt="event name"
                        className="card__img"
                      />
                      <span className="card__count">
                        <img src={event.count} alt="Top ranking 1" />
                      </span>
                    </div>
                    <div className="card__info">
                      <div className="card__row">
                        <div className="vibes">
                          <img
                            src={overwhelmed}
                            alt="Overwhelmed"
                            className="vibes__icon"
                          />
                          <span className="vibes__text">{event.rating}</span>
                        </div>
                        <div className="card__date">{event.startDate}</div>
                      </div>
                      <h3 className="card__title">{event.title}</h3>
                      <div className="card__price">
                        {event.price} AED/person
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}

            {/* <div className="card__item">
              <Link to="" className="card__link">
                <div className="card__thumb">
                  <button className="card__fav">
                    <span className="icon-heart"></span>
                  </button>
                  <img src={holiday_0} alt="event name" className="card__img" />
                  <span className="card__count">
                    <img src={oneRank} alt="Top ranking 1" />
                  </span>
                </div>
                <div className="card__info">
                  <div className="card__row">
                    <div className="vibes">
                      <img
                        src={overwhelmed}
                        alt="Overwhelmed"
                        className="vibes__icon"
                      />
                      <span className="vibes__text">Overwhelmed</span>
                    </div>
                    <div className="card__date">Nov 10-29</div>
                  </div>
                  <h3 className="card__title">Surfing at leasure</h3>
                  <div className="card__price">1800 AED/person</div>
                </div>
              </Link>
            </div>
            <div className="card__item">
              <Link to="" className="card__link">
                <div className="card__thumb">
                  <button className="card__fav">
                    <span className="icon-heart"></span>
                  </button>
                  <img src={rolce} alt="event name" className="card__img" />
                  <span className="card__count">
                    <img src={twoRank} alt="Top ranking 1" />
                  </span>
                </div>
                <div className="card__info">
                  <div className="card__row">
                    <div className="vibes">
                      <img
                        src={overwhelmed}
                        alt="Overwhelmed"
                        className="vibes__icon"
                      />
                      <span className="vibes__text">Overwhelmed</span>
                    </div>
                    <div className="card__date">Nov 10-29</div>
                  </div>
                  <h3 className="card__title">
                    Swimming game for below 18 year kids
                  </h3>
                  <div className="card__price">1800 AED/person</div>
                </div>
              </Link>
            </div>
            <div className="card__item">
              <Link to="" className="card__link">
                <div className="card__thumb">
                  <button className="card__fav">
                    <span className="icon-heart"></span>
                  </button>
                  <img src={trending2} alt="event name" className="card__img" />
                  <span className="card__count">
                    <img src={threeRank} alt="Top ranking 1" />
                  </span>
                </div>
                <div className="card__info">
                  <div className="card__row">
                    <div className="vibes">
                      <img
                        src={overwhelmed}
                        alt="Overwhelmed"
                        className="vibes__icon"
                      />
                      <span className="vibes__text">Overwhelmed</span>
                    </div>
                    <div className="card__date">Nov 10-29</div>
                  </div>
                  <h3 className="card__title">Surfing at leasure</h3>
                  <div className="card__price">1800 AED/person</div>
                </div>
              </Link>
            </div>
            <div className="card__item">
              <Link to="" className="card__link">
                <div className="card__thumb">
                  <button className="card__fav">
                    <span className="icon-heart"></span>
                  </button>
                  <img src={holiday_0} alt="event name" className="card__img" />
                  <span className="card__count">
                    <img src={fourRank} alt="Top ranking 1" />
                  </span>
                </div>
                <div className="card__info">
                  <div className="card__row">
                 
                    <div className="vibes">
                      <img
                        src={overwhelmed}
                        alt="Overwhelmed"
                        className="vibes__icon"
                      />
                      <span className="vibes__text">Overwhelmed</span>
                    </div>
                    <div className="card__date">Nov 10-29</div>
                  </div>
                  <h3 className="card__title">Surfing at leasure</h3>
                  <div className="card__price">1800 AED/person</div>
                </div>
              </Link>
            </div>
            <div className="card__item">
              <Link to="" className="card__link">
                <div className="card__thumb">
                  <button className="card__fav">
                    <span className="icon-heart"></span>
                  </button>
                  <img src={rolce} alt="event name" className="card__img" />
                  <span className="card__count">
                    <img src={fiveRank} alt="Top ranking 1" />
                  </span>
                </div>
                <div className="card__info">
                  <div className="card__row">
                
                    <div className="vibes">
                      <img
                        src={overwhelmed}
                        alt="Overwhelmed"
                        className="vibes__icon"
                      />
                      <span className="vibes__text">Overwhelmed</span>
                    </div>
                    <div className="card__date">Nov 10-29</div>
                  </div>
                  <h3 className="card__title">
                    Swimming game for below 18 year kids
                  </h3>
                  <div className="card__price">1800 AED/person</div>
                </div>
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavouriteBottomRecomm;
