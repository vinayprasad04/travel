import React, { useEffect, useState } from "react";
import { Button, DatePicker, Input, Select, notification } from "antd";
import { getUserList } from "../../redux/actions/authAction";
import { DisplayEvent } from "../../redux/actions/eventAction";
import { assignIterniary } from "../../redux/actions/iterniaryAction";

const Iternearies = () => {
  const [api, contextHolder] = notification.useNotification();
  const openNotificationWithIcon = (type) => {
    api[type]({
      message: "Iterniary Create Successfully",
      description:
        "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
    });
  };
  const [users, setUsers] = useState();
  const [events, setEvents] = useState();

  const [email, setEmail] = useState();
  const [eventId, setEventId] = useState();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [person, setPerson] = useState();
  const [status, setStatus] = useState();

  const onSearch = (value) => {
    console.log("search:", value);
  };

  const onSearch1 = (value) => {
    console.log("search:", value);
  };

  const fetchUsers = async () => {
    try {
      const result = await getUserList();
      if (result?.data.data) {
        setUsers(result?.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchEvents = async () => {
    try {
      const result = await DisplayEvent();
      if (result?.data.data) {
        setEvents(result?.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleSubmit = async () => {
    try {
      const data = {
        email,
        eventId,
        startDate,
        endDate,
        person,
        status,
      };
      const token = localStorage.getItem("token");
      const res = await assignIterniary(data, token);
      if (res?.data.data) {
        openNotificationWithIcon("success");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="iternary" style={{ overflow: "auto" }}>
      <h2>Assign Iternearies</h2>
      {contextHolder}
      <div className="form-group">
        <label htmlFor="User Email">User Email</label>
        <Select
          showSearch
          placeholder="Select a person"
          optionFilterProp="children"
          onChange={(value) => setEmail(value)}
          onSearch={onSearch}
          filterOption={(input, option) =>
            (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
          }
          options={users?.map((d) => ({
            label: ` ${d.name} (${d.email})`,
            value: d.email,
          }))}
        />
      </div>
      <div className="form-group">
        <label htmlFor="User Email">Events</label>
        <Select
          showSearch
          placeholder="Select a person"
          optionFilterProp="children"
          onChange={(value) => setEventId(value)}
          onSearch={onSearch1}
          filterOption={(input, option) =>
            (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
          }
          options={events?.map((d) => ({
            label: `${d.title} Available Seat is (${d.person})`,
            value: d.id,
          }))}
        />
      </div>
      <div className="form-group">
        <label>Iterniary Assign date</label>
        <DatePicker
          showTime={true}
          onChange={(date, dateString) => setStartDate(new Date(date))}
        />
      </div>
      <div className="form-group">
        <label>Iterniary End date</label>
        <DatePicker
          showTime={true}
          onChange={(date, dateString) => setEndDate(new Date(date))}
        />
      </div>
      <div className="form-group">
        <label>No of Persons</label>
        <Input
          type="number"
          value={person}
          onChange={(e) => setPerson(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Iterniary Status</label>
        <Select
          placeholder="Select a Status"
          onChange={(value) => setStatus(value)}
          options={[
            { title: "Active" },
            { title: "Cancel" },
            { title: "Complete" },
          ]?.map((d) => ({
            label: `${d.title} `,
            value: d.title,
          }))}
        />
      </div>
      <Button onClick={handleSubmit}>Submit</Button>
    </div>
  );
};

export default Iternearies;
