import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { displayAllNotifications } from "../redux/action";
import { DatePicker, Modal } from "antd";
import { Select } from "antd";

const Popup = ({ setShowNotification }) => {
  const { user } = useSelector((state) => state.users);
  const Navigate = useNavigate();
  const [news, setNews] = useState();
  const [active, setActive] = useState(0);

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

  const getNotification = async () => {
    try {
      const res = await displayAllNotifications();
      console.log(res);
      if (res?.data.data) {
        setNews(res?.data.data[0]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onSearch = (value) => {
    console.log("search:", value);
  };

  useEffect(() => {
    getNotification();
  }, []);

  return (
    <>
      <span className="circle"></span>

      <div className={`popup1 star`}>
        <h4 className="popup__title">
          Hey {user?.data.name}
          <span className="popup__icon">
            <img src="./assets/img/hand.svg" alt="" />
          </span>
        </h4>
        <p className="popup__content">{news?.msg}</p>

        <div className="popup__actions">
          <button className="popup__btn" onClick={() => showModal()}>
            Reschedule
          </button>
          <button
            onClick={() => setShowNotification(false)}
            style={{
              padding: "1.3rem 1.5rem",
              background: "transparent",
              border: "1px solid white",
              borderRadius: "5px",
              color: "#fff",
              fontSize: "1rem",
            }}
          >
            Cancel
          </button>
        </div>
        <div className="popup__pointer"></div>
        <div
          className="popup__close"
          onClick={() => setShowNotification(false)}
        >
          <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="122.881px"
            height="122.88px"
            viewBox="0 0 122.881 122.88"
            //   enable-background="new 0 0 122.881 122.88"
            space="preserve"
          >
            <g>
              <path d="M61.44,0c16.966,0,32.326,6.877,43.445,17.996c11.119,11.118,17.996,26.479,17.996,43.444 c0,16.967-6.877,32.326-17.996,43.444C93.766,116.003,78.406,122.88,61.44,122.88c-16.966,0-32.326-6.877-43.444-17.996 C6.877,93.766,0,78.406,0,61.439c0-16.965,6.877-32.326,17.996-43.444C29.114,6.877,44.474,0,61.44,0L61.44,0z M80.16,37.369 c1.301-1.302,3.412-1.302,4.713,0c1.301,1.301,1.301,3.411,0,4.713L65.512,61.444l19.361,19.362c1.301,1.301,1.301,3.411,0,4.713 c-1.301,1.301-3.412,1.301-4.713,0L60.798,66.157L41.436,85.52c-1.301,1.301-3.412,1.301-4.713,0c-1.301-1.302-1.301-3.412,0-4.713 l19.363-19.362L36.723,42.082c-1.301-1.302-1.301-3.412,0-4.713c1.301-1.302,3.412-1.302,4.713,0l19.363,19.362L80.16,37.369 L80.16,37.369z M100.172,22.708C90.26,12.796,76.566,6.666,61.44,6.666c-15.126,0-28.819,6.13-38.731,16.042 C12.797,32.62,6.666,46.314,6.666,61.439c0,15.126,6.131,28.82,16.042,38.732c9.912,9.911,23.605,16.042,38.731,16.042 c15.126,0,28.82-6.131,38.732-16.042c9.912-9.912,16.043-23.606,16.043-38.732C116.215,46.314,110.084,32.62,100.172,22.708 L100.172,22.708z" />
            </g>
          </svg>
        </div>
      </div>
      <Modal
        okText="Reschedule"
        sty
        className="pop"
        title=""
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <p style={{ marginTop: "1rem", fontSize: "1rem" }}>
          {user?.data.name}, considering your golf handicap we have few
          recommendations for you
        </p>
        <div className="form-group">
          <label>Date</label>
          <div className="wrap">
            {["02/06/2023", "08/06/2023"].map((d, i) => (
              <div class="inputWrap" key={i}>
                <input type="radio" name="date" id={d + i} value={d} checked />
                <label>{d}</label>
              </div>
            ))}
          </div>
        </div>
        <div className="form-group">
          <label>Time</label>
          <div className="wrap">
            {["10:30Am - 12:30Am", "1:30Pm : 3:30Pm"].map((d, i) => (
              <div class="inputWrap" key={i}>
                <input type="radio" name="Time" id={d + i} value={d} checked />
                <label>{d}</label>
              </div>
            ))}
          </div>
        </div>
        <div className="form-group">
          <label>No of Guest</label>
          <Select
            showSearch
            placeholder="Select a person"
            optionFilterProp="children"
            onChange={onChange}
            onSearch={onSearch}
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            options={[
              {
                value: 1,
                label: 1,
              },
              {
                value: 2,
                label: 2,
              },
              {
                value: 3,
                label: 3,
              },
            ]}
          />
        </div>
        <button className="res">Reserve</button>
      </Modal>
    </>
  );
};

export default Popup;
