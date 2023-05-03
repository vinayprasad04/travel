import React from "react";
import "../../assets/scss/_dashboard.scss";
import { Link, useNavigate } from "react-router-dom";
import overwhelmedImg from "../../assets/img/overwhelmed.svg";
import { AddtoFav } from "../../redux/actions/favoriteAction";
import swal from "sweetalert";
import { useDispatch, useSelector } from "react-redux";

const TodaysRecommendation = ({ data, i }) => {
  const { fav } = useSelector((state) => state.users);

  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const handleFav = async (id) => {
    try {
      if (fav?.find((u) => u.id === id)) {
        Navigate("/favorites");
        return swal("error", "Event Already Added", "error");
      }
      const token = localStorage.getItem("token");
      const fav1 = await AddtoFav(id, token);
      if (fav1?.data.data) {
        swal("Success", "Event Added Successfully", "success");
        dispatch({ type: "addToFav", payload: fav1?.data.data.fav });
        Navigate("/favorites");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="card__item">
        <div className="card__thumb">
          <button className="card__fav" onClick={() => handleFav(data.id)}>
            <span className="icon-heart"></span>
          </button>
          <Link to={`/event-details/${data.id}`} className="card__link">
            <img
              src={`https://cdn.firsttry.live/${data.images[0].url}`}
              alt="event name"
              className="card__img"
            />

            <span
              className="card__count"
              style={{
                fontSize: "10rem",
                textBorder: "1px solid white",
                color: "rgba(255,255,255,0.8",
                fontWeight: "bolder",
              }}
            >
              {i + 1}
            </span>
          </Link>
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
            <div className="card__date">{}</div>
          </div>
          <h3 className="card__title">{data.title}</h3>
          <div className="card__price">{2000} AED/person</div>
        </div>
      </div>
    </>
  );
};

export default TodaysRecommendation;
