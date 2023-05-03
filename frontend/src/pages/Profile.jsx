import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { ProfileValidation } from "../schemas/ValidationSchema";
import { useSelector } from "react-redux";
import { DatePicker } from "antd";
import { UpdateProfile } from "../redux/actions/profileAction";
import { getCategories } from "../redux/actions/categoryAction";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import FormInput from "../components/utils/FormInput";

const Profile = () => {
  const { user } = useSelector((state) => state.users);
  const [images, setImages] = useState();
  const [dob, setDob] = useState(user?.data?.dob);
  const [array, setArray] = useState([]);
  const [categoryArray, setCategoryArray] = useState([]);
  const [loading, setLoading] = useState(false);
  const Navigate = useNavigate();
  const token = localStorage.getItem("token");
  ///define initial values
  const initialvalues = {
    name: user?.data?.name,
    phone: user?.data?.contact,
    email: user?.data?.email,
  };
  const { handleBlur, handleChange, values, touched, errors, handleSubmit } =
    useFormik({
      initialValues: initialvalues,
      validationSchema: ProfileValidation,
      onSubmit: (val) => {
        console.log(val);
        SaveData(val);
      },
    });

  const getCategory = async () => {
    try {
      const res = await getCategories();
      setCategoryArray(res?.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCategory();
  }, []);

  ////Category add or delete
  const addOrRemoveItemFromArray = (item) => {
    if (array.includes(item)) {
      setArray((prevState) =>
        prevState.filter((existing) => existing !== item)
      );
    } else {
      setArray((prevState) => [item, ...prevState.slice(0, 6)]);
    }
  };

  const SaveData = async (val) => {
    try {
      array.length < 1 ? (
        swal("error", "Required All the fields", "error")
      ) : (
        <></>
      );
      setLoading(true);
      console.log(images);
      const myForm = new FormData();
      myForm.append("name", val.name);
      myForm.append("email", val.email);
      myForm.append("contact", val.phone);
      myForm.append("dob", dob);
      myForm.append("category", JSON.stringify(array));
      myForm.append("images", images);

      const result = await UpdateProfile(token, myForm);
      if (result?.data.data) {
        swal("success", "Your Profile Update Successfully", "success");
        Navigate("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <main className="content">
        <div className="profile">
          <div className="container">
            <div className="profile__page userPreferences">
              <h2 className="profile__title">
                Edit {user?.data.name}'s profile
              </h2>
              <div className="profile__edit">
                <div className="profile__list">
                  <div className="profile__list--item active">
                    <div className="profile__info">
                      <div className="profile__image">
                        <div className="profile__image--abstract"></div>
                        <div className="profile__main--image">
                          <img
                            src={
                              images
                                ? window.URL.createObjectURL(images)
                                : `https://cdn.firsttry.live/${user?.data.profile[0].url}`
                            }
                            alt="profile-img"
                          />
                        </div>
                        <div className="profile__image--overlay">
                          <input
                            className="profile-uploads-input"
                            type="file"
                            accept="image/*"
                            onChange={(e) => setImages(e.target.files[0])}
                            style={{ width: "100%", height: "100%" }}
                          />
                        </div>
                        <div className="profile__icon">
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
                  <FormInput
                    label={"    What should we call you?"}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    errors={errors.name}
                    touched={touched.name}
                    name="name"
                    id="name"
                    values={values.name}
                    type="text"
                  />
                  <FormInput
                    label={"     What's your email address?"}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    errors={errors.email}
                    touched={touched.email}
                    name="email"
                    id="email"
                    values={values.email}
                    type="email"
                    disabled={true}
                  />
                  <FormInput
                    label={"On which number can we contact you?"}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    errors={errors.phone}
                    touched={touched.phone}
                    name="phone"
                    id="phone"
                    values={values.phone}
                    type="text"
                  />
                  <div className="form__group">
                    <label className="form__label">
                      When can we wish a happy birthday?
                    </label>
                    <DatePicker
                      placeholder={user?.data.dob}
                      style={{ width: "100%", padding: "0.8rem" }}
                      className="form-control"
                      onChange={(date, dateString) => setDob(dateString)}
                    />
                  </div>
                  <ul className="activity__list">
                    {categoryArray?.map((d, index) => {
                      return (
                        <li
                          key={d.id}
                          className={`activity__list--item ${
                            array.find((e) => e === d.title) ? "active" : null
                          }`}
                          onClick={() => {
                            // thumbHandlerOnImg(index);
                            addOrRemoveItemFromArray(d?.title);
                          }}
                        >
                          <div className="activity__info ">
                            <div className="activity__image">
                              <img
                                src={`https://cdn.firsttry.live/${d.image[0].url}`}
                                alt="activity"
                              />
                              <div className="activity__image--overlay"></div>
                              <div className="activity__name">{d.title}</div>
                            </div>
                            <div className="activity__selected">
                              <div className="icon-thumbs-up"></div>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                  <div className="form__group m-0">
                    <label className="form__label">
                      Please let us know if you have some interests
                    </label>
                    <input
                      type="text"
                      className="form__input"
                      value={array}
                      readOnly
                      // value={selectedImageText.join(", ")}
                      // onChange={() => setSelectedImageText([])}
                      placeholder="Add multiple interests comma ( , ) separated"
                    />
                  </div>
                  <div className="btn--wrap">
                    <button
                      className="btn btn__red"
                      type="submit"
                      onClick={handleSubmit}
                    >
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
    </div>
  );
};

export default Profile;
