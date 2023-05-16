import React from "react";
import { useDispatch, useSelector } from "react-redux";

import banner from "../assets/img/banner.jpg";

import CircularTimer from "../components/timer/CircularTimer";

import RescheduleModal from "../components/RescheduleModal";
import { RescheduleVisible } from "../redux/features/RescheduleForm";

const Recommendations = () => {
  const dispatch = useDispatch();
  const showModalForm = useSelector((state) => state.rescheduleForm.visible);
  const bannerImg = useSelector((state) => state.events.data.eventCancelled);

  const d = new Date(bannerImg[0]?.starts);

  return (
    <main className="content home recommendation--page">
      {showModalForm && <RescheduleModal />}
      <div className="banner">
        <div className="container">
          <div className=" mainbanner">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <img
                  className="banner_img"
                  src={bannerImg ? `${bannerImg[0]?.img}` : banner}
                  alt="event title"
                />
                <div className="banner__info">
                  <h2 className="banner__info__title">
                    {bannerImg[0]?.title} || title
                  </h2>
                  <div className="banner__info__location">
                    Jumeirah Palm Beach, Dubai
                  </div>
                  <div className="banner__info__date">
                    {d.toLocaleString("default", { month: "short" })}{" "}
                    {d.getDate()}, {d.getFullYear()} at {d.toLocaleTimeString()}
                  </div>
                  <div className="banner__info__countdown">
                    <div
                      className="counter"
                      data-date="2023-1-1 00:00:00"
                    ></div>
                  </div>

                  <CircularTimer />
                  <div className="banner__info__link">
                    <button
                      onClick={() => dispatch(RescheduleVisible())}
                      className="btn btn__black"
                      href="#"
                    >
                      {bannerImg[0] ? "Reschedule" : "Yes I am in !"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card__grid"></div>
    </main>
  );
};

export default Recommendations;
