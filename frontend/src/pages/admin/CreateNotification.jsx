import React, { useEffect, useState } from "react";
import { Select } from "antd";
import { CreateNotifications } from "../../redux/actions/notificationAction";
import { DisplayEvent } from "../../redux/actions/eventAction";
import { useNavigate } from "react-router-dom";

const CreateNotification = () => {
  const [events, setEvents] = useState();
  const [title, setTitle] = useState("");
  const [eventId, setEventId] = useState("");
  const [msg, setMsg] = useState("");
  const Navigate = useNavigate();
  const onChange = (value) => {
    setEventId(value);
  };
  const onSearch = (value) => {};

  const getEvents = async () => {
    try {
      const res = await DisplayEvent();
      if (res?.data.data) {
        setEvents(res?.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getEvents();
  }, []);

  const handleSubmit = async () => {
    try {
      const res = await CreateNotifications(title, eventId, msg);
      if (res?.data.data) {
        alert("Data Saved Successfully");
        Navigate("/admin/dashboard/get/notification");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="notify">
      <h2>Create Notifications</h2>
      <div className="wrap">
        <div className="form__group">
          <label className="form__label">Notification Title</label>
          <input
            className="form__input"
            id="name"
            name="name"
            type="text"
            placeholder=""
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>
        <div className="form__group" style={{ marginTop: "1rem" }}>
          <label className="form__label">Select Event</label>
          <Select
            style={{ width: "100%" }}
            showSearch
            placeholder="Select a person"
            optionFilterProp="children"
            onChange={onChange}
            onSearch={onSearch}
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            options={events?.map((d) => ({
              value: d.id,
              label: d.title,
            }))}
          />
        </div>
        <div className="form__group" style={{ marginTop: "1rem" }}>
          <label className="form__label">Notification Message</label>
          <input
            className="form__input"
            id="name"
            name="name"
            type="text"
            placeholder=""
            onChange={(e) => setMsg(e.target.value)}
            value={msg}
          />
        </div>
        <button
          style={{
            marginTop: "2rem",
            padding: "0.8rem 1rem",
            outline: "none",
            border: "none",
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            backgroundColor: "#65c7ff",
            color: "#fff",
            borderRadius: "5px",
          }}
          onClick={handleSubmit}
        >
          Create
        </button>
      </div>
    </div>
  );
};

export default CreateNotification;
