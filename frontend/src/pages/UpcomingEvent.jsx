import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const UpcomingEvent = () => {
  const [selectedButton, setSelectedButton] = useState(0);

  const handleButtonClick = (buttonIndex) => {
    setSelectedButton(buttonIndex);
  };

  const dummy = [
    {
      coverimg: "/images/holiday_0.png",
      rating: 5.0,
      reviews: 126,
      date: "Nov 10-29",
    },
    {
      coverimg: "/images/Event-Banner.png",
      rating: 5.0,
      reviews: 126,
      date: "Nov 10-29",
    },
    {
      coverimg: "/images/spa_0.png",
      rating: 5.0,
      reviews: 126,
      date: "Nov 10-29",
    },
    {
      coverimg: "/images/holiday_0.png",
      rating: 5.0,
      reviews: 126,
      date: "Nov 10-29",
    },
    {
      coverimg: "/images/Event-Banner.png",
      rating: 5.0,
      reviews: 126,
      date: "Nov 10-29",
    },
    {
      coverimg: "/images/holiday_0.png",
      rating: 5.0,
      reviews: 126,
      date: "Nov 10-29",
    },
    {
      coverimg: "/images/Event-Banner.png",
      rating: 5.0,
      reviews: 126,
      date: "Nov 10-29",
    },
    {
      coverimg: "/images/spa_0.png",
      rating: 5.0,
      reviews: 126,
      date: "Nov 10-29",
    },
    {
      coverimg: "/images/holiday_0.png",
      rating: 5.0,
      reviews: 126,
      date: "Nov 10-29",
    },
    {
      coverimg: "/images/Event-Banner.png",
      rating: 5.0,
      reviews: 126,
      date: "Nov 10-29",
    },
  ];

  return (
    <>
      <main classNameName="content event">
        <div classNameName="recommendations">
          <div classNameName="container">
            <h2 className="recommendations__title">Hey Charlie,</h2>
            <h3 className="recommendations__subtitle">
              Let's find something exiting for you.
            </h3>

            <button className="filter btn btn__black">Filters</button>

            <div className="filterWrap">
              <div className="filterWrap__title">
                Filters{" "}
                <button
                  className={selectedButton === 0 ? "selected" : ""}
                  onClick={() => handleButtonClick(0)}
                >
                  <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    width="122.881px"
                    height="122.88px"
                    viewBox="0 0 122.881 122.88"
                    enable-background="new 0 0 122.881 122.88"
                    space="preserve"
                  >
                    <g>
                      <path d="M61.44,0c16.966,0,32.326,6.877,43.445,17.996c11.119,11.118,17.996,26.479,17.996,43.444 c0,16.967-6.877,32.326-17.996,43.444C93.766,116.003,78.406,122.88,61.44,122.88c-16.966,0-32.326-6.877-43.444-17.996 C6.877,93.766,0,78.406,0,61.439c0-16.965,6.877-32.326,17.996-43.444C29.114,6.877,44.474,0,61.44,0L61.44,0z M80.16,37.369 c1.301-1.302,3.412-1.302,4.713,0c1.301,1.301,1.301,3.411,0,4.713L65.512,61.444l19.361,19.362c1.301,1.301,1.301,3.411,0,4.713 c-1.301,1.301-3.412,1.301-4.713,0L60.798,66.157L41.436,85.52c-1.301,1.301-3.412,1.301-4.713,0c-1.301-1.302-1.301-3.412,0-4.713 l19.363-19.362L36.723,42.082c-1.301-1.302-1.301-3.412,0-4.713c1.301-1.302,3.412-1.302,4.713,0l19.363,19.362L80.16,37.369 L80.16,37.369z M100.172,22.708C90.26,12.796,76.566,6.666,61.44,6.666c-15.126,0-28.819,6.13-38.731,16.042 C12.797,32.62,6.666,46.314,6.666,61.439c0,15.126,6.131,28.82,16.042,38.732c9.912,9.911,23.605,16.042,38.731,16.042 c15.126,0,28.82-6.131,38.732-16.042c9.912-9.912,16.043-23.606,16.043-38.732C116.215,46.314,110.084,32.62,100.172,22.708 L100.172,22.708z"></path>
                    </g>
                  </svg>
                </button>
              </div>
              <div className="filterWrap__content">
                <div className="schedule">
                  <div>
                    <div className="schedule__title">
                      What suits your schedules?
                    </div>
                    <div className="schedule__input">
                      <div className="schedule__input--fields datepicker">
                        <span className="icon icon-calendar"></span>
                        <input type="date" />
                      </div>
                      <div className="schedule__input--fields locationpicker">
                        <span className="icon icon-location"></span>
                        <input type="text" placeholder="Pick a location" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="schedule__title">
                      How far are you willing to travel?
                    </div>
                    <div className="time">
                      <ul className="time__list">
                        <li
                          className={`time__list--item ${
                            selectedButton === 1 ? "active" : ""
                          } `}
                          onClick={() => setSelectedButton(1)}
                        >
                          10 mins walking
                        </li>
                        <li
                          className={`time__list--item ${
                            selectedButton === 2 ? "active" : ""
                          } `}
                          onClick={() => setSelectedButton(2)}
                        >
                          20 mins walking
                        </li>
                        <li
                          className={`time__list--item ${
                            selectedButton === 3 ? "active" : ""
                          } `}
                          onClick={() => setSelectedButton(3)}
                        >
                          30 mins walking
                        </li>
                      </ul>

                      <ul className="time__list">
                        <li
                          className={`time__list--item ${
                            selectedButton === 4 ? "active" : ""
                          } `}
                          onClick={() => setSelectedButton(4)}
                        >
                          10 mins drive
                        </li>
                        <li
                          className={`time__list--item ${
                            selectedButton === 5 ? "active" : ""
                          } `}
                          onClick={() => setSelectedButton(5)}
                        >
                          20 mins drive
                        </li>
                        <li
                          className={`time__list--item ${
                            selectedButton === 6 ? "active" : ""
                          } `}
                          onClick={() => setSelectedButton(6)}
                        >
                          30 mins drive
                        </li>
                      </ul>

                      <ul className="time__list">
                        <li
                          className={`time__list--item ${
                            selectedButton === 7 ? "active" : ""
                          } `}
                          onClick={() => setSelectedButton(7)}
                        >
                          No limits
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="category">
                  <div className="category__title">
                    You can always filter out the events by category wise.
                  </div>
                  <ul className="category__list">
                    <li className="category__list--item">Stand Up Comedy</li>
                    <li className="category__list--item">RAMP Walk</li>
                    <li className="category__list--item">Box Cricket</li>
                    <li className="category__list--item">Swimming</li>
                    <li className="category__list--item active">
                      Golf Tournament
                    </li>
                    <li className="category__list--item">Singing</li>
                    <li className="category__list--item">Talks Shows</li>
                    <li className="category__list--item">Kite Surfing</li>
                    <li className="category__list--item">Book Exhibitions</li>
                  </ul>
                </div>
              </div>
              <div className="filterWrap__apply">
                <button className="btn closeFilter">Apply</button>
              </div>
            </div>

            <div className="card__grid">
              {dummy.map((item, i) => {
                return (
                  <>
                    <div className="card__item">
                      <Link className="card__link">
                        <div className="card__thumb">
                          <button className="card__fav">
                            <span className="icon-heart"></span>
                          </button>
                          <img
                            src={process.env.PUBLIC_URL + item.coverimg}
                            alt="event name"
                            className="card__img"
                          />
                        </div>
                        <div className="card__info">
                          <div className="card__row">
                            <div className="card__rating">
                              <span className="icon-star"></span>
                              {item.rating} ({item.reviews} reviews)
                            </div>
                            <div className="vibes">
                              <img
                                src={
                                  process.env.PUBLIC_URL +
                                  "/images/overwhelmed.svg"
                                }
                                alt="Overwhelmed"
                                className="vibes__icon"
                              />
                              <span className="vibes__text">Overwhelmed</span>
                            </div>
                            <div className="card__date">Nov 10-29</div>
                          </div>
                          <h3 className="card__title">Surfing at leasure</h3>
                          <div className="card__price">AED 1800 per person</div>
                        </div>
                      </Link>
                    </div>
                  </>
                );
              })}
            </div>
            <div className="recommendations__more">
              <button className="btn btn__black">Load more</button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default UpcomingEvent;
