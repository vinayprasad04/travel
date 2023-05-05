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
  const handleSubmit = ()=>{
    try {
      const myForm = new FormData();
      myForm.append("title",state.title)
      myForm.append("desc",state.desc)
      myForm.append("eventStartDate",eventStartDate)
      myForm.append("eventEndDate",eventEndDate)
      myForm.append("location",location)
      myForm.append("status",status)
      myForm.append("people",state.people)
      myForm.append("category",state.title)
      myForm.append("title",selectCategory)

      for(let i=0;i< images.length;i++)
      myForm.append(image,images[i]);
      
      console.log(images);


      
      
    } catch (error) {
      
    }
  }
  return (
    <div>
       <h1>Create Event</h1>
       <label>Event Title</label>
       <input  type='text' placeholder='Event Title'  value={state.title || ""} onChange={(e) => handleChange(e, "title")}/>

        <label>Event Description</label>
      <textarea type='text' placeholder='Event Description' value={state.desc || ""} onChange={(e) => handleChange(e, "desc")} />

      <label>Event Start Date</label>
      <DatePicker   onChange={(date,dateString)=>setEventStartDate(dateString)}/>

      <label>Event End Date</label>
      <DatePicker onChange={(date,dateString)=>setEventEndDate(dateString)}/>

    <label>Event Location</label>
    <select  onChange={(value) => setLocation(value)}/>

    <label>Max people are allowed </label>
    <input type='number' placeholder='Max People'  value={state.people || ""} onChange={(e) => handleChange(e, "people")}/>

    <label>Select category</label>
    <select  onChange={(value) => setSelectCategory(value)}/>

 <label>Select status</label>
  <select onChange={(value) => setStatus(value)}/>

  <label>Upload Images</label>
  <input  type='file' placeholder='Upload Images' multiple  onChange={(e) => setImages(e.target.files)}/>


   <button onClick={handleSubmit}>Create Event</button>
    </div>
  )
}

export default createEvent;
   






