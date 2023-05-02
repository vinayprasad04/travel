import React from "react";
import { Link } from "react-router-dom";

import holiday_0 from "../../assets/img/holiday_0.png";
import rolce from "../../assets/img/rolce.png";
import trending2 from "../../assets/img/trending2.jpg";
import overwhelmed from "../../assets/img/overwhelmed.svg";
import oneRank from "../../assets/img/one.svg";
import twoRank from "../../assets/img/two.svg";
import threeRank from "../../assets/img/three.svg";
import fourRank from "../../assets/img/four.svg";
import fiveRank from "../../assets/img/five.svg";

const FavouriteBottomRecomm = () => {
  return (
    <div>
      <div className="trending mb-8">
        <div className="container">
          <h2 className="trending__title">
            Top 5 activities on this island today
          </h2>
          <div className="card__grid">
            <div className="card__item">
              <Link to="event-details.html" className="card__link">
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
                    {/* <!-- <div className="card__rating"><span className="icon-star"></span> 4.9 (123 reviews)</div> --> */}
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
              <Link to="event-details.html" className="card__link">
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
                    {/* <!-- <div className="card__rating"><span className="icon-star"></span> 4.9 (123 reviews)</div> --> */}
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
              <Link to="event-details.html" className="card__link">
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
                    {/* <!-- <div className="card__rating"><span className="icon-star"></span> 4.9 (123 reviews)</div> --> */}
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
              <Link to="event-details.html" className="card__link">
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
                    {/* <div className="card__rating"><span className="icon-star"></span> 4.9 (123 reviews)</div> */}
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
              <Link to="event-details.html" className="card__link">
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
                    {/* <div className="card__rating"><span className="icon-star"></span> 4.9 (123 reviews)</div> */}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavouriteBottomRecomm;
