import React, { useState } from "react";
import "../../assets/scss/admin.scss";
import { CreateCategorys } from "../../redux/actions/categoryAction";
const CreateCategory = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      if (!title || !image) {
        return alert("Please Fill All the fields");
      }
      setLoading(true);
      const myForm = new FormData();
      myForm.append("title", title);
      myForm.append("image", image);

      const data = await CreateCategorys(myForm);
      if (data.data) {
        console.log(data);
      }
      console.log(title, image);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div className="cat">
      <div className="wrapt">
        <h4>Create Category</h4>
        <div className="form-group">
          <label>Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Enter Category Name"
          />
        </div>
        <br></br>
        <div className="form-group">
          <label>Upload Image</label>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            placeholder="Enter Category Name"
            accept="image/*"
          />
        </div>
        <button onClick={handleSubmit}>
          {loading ? "Loading...." : "Create Category"}
        </button>
      </div>
    </div>
  );
};

export default CreateCategory;
