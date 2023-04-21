import React, { Fragment } from 'react'
import eventImage from "../../assets/img/Image118.jpg"

const EventImage = () => {
  return (
    <Fragment> <div class="eventDetails__grid">
    <div class="eventDetails__grid--col grid__box">
      <div class="grid__box--sm">
        <img
          src={eventImage}
          alt=""
          class="grid__image border__rounded--topLeft"
        />
      </div>
      <div class="grid__box--sm">
        <img
         src={eventImage}
          alt=""
          class="grid__image"
        />
      </div>
      <div class="grid__box--sm">
        <img
          src={eventImage}
          alt=""
          class="grid__image border__rounded--bottomLeft"
        />
      </div>
      <div class="grid__box--sm">
        <img
          src={eventImage}
          alt=""
          class="grid__image"
        />
      </div>
    </div>
    <div class="eventDetails__grid--col">
      <img
       src={eventImage}
        alt=""
        class="grid__image border__rounded--topRight border__rounded--bottomRight"
      />
    </div>

    <div class="status scheduled">Scheduled</div>
    <button class="btn__white">Show all</button>
  </div></Fragment>
  )
}

export default EventImage