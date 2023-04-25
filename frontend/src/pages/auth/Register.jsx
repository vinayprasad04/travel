import React, { useEffect, useState } from "react";
import img1 from "../../assets/img/music.png";
import { Registers, getCategories } from "../../redux/action";
import { DatePicker } from "antd";
import "../../assets/scss/login.scss";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [cat, setCat] = useState();
  const [array, setArray] = useState([]);
  const [state, setState] = useState({});
  const [image, setImage] = useState();
  const [dob, setDob] = useState("");
  const [loading, setLoading] = useState(false);

  const Navigate = useNavigate();

  const handleChange = (e, name) => {
    setState({ ...state, [name]: e.target.value });
  };

  const addOrRemoveItemFromArray = (item) => {
    if (array.includes(item)) {
      setArray((prevState) =>
        prevState.filter((existing) => existing !== item)
      );
    } else {
      setArray((prevState) => [item, ...prevState.slice(0, 2)]);
    }
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const myForm = new FormData();
      myForm.append("name", state.name);
      myForm.append("email", state.email);
      myForm.append("password", state.password);
      myForm.append("dob", dob);
      myForm.append("contact", state.contact);
      myForm.append("category", JSON.stringify(array));
      myForm.append("image", image);

      const data = await Registers(myForm);

      if (data?.data.data) {
        localStorage.setItem("token", data?.data.token);
        swal("Success!", data?.data.message, "success");
        console.log(data);
        setLoading(false);
        Navigate("/");
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const getCategory = async () => {
    try {
      const data = await getCategories();
      setCat(data?.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCategory();
  }, []);

  console.log(array);
  return (
    <main className="content">
      <div className="profile">
        <div className="container">
          <div className="profile__page userPreferences">
            <h2 className="profile__title">
              {loading ? "Loading...." : "Register"}
            </h2>
            <div className="profile__edit">
              <div className="profile__list">
                <div className="profile__list--item active">
                  <div className="profile__info">
                    <div className="profile__image">
                      <div className="profile__image--abstract"></div>
                      <div className="profile__main--image">
                        <img src={img1} alt="" />
                      </div>
                      <div className="profile__image--overlay"></div>
                      <div
                        className="profile__icon"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <input
                          type="file"
                          style={{ width: "100%", height: "100%" }}
                          accept="image/*"
                          onChange={(e) => setImage(e.target.files[0])}
                        />

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="27.232"
                          height="26"
                          viewBox="0 0 27.232 26"
                        >
                          <g
                            id="Icon_feather-edit-3"
                            data-name="Icon feather-edit-3"
                            transform="translate(-3.5 -3.318)"
                          >
                            <path
                              id="Path_25"
                              data-name="Path 25"
                              d="M18,30H31.5"
                              transform="translate(-1.768 -1.682)"
                              fill="none"
                              stroke="#fff"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                            />
                            <path
                              id="Path_26"
                              data-name="Path 26"
                              d="M23.356,5.189a2.968,2.968,0,0,1,4.19,4.205L10.087,26.916,4.5,28.318l1.4-5.607Z"
                              transform="translate(0 0)"
                              fill="none"
                              stroke="#fff"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                            />
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="profile__content">
                <div className="form__group">
                  <label className="form__label">
                    What should we call you?
                  </label>
                  <input
                    value={state.name || ""}
                    onChange={(e) => handleChange(e, "name")}
                    type="text"
                    className="form__input"
                    placeholder=""
                  />
                </div>
                <div className="form__group">
                  <label className="form__label">
                    What's your email address?
                  </label>
                  <input
                    value={state.email || ""}
                    onChange={(e) => handleChange(e, "email")}
                    type="email"
                    className="form__input"
                    placeholder=""
                  />
                </div>
                <div className="form__group">
                  <label className="form__label">What's your Password?</label>
                  <input
                    value={state.password || ""}
                    onChange={(e) => handleChange(e, "password")}
                    type="password"
                    className="form__input"
                    placeholder=""
                  />
                </div>
                <div className="form__group">
                  <label className="form__label">
                    On which number can we contact you?
                  </label>
                  <input
                    value={state.contact || ""}
                    onChange={(e) => handleChange(e, "contact")}
                    type="tel"
                    className="form__input"
                    placeholder=""
                  />
                </div>
                <div className="form__group">
                  <label className="form__label">
                    When can we wish a happy birthday?
                  </label>
                  <DatePicker
                    className="form__input"
                    onChange={(date, dateString) => {
                      setDob(dateString);
                      console.log(dateString);
                    }}
                  />
                </div>
                <ul className="activity__list">
                  {cat?.map((d, i) => (
                    <li
                      className="activity__list--item active"
                      key={i}
                      onClick={() => {
                        addOrRemoveItemFromArray(d.title);
                      }}
                    >
                      <div className="activity__info">
                        <div className="activity__image">
                          <img
                            src={`https://cdn.firsttry.live/${d.image[0].url}`}
                            alt="activity"
                          />
                          <div className="activity__image--overlay"></div>
                          <div className="activity__name">{d.title}</div>
                        </div>

                        <>
                          {/* <div className="activity__selected">
                            <div className="icon-thumbs-up"></div>
                          </div> */}
                        </>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="form__group m-0">
                  <label className="form__label">
                    Please let us know if you have some interests
                  </label>
                  <input
                    type="text"
                    className="form__input"
                    placeholder="Add multiple interests comma ( , ) separated"
                    value={array}
                    readOnly
                  />
                </div>
                <div className="btn--wrap">
                  <button className="btn btn__red" onClick={handleSubmit}>
                    Save
                  </button>
                  <button className="btn btn__transparent">Cancel</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Register;
