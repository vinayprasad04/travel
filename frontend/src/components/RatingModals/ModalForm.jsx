import React, { useEffect, useState } from "react";
import trending1 from "../../assets/img/trending1.jpg";
import stars1 from "../../assets/img/star1.svg";
import InputStarRating from "./InputStarRating";
import boredom from "../../assets/img/anger.svg";
import anger from "../../assets/img/anger.svg";
import disappointed from "../../assets/img/disappointed.svg";
import appreciation from "../../assets/img/appreciation.svg";
import joy from "../../assets/img/joy.svg";
import overwhelemed from "../../assets/img/overwhelmed.svg";
import ModalHeader from "./ModalHeader";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import GaugeMeter from "./GaugeMeter";
import { useNavigate } from "react-router-dom";

const ModalForm = () => {
  const [NextPage, setNextPage] = useState(false);
  const [comment, setComment] = useState("");
  const [ratingData, setRatingData] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const n = 5;
  const { comments, ratings } = useSelector((state) => state.modal);

  const ratingChangeHandler = (data) => {
    const copy = [...ratingData, data];
    setRatingData(copy);
  };

  const SubmitHandler = () => {
    if (NextPage) {
      navigate("/");

      dispatch({ type: "addComment", payload: comment });
      dispatch({ type: "addRating", payload: ratingData });
    } else {
      setNextPage(!NextPage);
    }
  };

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
            // Vibe-O-meter
            <div className="vibe-meter modal-image">
              <GaugeMeter ratings={ratingData} />
            </div>
          ) : (
            <>
              <div className="card">
                <div className="card__info">
                  <div className="card__info--image">
                    <img src={trending1} alt="trending1" />
                  </div>
                  <div className="card__info--details">
                    <h4>Surfing at leasure</h4>
                    <p>Nov 10-29</p>
                  </div>
                </div>
                <div className="card__review">
                  <div style={{ marginTop: "3px" }}>
                    {[...Array(n)].map((el, index) => {
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
                {ratings?.map((item) => {
                  return (
                    <div key={item.id} className="ratings__row--item">
                      <div className="ratings--title">{item.name}</div>
                      <InputStarRating
                        id={item.id}
                        name={item.name}
                        valueChange={(data) => ratingChangeHandler(data)}
                      />
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
              name="comment"
              rows="5"
              onChange={(e) => setComment(e.target.value)}
              placeholder="Share your feedback and suggestions about this event..."
            ></textarea>
          </div>
          <button
            onClick={() => SubmitHandler()}
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
