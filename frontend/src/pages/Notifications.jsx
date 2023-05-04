import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ModalForm from "../components/RatingModals/ModalForm";

const Notifications = () => {
  const { user } = useSelector((state) => state.users);
  const modal = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  const handleOpen = () => {
    dispatch({ type: "displayModal" });
  };

  return (
    <main className="content">
      <div className="notification">
        <div className="container">
          <h2 className="notification__title">
            Good morning {user?.data.name}!
          </h2>
          <div className="notification__subtitle">
            Here are the notifications that you have received so far.
          </div>
          <div className="row">
            {}
            <div className="col_md_2">
              <div className="notification__date">
                <ul className="date__list">
                  <li className="date__list--item">
                    <div className="date">Nov 5</div>
                    <span className="circle-mark"></span>
                  </li>
                  <li className="date__list--item">
                    <div className="date">Nov 5</div>
                    <span className="circle-mark"></span>
                  </li>
                  <li className="date__list--item">
                    <div className="date">Nov 5</div>
                    <span className="circle-mark"></span>
                  </li>
                  <li className="date__list--item">
                    <div className="date">Nov 5</div>
                    <span className="circle-mark"></span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col_sm_12 col_md_10">
              <div className="notification__content">
                <ul className="notification__list">
                  <li className="notification__list--item">
                    <div className="notification__info">
                      <div className="image--wrapper">
                        <img
                          src="./assets/img/Product1.png"
                          alt=""
                          width="100px"
                          height="100px"
                        />
                      </div>
                      <div className="content--wrapper">
                        <div className="title">
                          We have added a new activity for you.
                        </div>
                        <div className="subtitle">Surfing at leasure</div>
                        <div className="details">AED 1800 per person</div>
                        <div className="details">Nov 10-29</div>
                      </div>
                    </div>
                    <button className="btn__transparent">View event</button>
                  </li>
                  <li className="notification__list--item">
                    <div className="notification__info">
                      <div className="image--wrapper">
                        <img
                          src="./assets/img/Product1.png"
                          alt=""
                          width="100px"
                          height="100px"
                        />
                      </div>
                      <div className="content--wrapper">
                        <div className="title">Congratulations Charlie!</div>
                        <div className="details">
                          You have completed event "Surfing at leasure". Hope
                          you have enjoyed the activity. Please do share your
                          valuable feedback with us to improve and serve you the
                          best.
                        </div>
                      </div>
                    </div>
                    <button className="btn__transparent">Add a review</button>
                  </li>
                  <li className="notification__list--item">
                    <div className="notification__info">
                      <div className="image--wrapper">
                        <img src="" alt="" width="100px" height="100px" />
                        <span>UG</span>
                      </div>
                      <div className="content--wrapper">
                        <div className="title">
                          We have added a new activity for you.
                        </div>
                        <div className="subtitle">Surfing at leasure</div>
                        <div className="details">AED 1800 per person</div>
                        <div className="details">Nov 10-29</div>
                      </div>
                    </div>
                    <button className="btn__transparent">
                      Go to home page
                    </button>
                  </li>
                  <li className="notification__list--item">
                    <div className="notification__info">
                      <div className="image--wrapper">
                        <img
                          src="./assets/img/Product1.png"
                          alt=""
                          width="100px"
                          height="100px"
                        />
                      </div>
                      <div className="content--wrapper">
                        <div className="title">Congratulations Charlie!</div>
                        <div className="details">
                          You have completed event "Surfing at leasure". Hope
                          you have enjoyed the activity. Please do share your
                          valuable feedback with us to improve and serve you the
                          best.
                        </div>
                      </div>
                    </div>
                    <button className="btn__transparent" onClick={handleOpen}>
                      Add a review
                    </button>
                    {modal?.display ? <ModalForm /> : ""}
                  </li>
                </ul>

                <button className="btn btn__black">Load more</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Notifications;
