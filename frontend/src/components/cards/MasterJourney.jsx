import React from 'react'
import eventImg from "../../assets/img/spa_0.png"

const MasterJourney = ({data}) => {
  return (
    <>
     <div className="card__item">
              <a href="#" className="card__link">
                <div className="card__thumb">
                  <img
                    src={eventImg}
                    alt="event name"
                    className="card__img"
                  />
                </div>
                <div className="card__info">
                  <h3 className="card__title">{data.title}</h3>
                  <div className="card__price">{data.no_of_guest_attended_event} guests attended this event</div>
                  <div className="card__date">on {data.event_date}</div>
                  <div className="card__row">
                    <div className="card__rating">
                      <span className="card__rating__txt"
                        ><span className="card__rating__txt"
                          >You rated this event</span
                        ></span
                      >
                      <span className="icon-star"></span>
                      <span className="icon-star"></span>
                      <span className="icon-star"></span>
                      <span className="icon-star"></span
                      ><span className="icon-star"></span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
    </>
  )
}

export default MasterJourney;
