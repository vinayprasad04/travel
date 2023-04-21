import React, { useEffect } from "react";
import { swiperHandle } from "../assets/js/swiper-handle.js";
import "../assets/scss/index.css";
import "../assets/scss/swiper-bundle.min.css";
import RatingCard from "../components/Event-Details/RatingCard.jsx";
import EventRecommendation from "../components/Event-Details/EventRecommendation.jsx";
import EventImage from "../components/Event-Details/EventImage.jsx";

const EventDetails = () => {
  useEffect(() => {
    swiperHandle();
  }, []);

  return (
    <div>
      <main class="content event">
        <div class="eventDetails">
          <div class="container">
            <h2 class="eventDetails__title">Surfing at leasure</h2>
            <div class="eventDetails__review">
              <div class="rating"></div>
              <div class="review">
                5.0 <span>23 reviews</span>
              </div>
              <div class="location">Sindalah City, Dubai</div>
            </div>
            <EventImage />
          </div>
        </div>

        <div class="eventReserve">
          <div class="container">
            <div class="eventReserve__grid">
              <div class="eventReserve__grid--col">
                <div class="event__meter">
                  <h4 class="event__reserve--title">
                    Vibe-o-meter of the event
                  </h4>
                  <ul class="emotions__list">
                    <li class="emotions__list--item active">
                      <div class="emotion overwhelmed"></div>
                      <img
                        src="./assets/img/overwhelmed.svg"
                        alt=""
                        width="52"
                        height="52px"
                      />
                    </li>
                    <li class="emotions__list--item">
                      <div class="emotion joy"></div>
                      <img
                        src="./assets/img/joy.svg"
                        alt=""
                        width="52"
                        height="52px"
                      />
                    </li>
                    <li class="emotions__list--item">
                      <div class="emotion appreciation"></div>
                      <img
                        src="./assets/img/appreciation.svg"
                        alt=""
                        width="52"
                        height="52px"
                      />
                    </li>
                    <li class="emotions__list--item">
                      <div class="emotion boredom"></div>
                      <img
                        src="./assets/img/boredom.svg"
                        alt=""
                        width="52"
                        height="52px"
                      />
                    </li>
                    <li class="emotions__list--item">
                      <div class="emotion disappointed"></div>
                      <img
                        src="./assets/img/disappointed.svg"
                        alt=""
                        width="52"
                        height="52px"
                      />
                    </li>
                    <li class="emotions__list--item">
                      <div class="emotion anger"></div>
                      <img
                        src="./assets/img/anger.svg"
                        alt=""
                        width="52"
                        height="52px"
                      />
                    </li>
                  </ul>
                </div>
                <div class="event__description">
                  <h4 class="event__reserve--title">About the event</h4>
                  <ul class="event__description--list">
                    <li class="event__description--list-item">
                      <div class="icon icon-category"></div>
                      <div class="description-details">
                        <h5>Golf</h5>
                        <p>
                          This is one of the many events comes under the Golf
                          category.
                        </p>
                      </div>
                    </li>
                    <li class="event__description--list-item">
                      <div class="icon icon-location"></div>
                      <div class="description-details">
                        <h5>Great location</h5>
                        <p>
                          This is one of the many events comes under the Golf
                          category.
                        </p>
                      </div>
                    </li>
                    <li class="event__description--list-item">
                      <div class="icon">
                        <img src="./assets/img/overwhelmed.svg" alt="" />
                      </div>
                      <div class="description-details">
                        <h5>Overwhelmed experience</h5>
                        <p>
                          This event has a rating of 5.0 that make this event
                          overwhelmed.
                        </p>
                      </div>
                    </li>
                  </ul>
                  <div class="event__description--content">
                    <p>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua. At vero eos et
                      accusam et justo duo dolores et ea rebum. Stet clita kasd
                      gubergren, no sea takimata sanctus est Lorem ipsum dolor
                      sit amet. Lorem ipsum dolor sit amet, consetetur
                      sadipscing elit.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua. At vero eos et
                      accusam et justo duo dolores et ea rebum. Stet clita kasd
                      gubergren, no sea takimata sanctus est Lorem ipsum dolor
                      sit amet. Lorem ipsum dolor sit amet, consetetur
                      sadipscing elit.
                    </p>
                  </div>
                </div>
                <div class="event__review">
                  <h4 class="event__reserve--title">Operated by River Stone</h4>
                  <div class="event__review--row">
                    <div class="rating"></div>
                    <div class="review">4.9</div>
                  </div>
                  <div class="event__description--content">
                    <p>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua. At vero eos et
                      accusam et justo duo dolores et ea rebum. Stet clita kasd
                      gubergren, no sea takimata sanctus est Lorem ipsum dolor
                      sit amet. Lorem ipsum dolor sit amet, consetetur
                      sadipscing elit.
                    </p>
                  </div>
                </div>
              </div>
              <div class="eventReserve__grid--col">
                <div class="eventReserve__form">
                  <form action="">
                    <div class="eventReserve__form--title">
                      AED 1800 <span>per person</span>
                    </div>
                    <div class="eventReserve__form--date"></div>
                    <div class="form__flex--row">
                      <div class="s-form-floating">
                        <input
                          type="text"
                          value="Nov 10, 2022"
                          readonly
                          class="s-form-control"
                          id="floatingFromInput"
                        />
                        <label for="floatingFromInput">From</label>
                      </div>
                      <div class="s-form-floating">
                        <input
                          type="text"
                          value="Nov 29, 2022"
                          readonly
                          class="s-form-control"
                          id="floatingToInput"
                        />
                        <label for="floatingToInput">To</label>
                      </div>
                    </div>
                    <div class="s-form-floating" style={{ marginTop: "-1px" }}>
                      <select
                        class="s-form-select"
                        id="floatingSelectGrid"
                        aria-label="Floating label select example"
                      >
                        <option value="0">1 adult</option>
                        <option value="1">2 adult</option>
                        <option value="2">3 adult</option>
                        <option value="3">4 adult</option>
                      </select>
                      <label for="floatingSelectGrid">Guests</label>
                    </div>
                    <div class="eventReserve__form--seats">
                      172 Seats still available
                    </div>
                    <button class="btn btn__black">Reserve my seats</button>
                    <ul class="guests__list">
                      <li class="guests__list--item">
                        <div class="guests">1800 x 1 adult</div>
                        <div class="price">1800</div>
                      </li>
                      <li class="guests__list--item">
                        <div class="guests">600 x 0 children</div>
                        <div class="price">0</div>
                      </li>
                    </ul>
                    <div class="total">
                      <div class="total__title">Total</div>
                      <div class="total__price">AED 1800</div>
                    </div>
                  </form>

                  <a href="#" class="eventReserve__form--help">
                    Need help?
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 
<!-- Recommendations --> */}
        <div class="recSlider recSlider--ratingCards">
          <div class="swiper tailored">
            <div class="swiper-wrapper">
              <RatingCard />
            </div>

            <div class="swiper-buttons">
              <div class="swiper-button-prev"></div>
              <div class="swiper-button-next"></div>
            </div>
          </div>
        </div>

        {/* <!-- Some other recommendations --> */}
        <div class="recommendations event--recommendations">
          <div class="container">
            <h2 class="recommendations__title">
              Some more recommendations for you, Charlie!
            </h2>
            <div class="card__grid">
              <EventRecommendation />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default EventDetails;
