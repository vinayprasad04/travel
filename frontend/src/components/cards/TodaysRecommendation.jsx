   import React from 'react'
   import '../../assets/scss/_dashboard.scss'
   //import img from "../../assets/img/spa_0.png"
   import imgSvg from "../../assets/img/one.svg"
   import overwhelmedImg from  "../../assets/img/overwhelmed.svg"
   


   
   const TodaysRecommendation = (p) => {
    // {
    //     id:1,
    //     eventImage:'../../assets/img/overwhelmed.svg',
    //     eventImageSvg : "../../assets/img/one.svg",
    //     eventOverwhelmedImg: "../../assets/img/overwhelmed.svg",
    //     date:'Nov 29',
    //     title:'Surfing at leasure',
    //     price:1100


    // }
     return (
      <>
 
<div class="card__item">
              <a href="#" class="card__link">
                <div class="card__thumb">
                  <button class="card__fav">
                    <span class="icon-heart"></span>
                  </button>
                  <img
                    src={p.data.eventImage}
                    alt="event name"
                    class="card__img"
                  />
                  <span class="card__count"
                    ><img src={imgSvg} alt="Top ranking 1"
                  /></span>
                </div>
                <div class="card__info">
                  <div class="card__row">
                    <div class="vibes">
                      <img
                        src={overwhelmedImg}
                        alt="Overwhelmed"
                        class="vibes__icon"
                      />
                      <span class="vibes__text">Overwhelmed</span>
                    </div>
                    <div class="card__date">{p.data.date}</div>
                  </div>
                  <h3 class="card__title">{p.data.title}</h3>
                  <div class="card__price">{p.data.price} AED/person</div>
                </div>
              </a>
            </div>
      </>
     )
   }
   
   export default TodaysRecommendation