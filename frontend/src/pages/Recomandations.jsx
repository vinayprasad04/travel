import React, { useEffect, useState } from "react";
import Countdown from "react-countdown";
import { useSelector } from "react-redux";
import DataReader from "../components/DateRender";
import "swiper/css/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import { DisplayEvent } from "../redux/action";
const Recomandations = () => {
  const { user } = useSelector((state) => state.users);
  const [events, setEvents] = useState();

  const getEvents = async () => {
    try {
      const res = await DisplayEvent();
      if (res?.data.data) {
        setEvents(res?.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getEvents();
  }, []);

  return (
    <main class="content home recommendation--page">
      <div class="recommendations">
        <div class="container">
          <h2 class="recommendations__title">Hey {user?.data.name},</h2>
          <div class="recommendations__subtitle">
            <h3>
              Due to some bad weather your "Golf Tournament" event has been
              cancelled.
            </h3>
            <h3>
              {" "}
              We have a similar event for you, starting just in an hour and 5
              minutes drive away.
            </h3>
          </div>
        </div>
      </div>

      <div class="banner">
        <div class="container">
          <div class=" mainbanner">
            {/* <!-- Additional required wrapper --> */}
            <Swiper
              slidesPerView={"auto"}
              spaceBetween={30}
              parallax={true}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
            >
              <div class="swiper-wrapper">
                {/* <!-- Slides --> */}
                {events?.map((ev) => {
                  const date1 = new Date(ev?.eventstartdate).getTime();
                  const date2 = new Date();
                  const diffTime = Math.abs(date1 - date2);
                  return (
                    <SwiperSlide className="swiper-slide" key={ev?.id}>
                      <img
                        src={`https://cdn.firsttry.live/${ev.images[1].url}`}
                        alt="event title"
                      />
                      <div class="banner__info">
                        <h2 class="banner__info__title">
                          <br />
                          {ev?.title}
                        </h2>
                        <div class="banner__info__location">{ev?.location}</div>
                        <div class="banner__info__date">
                          {new Date(ev?.eventstartdate).toDateString()} at{" "}
                          {new Date(ev?.eventstartdate)
                            .toTimeString()
                            .substring(9, 0)}
                        </div>
                        <div class="banner__info__countdown">
                          {/* <div class="counter" data-date="2023-1-1 00:00:00"></div> */}
                          <Countdown
                            date={Date.now() + diffTime}
                            renderer={DataReader}
                          />
                        </div>
                        <div class="banner__info__link">
                          <a href="#">Yes, I am in</a>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </div>
            </Swiper>

            <div class="swiper-buttons">
              <div class="swiper-button-prev"></div>
              <div class="swiper-button-next"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="recommendations">
        <div class="container">
          <h2 class="recommendations__title">
            Some similar recommendation for you, {user?.data.name}.
          </h2>

          <div class="schedule">
            <div class="time">
              <ul class="time__list">
                <li class="time__list--item">10 mins walking</li>
                <li class="time__list--item active">20 mins walking</li>
                <li class="time__list--item">30 mins walking</li>
              </ul>

              <ul class="time__list">
                <li class="time__list--item">10 mins drive</li>
                <li class="time__list--item active">20 mins drive</li>
                <li class="time__list--item">30 mins drive</li>
              </ul>

              <ul class="time__list">
                <li class="time__list--item border-rounded">No limits</li>
              </ul>
            </div>
          </div>

          <div class="card__grid"></div>
        </div>
      </div>
    </main>
  );
};

export default Recomandations;
