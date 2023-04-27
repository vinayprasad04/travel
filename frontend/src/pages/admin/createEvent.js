import React from 'react';
import { useState } from 'react';
import DatePicker from "react-datepicker";

const createEvent = () => {
    const [category, setCategory] = useState();
  const [state, setState] = useState({});
  const [images, setImages] = useState([]);
  const [eventStartDate, setEventStartDate] = useState();
  const [eventEndDate, setEventEndDate] = useState();
  const [selectCategory, setSelectCategory] = useState();
  const [status, setStatus] = useState();
  const [location, setLocation] = useState();
   
  


  const handleChange = (e, name) => {
    setState({ ...state, [name]: e.target.value });
  };
  return (
    <div>
       <h1>Create Event</h1>
       <label>Event Title</label>
       <input  type='text' placeholder='Event Title'  value={state.title || ""} onChange={(e) => handleChange(e, "title")}/>

        <label>Event Description</label>
      <textarea type='text' placeholder='Event Description'/>

      <label>Event Start Date</label>
      <DatePicker/>

      <label>Event End Date</label>
      <DatePicker/>

    <label>Event Location</label>
    <select/>

    <label>Max people are allowed </label>
    <input type='number' placeholder='Max People'/>

    <label>Select category</label>
    <select/>

 <label>Select status</label>
  <select/>

  <label>Upload Images</label>
  <input  type='file' placeholder=''/>


   <button onClick={handleSubmit}>Create Event</button>
    </div>
  )
}

export default createEvent
