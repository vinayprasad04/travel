import React, { useState } from "react";
import trending1 from "../../assets/img/trending1.jpg";
import VibeOmeter from "../../assets/img/vibe-o-meter.svg";

import InputStarRating from "./InputStarRating";
import ModalFooter from "./ModalFooter";
import ModalHeader from "./ModalHeader";
const ModalForm = () => {
  const [NextPage, setNextPage] = useState(false);

  const reviewSubmitHandler = () => {
    setNextPage(true);
  };

  return (
    <div id="modal" class="modal">
      {/* <!-- Modal content --> */}
      <div class="modal-content">
        <ModalHeader />
        <div class="modal-body">
          <p>
            Hi Charlie, If you're here on this page, we bet you enjoy this event
            fully. Would you mind to share your valuable feedback review with
            us?
          </p>
          {/* <!-- <div class="modal-image">
                        <img src="./assets/img/vibe-o-meter.svg" alt="">
                    </div> --> */}
          {NextPage ? (
            <div class="modal-image">
              <img src={VibeOmeter} alt="vibe" />
            </div>
          ) : (
            <>
              <div class="card">
                <div class="card__info">
                  <div class="card__info--image">
                    <img src={trending1} alt="" />
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
                  {/* <!-- <div class="rating"></div> --> */}
                  <InputStarRating />
                </div>
                <div class="ratings__row--item">
                  <div class="ratings--title">Services at Event</div>
                  {/* <!-- <div class="rating"></div> --> */}
                  <InputStarRating />
                </div>
              </div>
              <div class="ratings__row">
                <div class="ratings__row--item">
                  <div class="ratings--title">Facilities of Event</div>
                  {/* <!-- <div class="rating"></div> --> */}
                  <InputStarRating />
                </div>
                <div class="ratings__row--item">
                  <div class="ratings--title">Operator of Event</div>
                  {/* <!-- <div class="rating"></div> --> */}
                  <InputStarRating />
                </div>
              </div>
              <div class="ratings__row">
                <div class="ratings__row--item">
                  <div class="ratings--title">Staff Politeness</div>
                  {/* <!-- <div class="rating"></div> --> */}
                  <InputStarRating />
                </div>
              </div>
            </>
          )}
        </div>
        <ModalFooter />
      </div>
    </div>
  );
};

export default ModalForm;
