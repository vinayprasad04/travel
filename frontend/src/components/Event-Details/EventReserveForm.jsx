import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const EventReserveForm = () => {
  return (
    <Fragment>
      <div className="eventReserve__grid--col">
        <div className="eventReserve__form">
          <form action="">
            <div className="eventReserve__form--title">
              AED 1800 <span>per person</span>
            </div>
            <div className="eventReserve__form--date"></div>
            <div className="form__flex--row">
              <div className="s-form-floating">
                <input
                  type="text"
                  value="Nov 10, 2022"
                  readonly
                  className="s-form-control"
                  id="floatingFromInput"
                />
                <label for="floatingFromInput">From</label>
              </div>
              <div className="s-form-floating">
                <input
                  type="text"
                  value="Nov 29, 2022"
                  readonly
                  className="s-form-control"
                  id="floatingToInput"
                />
                <label for="floatingToInput">To</label>
              </div>
            </div>
            <div className="s-form-floating" style={{ marginTop: "-1px" }}>
              <select
                className="s-form-select"
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
            <div className="eventReserve__form--seats">
              172 Seats still available
            </div>
            <button className="btn btn__black">Reserve my seats</button>
            <ul className="guests__list">
              <li className="guests__list--item">
                <div className="guests">1800 x 1 adult</div>
                <div className="price">1800</div>
              </li>
              <li className="guests__list--item">
                <div className="guests">600 x 0 children</div>
                <div className="price">0</div>
              </li>
            </ul>
            <div className="total">
              <div className="total__title">Total</div>
              <div className="total__price">AED 1800</div>
            </div>
          </form>

          <Link to="/" className="eventReserve__form--help">
            Need help?
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default EventReserveForm;
