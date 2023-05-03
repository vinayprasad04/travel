import { Rating } from "react-simple-star-rating";
import { ratingData } from "../../DummyText";

const RatingCard = () => {
  return (
    <>
      {ratingData &&
        ratingData?.map((item, i) => (
          <div className="swiper-slide" key={i}>
            <a href="#" className="recSlider__link">
              <div className="recSlider__profile">
                <img
                  src={item.userPic}
                  alt="event title"
                  className="recSlider__profile--image"
                />
                <div className="recSlider__profile--info">
                  <h4>{item.userName}</h4>
                  <span>{item.date}</span>
                </div>
              </div>
              <div className="recSlider__info">
                <div className="recSlider__info__description">
                  {item.ratingDescription}
                </div>
                <div className="recSlider__info__row">
                  <div className="recSlider__info__rating">
                    <div className="rating">
                      <Rating
                        initialValue={item.starValue}
                        size={20}
                        readonly={true}
                      />
                    </div>
                    <div className="review">{item.rating}</div>
                  </div>
                </div>
              </div>
              <button className="recSlider__button">Read more</button>
            </a>
          </div>
        ))}
    </>
  );
};

export default RatingCard;
