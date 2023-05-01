import React, { useState } from "react";
import trending1 from "../../assets/img/trending1.jpg";
import VibeOmeter from "../../assets/img/vibe-o-meter.svg";
import stars1 from "../../assets/img/star1.svg";
import InputStarRating from "./InputStarRating";

import ModalHeader from "./ModalHeader";
import { useDispatch, useSelector } from "react-redux";
const ModalForm = () => {
  const [NextPage, setNextPage] = useState(false);
  const dispatch = useDispatch();

  const stars = 5;
  const reviewDetails = useSelector((state) => state.modal);
  console.log("Review", reviewDetails);
  return (
    <div id="modal" className="modal">
      {/* <!-- Modal content --> */}
      <div className="modal-content">
        <ModalHeader />
        <div className="modal-body">
          <p>
            Hi Charlie, If you're here on this page, we bet you enjoy this event
            fully. Would you mind to share your valuable feedback review with
            us?
          </p>

          {NextPage ? (
            <div className="modal-image">
              <img src={VibeOmeter} alt="vibe" />
            </div>
          ) : (
            <>
              <div className="card">
                <div className="card__info">
                  <div className="card__info--image">
                    <img src={trending1} alt="" />
                  </div>
                  <div className="card__info--details">
                    <h4>Surfing at leasure</h4>
                    <p>Nov 10-29</p>
                  </div>
                </div>
                <div className="card__review">
                  <div style={{ marginTop: "3px" }}>
                    {[...Array(stars)].map((el, index) => {
                      return (
                        <img
                          key={index}
                          src={stars1}
                          width={15.6}
                          height={16}
                          alt="stars"
                        />
                      );
                    })}
                  </div>

                  <div className="review">
                    <span>5.0</span>(23 reviews)
                  </div>
                </div>
              </div>

              <div className="ratings__row">
                {reviewDetails.ratings.map((item) => {
                  return (
                    <div key={item.id} className="ratings__row--item">
                      <div className="ratings--title">{item.name}</div>
                      <InputStarRating id={item.id} />
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="modal-footer">
          <div className="form__group">
            <textarea
              name=""
              id=""
              rows="5"
              onChange={(e) => dispatch(e.target.value)}
              placeholder="Share your feedback and suggestions about this event..."
            ></textarea>
          </div>
          <button
            onClick={() => setNextPage(true)}
            className="btn btn__black"
            id="submitBtn"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalForm;
