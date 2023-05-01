import React, { useEffect, useState } from "react";
import { Button, DatePicker, Select } from "antd";
import { DisplayEvent, getUserList } from "../../redux/action";

const Iternearies = () => {
  const [users, setUsers] = useState();
  const [events, setEvents] = useState();

  const [email, setEmail] = useState();
  const [eventId, setEventId] = useState();

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
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="iternary">
      <h2>Assign Iternearies</h2>

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
      <Button onClick={handleSubmit}>Submit</Button>
    </div>
  );
};

export default Iternearies;
