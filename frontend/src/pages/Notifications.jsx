import React from "react";
import { useSelector } from "react-redux";
import ModalForm from "../components/RatingModals/ModalForm";
import { Modal } from "antd";
const Notifications = () => {
  const { user } = useSelector((state) => state.users);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <main class="content">
      <div class="notification">
        <div class="container">
          <h2 class="notification__title">Good morning {user?.data.name}!</h2>
          <div class="notification__subtitle">
            Here are the notifications that you have received so far.
          </div>
          <div class="row">
            {}
            <div class="col_md_2">
              <div class="notification__date">
                <ul class="date__list">
                  <li class="date__list--item">
                    <div class="date">Nov 5</div>
                    <span class="circle-mark"></span>
                  </li>
                  <li class="date__list--item">
                    <div class="date">Nov 5</div>
                    <span class="circle-mark"></span>
                  </li>
                  <li class="date__list--item">
                    <div class="date">Nov 5</div>
                    <span class="circle-mark"></span>
                  </li>
                  <li class="date__list--item">
                    <div class="date">Nov 5</div>
                    <span class="circle-mark"></span>
                  </li>
                </ul>
              </div>
            </div>

            <div class="col_sm_12 col_md_10">
              <div class="notification__content">
                <ul class="notification__list">
                  <li class="notification__list--item">
                    <div class="notification__info">
                      <div class="image--wrapper">
                        <img
                          src="./assets/img/Product1.png"
                          alt=""
                          width="100px"
                          height="100px"
                        />
                      </div>
                      <div class="content--wrapper">
                        <div class="title">
                          We have added a new activity for you.
                        </div>
                        <div class="subtitle">Surfing at leasure</div>
                        <div class="details">AED 1800 per person</div>
                        <div class="details">Nov 10-29</div>
                      </div>
                    </div>
                    <button class="btn__transparent">View event</button>
                  </li>
                  <li class="notification__list--item">
                    <div class="notification__info">
                      <div class="image--wrapper">
                        <img
                          src="./assets/img/Product1.png"
                          alt=""
                          width="100px"
                          height="100px"
                        />
                      </div>
                      <div class="content--wrapper">
                        <div class="title">Congratulations Charlie!</div>
                        <div class="details">
                          You have completed event "Surfing at leasure". Hope
                          you have enjoyed the activity. Please do share your
                          valuable feedback with us to improve and serve you the
                          best.
                        </div>
                      </div>
                    </div>
                    <button class="btn__transparent">Add a review</button>
                  </li>
                  <li class="notification__list--item">
                    <div class="notification__info">
                      <div class="image--wrapper">
                        <img src="" alt="" width="100px" height="100px" />
                        <span>UG</span>
                      </div>
                      <div class="content--wrapper">
                        <div class="title">
                          We have added a new activity for you.
                        </div>
                        <div class="subtitle">Surfing at leasure</div>
                        <div class="details">AED 1800 per person</div>
                        <div class="details">Nov 10-29</div>
                      </div>
                    </div>
                    <button class="btn__transparent">Go to home page</button>
                  </li>
                  <li class="notification__list--item">
                    <div class="notification__info">
                      <div class="image--wrapper">
                        <img
                          src="./assets/img/Product1.png"
                          alt=""
                          width="100px"
                          height="100px"
                        />
                      </div>
                      <div class="content--wrapper">
                        <div class="title">Congratulations Charlie!</div>
                        <div class="details">
                          You have completed event "Surfing at leasure". Hope
                          you have enjoyed the activity. Please do share your
                          valuable feedback with us to improve and serve you the
                          best.
                        </div>
                      </div>
                    </div>
                    <button class="btn__transparent" onClick={showModal}>
                      Add a review
                    </button>
                    <Modal
                      title="Basic Modal"
                      open={isModalOpen}
                      onOk={handleOk}
                      onCancel={handleCancel}
                      footer={false}
                    >
                      <ModalForm />
                    </Modal>
                  </li>
                </ul>

                <button class="btn btn__black">Load more</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Notifications;
