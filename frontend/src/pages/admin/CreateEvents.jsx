import React, { useState, useEffect } from "react";
import { DatePicker, Select, TimePicker } from "antd";
import { CreateEvent, getCategories } from "../../redux/action";
import { City } from "country-state-city";
const CreateEvents = () => {
  const [category, setCategory] = useState();
  const [state, setState] = useState({});
  const [images, setImages] = useState([]);
  const [eventStartDate, setEventStartDate] = useState();
  const [eventEndDate, setEventEndDate] = useState();
  const [selectCategory, setSelectCategory] = useState();
  const [status, setStatus] = useState();
  const [location, setLocation] = useState();
  const [loading, setLoading] = useState(false);

  ///handle Change
  const handleChange = (e, name) => {
    setState({ ...state, [name]: e.target.value });
  };

  //search input by antd
  const onSearch = (value) => {};

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const myForm = new FormData();
      myForm.append("title", state.title);
      myForm.append("dis", state.dis);
      myForm.append("people", state.people);
      myForm.append("eventStartDate", eventStartDate);
      myForm.append("eventEndDate", eventEndDate);
      myForm.append("location", location);
      myForm.append("status", status);
      myForm.append("category", selectCategory);
      for (let i = 0; i < images.length; i++) {
        myForm.append("image", images[i]);
      }
      console.log(images);

      const data = await CreateEvent(myForm);
      if (data?.data.data) {
        alert("Data saved Successfully");
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  ///function to fetch category
  const fetchData = async () => {
    const data = await getCategories();
    if (data?.data.data) {
      console.log(data?.data.data);
      setCategory(data?.data.data);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="events">
      {loading ? <h2>Loading....</h2> : <h2>Create Events</h2>}
      <div className="form-group">
        <label>Event Title</label>
        <input
          value={state.title || ""}
          onChange={(e) => handleChange(e, "title")}
          type="text"
          placeholder="Event Title"
        />
      </div>

      <div className="form-group">
        <label>Event Discription</label>
        <textarea
          value={state.dis || ""}
          onChange={(e) => handleChange(e, "dis")}
          type="text"
          placeholder="Event Discription"
        />
      </div>
      <div className="wrap">
        <div className="form-group">
          <label>Event Start Date</label>
          <DatePicker
            showTime={true}
            onChange={(date, dateString) => setEventStartDate(new Date(date))}
          />
        </div>

        <div className="form-group">
          <label>Event End Date</label>
          <DatePicker
            showTime={true}
            onChange={(date, dateString) => setEventEndDate(new Date(date))}
          />
        </div>
      </div>
      <div className="wrap">
        <div className="form-group">
          <label>Event Location</label>
          <Select
            showSearch
            placeholder="Select a Location"
            optionFilterProp="children"
            onChange={(value) => setLocation(value)}
            onSearch={onSearch}
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            options={City.getAllCities().map((d) => ({
              value: d.name,
              label: d.name,
            }))}
          />
        </div>
        <div className="form-group">
          <label>Max Peoples Allowed for Event</label>
          <input
            value={state.people || ""}
            onChange={(e) => handleChange(e, "people")}
            type="number"
            placeholder="Max People"
          />
        </div>
      </div>

      <div className="wrap">
        <div className="form-group">
          <label>Select Category</label>
          <Select
            showSearch
            placeholder="Select a person"
            optionFilterProp="children"
            onChange={(value) => setSelectCategory(value)}
            onSearch={onSearch}
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            options={category?.map((d) => ({ value: d.title, label: d.title }))}
          />
        </div>
        <div className="form-group">
          <label>Select Status</label>
          <Select
            showSearch
            placeholder="Select a Status"
            optionFilterProp="children"
            onChange={(value) => setStatus(value)}
            onSearch={onSearch}
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            options={[
              {
                value: "Active",
                label: "Active",
              },
              {
                value: "Cancelled",
                label: "Cancelled",
              },
              {
                value: "Complete",
                label: "Complete",
              },
            ]}
          />
        </div>
        <div className="form-group">
          <label>Upload Images</label>
          <input
            type="file"
            multiple
            onChange={(e) => setImages(e.target.files)}
          />
        </div>
      </div>
      <button onClick={handleSubmit}>Create Events</button>
    </div>
  );
};

export default CreateEvents;
