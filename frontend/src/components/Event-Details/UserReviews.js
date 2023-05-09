import React, { Fragment } from "react";

const UserReviews = () => {
  return (
    <Fragment>
      {" "}
      <div class="container">
        <div class="eventAddReview__card">
          <div>
            <h2 class="eventAddReview__card--title">Hey Charlie,</h2>
            <p class="eventAddReview__card--subtitle">
              We are sure that you have enjoyed this event a lot. Would you like
              to share your feedback with us.
            </p>
            <p class="eventAddReview__card--subtitle">
              It helps us to improve and serve you better.
            </p>
          </div>
          <button class="btn__black" id="modalBtn">
            Add a review
          </button>
          The Modal
          <div id="modal" class="modal">
            Modal content
            <div class="modal-content">
              <div class="modal-header">
                <span class="close">
                  <img src="./assets/img/close.svg" alt="Close" />
                </span>
                <h2>Add a review</h2>
              </div>
              <div class="modal-body">
                <p>
                  Hi Charlie, If you're here on this page, we bet you enjoy this
                  event fully. Would you mind to share your valuable feedback
                  review with us?
                </p>
                <div class="modal-image">
                  <img src="./assets/img/vibe-o-meter.svg" alt="" />
                </div>
                <div class="card">
                  <div class="card__info">
                    <div class="card__info--image">
                      <img src="./assets/img/trending1.jpg" alt="" />
                    </div>
                    <div class="card__info--details">
                      <h4>Surfing at leasure</h4>
                      <p>Nov 10-29</p>
                    </div>
                  </div>
                  <div class="card__review">
                    <div class="rating"></div>
                    <div class="review">
                      <span>5.0</span>(23 reviews)
                    </div>
                  </div>
                </div>
                <div class="ratings__row">
                  <div class="ratings__row--item">
                    <div class="ratings--title">Quality of Event</div>
                    <div class="rating"></div>
                    <div class="star--rating">
                      <img
                        src="./assets/img/star-regular.svg"
                        alt="Star"
                        width="25px"
                      />
                      <img
                        src="./assets/img/star-regular.svg"
                        alt="Star"
                        width="25px"
                      />
                      <img
                        src="./assets/img/star-regular.svg"
                        alt="Star"
                        width="25px"
                      />
                      <img
                        src="./assets/img/star-regular.svg"
                        alt="Star"
                        width="25px"
                      />
                      <img
                        src="./assets/img/star-regular.svg"
                        alt="Star"
                        width="25px"
                      />
                    </div>
                  </div>
                  <div class="ratings__row--item">
                    <div class="ratings--title">Services at Event</div>
                    <div class="rating"></div>
                    <div class="star--rating">
                      <img
                        src="./assets/img/star-regular.svg"
                        alt="Star"
                        width="25px"
                      />
                      <img
                        src="./assets/img/star-regular.svg"
                        alt="Star"
                        width="25px"
                      />
                      <img
                        src="./assets/img/star-regular.svg"
                        alt="Star"
                        width="25px"
                      />
                      <img
                        src="./assets/img/star-regular.svg"
                        alt="Star"
                        width="25px"
                      />
                      <img
                        src="./assets/img/star-regular.svg"
                        alt="Star"
                        width="25px"
                      />
                    </div>
                  </div>
                </div>
                <div class="ratings__row">
                  <div class="ratings__row--item">
                    <div class="ratings--title">Facilities of Event</div>
                    <div class="rating"></div>
                    <div class="star--rating">
                      <img
                        src="./assets/img/star-regular.svg"
                        alt="Star"
                        width="25px"
                      />
                      <img
                        src="./assets/img/star-regular.svg"
                        alt="Star"
                        width="25px"
                      />
                      <img
                        src="./assets/img/star-regular.svg"
                        alt="Star"
                        width="25px"
                      />
                      <img
                        src="./assets/img/star-regular.svg"
                        alt="Star"
                        width="25px"
                      />
                      <img
                        src="./assets/img/star-regular.svg"
                        alt="Star"
                        width="25px"
                      />
                    </div>
                  </div>
                  <div class="ratings__row--item">
                    <div class="ratings--title">Operator of Event</div>
                    <div class="rating"></div>
                    <div class="star--rating">
                      <img
                        src="./assets/img/star-regular.svg"
                        alt="Star"
                        width="25px"
                      />
                      <img
                        src="./assets/img/star-regular.svg"
                        alt="Star"
                        width="25px"
                      />
                      <img
                        src="./assets/img/star-regular.svg"
                        alt="Star"
                        width="25px"
                      />
                      <img
                        src="./assets/img/star-regular.svg"
                        alt="Star"
                        width="25px"
                      />
                      <img
                        src="./assets/img/star-regular.svg"
                        alt="Star"
                        width="25px"
                      />
                    </div>
                  </div>
                </div>
                <div class="ratings__row">
                  <div class="ratings__row--item">
                    <div class="ratings--title">Staff Politeness</div>
                    <div class="rating"></div>
                    <div class="star--rating">
                      <img
                        src="./assets/img/star-regular.svg"
                        alt="Star"
                        width="25px"
                      />
                      <img
                        src="./assets/img/star-regular.svg"
                        alt="Star"
                        width="25px"
                      />
                      <img
                        src="./assets/img/star-regular.svg"
                        alt="Star"
                        width="25px"
                      />
                      <img
                        src="./assets/img/star-regular.svg"
                        alt="Star"
                        width="25px"
                      />
                      <img
                        src="./assets/img/star-regular.svg"
                        alt="Star"
                        width="25px"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <div class="form__group">
                  <textarea
                    name=""
                    id=""
                    rows="5"
                    placeholder="Share your feedback and suggestions about this event..."
                  ></textarea>
                </div>
                <button class="btn btn__black" id="submitBtn">
                  Submit
                </button>
              </div>
            </div>
          </div>
          <div id="meterModal" class="modal">
            <div class="modal-content">
              <div class="modal-header">
                <span class="meterModaClose close">
                  <img src="./assets/img/close.svg" alt="Close" />
                </span>
                <h2>Add a review</h2>
              </div>
              <div class="modal-body">
                <p>
                  Hi Charlie, If you're here on this page, we bet you enjoy this
                  event fully. Would you mind to share your valuable feedback
                  review with us?
                </p>
                <div class="modal-image">
                  <img src="./assets/img/vibe-o-meter.svg" alt="" />
                </div>
              </div>
              <div class="modal-footer">
                <div class="form__group">
                  <textarea
                    name=""
                    id=""
                    rows="5"
                    placeholder="Share your feedback and suggestions about this event..."
                  ></textarea>
                </div>
                <button class="btn btn__black">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default UserReviews;
