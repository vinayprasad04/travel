import React, { useEffect, useState } from "react";
import { deleteCategory, getCategories } from "../../redux/action";

const DisplayCategory = () => {
  const [category, setCategory] = useState();
  const [state, setState] = useState("");

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

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete category")) {
      const data = await deleteCategory(id);
      if (data?.data.data) {
        alert("Category Delete Successfully");
      }
    }
  };

  ///for searching functionallity
  const searched = (state) => (s) => s.title.includes(state);

  return (
    <div className="cats">
      <center>
        <input
          value={state}
          onChange={(e) => setState(e.target.value)}
          type="text"
          placeholder="Search Category"
        />
      </center>

      <div className="wrap">
        {category?.filter(searched(state)).map((d) => (
          <div className="card" key={d.id}>
            <img
              src={`https://cdn.firsttry.live/${d.image[0].url}`}
              alt="card-data"
            />
            <div className="over-btns">
              <span className="delete" onClick={() => handleDelete(d.id)}>
                <i className="bx bx-cut"></i>
              </span>
            </div>
            <h4>{d.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplayCategory;
