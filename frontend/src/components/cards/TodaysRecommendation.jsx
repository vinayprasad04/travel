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
 
<div className="card__item">
              <a href="#" className="card__link">
                <div className="card__thumb">
                  <button className="card__fav">
                    <span className="icon-heart"></span>
                  </button>
                  <img
                    src={p.data.eventImage}
                    alt="event name"
                    className="card__img"
                  />
                  <span className="card__count"
                    ><img src={imgSvg} alt="Top ranking 1"
                  /></span>
                </div>
                <div className="card__info">
                  <div className="card__row">
                    <div className="vibes">
                      <img
                        src={overwhelmedImg}
                        alt="Overwhelmed"
                        className="vibes__icon"
                      />
                      <span className="vibes__text">Overwhelmed</span>
                    </div>
                    <div className="card__date">{p.data.date}</div>
                  </div>
                  <h3 className="card__title">{p.data.title}</h3>
                  <div className="card__price">{p.data.price} AED/person</div>
                </div>
              </a>
            </div>
      </>
     )
   }
   
   export default TodaysRecommendation