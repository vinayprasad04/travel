import React, { useEffect, useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { CircularProgress } from "@mui/material";
import Swal from "sweetalert2";

const EventReserveForm = () => {
  const [cardDate, setCardDate] = useState({});
  const [cardDetails, setCardDetails] = useState({});
  const [load, setLoad] = useState(false);

  const handleCardDate = (date, name) => {
    setCardDate({ ...cardDate, [name]: date });
  };

  const handleOtherDetails = (e, name) => {
    setCardDetails({ ...cardDetails, [name]: e.target.value });
  };

  const handleClick = (e) => {
    e.preventDefault();
    setLoad(true);
    setTimeout(() => {
      setLoad(false);
      Swal.fire({
        icon: "success",
        title: "Seats Reserved!",
      });
    }, 1000);
  };

  let cost = cardDetails?.optionsIs?.split(" ")?.[0] * 1800;

  useEffect(() => {
    console.log(cardDetails?.optionsIs?.split(" ")?.[0], "new");
  }, [cardDetails]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="eventReserve__grid--col">
        <div className="eventReserve__form">
          <form action="">
            <div className="eventReserve__form--title">
              AED 1800 <span>per person</span>
            </div>
            <div className="eventReserve__form--date"></div>
            <div className="form__flex--row">
              <div className="s-form-floating">
                <DatePicker
                  name="From"
                  label="From"
                  value={cardDate}
                  defaultValue={dayjs("2022-11-20")}
                  onChange={(e) => {
                    handleCardDate(e, "From");
                  }}
                />
              </div>
              <div className="s-form-floating">
                <DatePicker
                  name="To"
                  label="To"
                  value={cardDate}
                  defaultValue={dayjs("2022-11-29")}
                  onChange={(e) => {
                    handleCardDate(e, "To");
                  }}
                />
              </div>
            </div>
            <div className="s-form-floating" style={{ marginTop: "-1px" }}>
              <select
                name="optionsIs"
                className="s-form-select"
                id="floatingSelectGrid"
                aria-label="Floating label select example"
                onChange={(e) => {
                  handleOtherDetails(e, "optionsIs");
                }}
              >
                <option value={cardDetails.optionIs}>1 adult</option>
                <option value={cardDetails.optionIs}>2 adult</option>
                <option value={cardDetails.optionIs}>3 adult</option>
                <option value={cardDetails.optionIs}>4 adult</option>
              </select>
              <label for="floatingSelectGrid">Guests</label>
            </div>
            <div className="eventReserve__form--seats">
              172 Seats still available
            </div>

            <button className="btn btn__black" onClick={handleClick}>
              {load ? <CircularProgress /> : " Reserve my seats"}
            </button>

            <ul className="guests__list">
              <li className="guests__list--item">
                <div className="guests">
                  {cardDetails?.optionsIs?.split(" ")?.[0]
                    ? ` 1800 x ${cardDetails?.optionsIs?.split(" ")?.[0]}`
                    : ""}
                </div>
                <div className="price">
                  {" "}
                  {cardDetails?.optionsIs?.split(" ")?.[0]
                    ? ` 1800 x ${cardDetails?.optionsIs?.split(" ")?.[0]}`
                    : ""}
                </div>
              </li>
              <li className="guests__list--item">
                <div className="guests">600 x 0 children</div>
                <div className="price">0</div>
              </li>
            </ul>
            <div className="total">
              <div className="total__title">Total</div>
              <div className="total__price">
                {cost ? `AED ${cost}` : `AED 1800`}
              </div>
            </div>
          </form>

          <a href="#" className="eventReserve__form--help">
            Need help?
          </a>
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default EventReserveForm;
