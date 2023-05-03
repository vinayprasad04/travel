import axios from "axios";
import React, { useState } from "react";

const ImageSEnd = () => {
  const [title, setTitle] = useState();
  const [image, setImage] = useState();

  const handleSubmit = async () => {
    try {
      const myForm = new FormData();
      myForm.append("title", title);
      myForm.append("image", image);

      const data = await axios.post("http://localhost:5001/api/v1/img", myForm);
      console.log(data);
    } catch (error) {}
  };

  return (
    <div style={{ padding: "4rem 2rem" }}>
      ImageSEnd
      <div className="group">
        <label>Title</label>
        <input
          name="title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          type="text"
        />
      </div>
      <div className="group">
        <label>pic</label>
        <input
          name="image"
          onChange={(e) => setImage(e.target.files[0])}
          accept="image/*"
          type="file"
        />
        {image && (
          <img
            style={{ width: "5rem", height: "5rem", objectFit: "contain" }}
            src={URL.createObjectURL(image)}
          />
        )}
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default ImageSEnd;
