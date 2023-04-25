import React, { useEffect, useState } from "react";
import { DisplayEvent } from "../../redux/action";
import { Avatar } from "antd";

const DisplayEvents = () => {
  const [events, setEvents] = useState();
  const [state, setState] = useState("");

  const fetchEvents = async () => {
    try {
      const data = await DisplayEvent();
      if (data?.data.data) {
        setEvents(data?.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete category")) {
      // const data = await deleteCategory(id);
      // if (data?.data.data) {
      //   alert("Category Delete Successfully");
      // }
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
        {events?.filter(searched(state)).map((d) => (
          <div className="card" key={d.id}>
            <img
              src={`https://cdn.firsttry.live/${d.images[0].url}`}
              alt="card-data"
            />
            <div className="over-btns">
              <span className="delete" onClick={() => handleDelete(d.id)}>
                <i className="bx bx-cut"></i>
              </span>
            </div>
            <h4>{d.title}</h4>
            <p>{d.discription?.substring(150, 0)} ...</p>
            <div className="date">
              <h6>
                Event Start Date
                <span>
                  {" "}
                  <i className="bx bx-calendar-check"></i>
                  {d.eventstartdate}
                </span>
              </h6>
              <h6>
                Event End Date
                <span>
                  {" "}
                  <i className="bx bx-calendar-check"></i>
                  {d.eventenddate}
                </span>
              </h6>
              <h6>
                Category{" "}
                <span>
                  <b>{d.category[0].category}</b>
                </span>
              </h6>
            </div>
            <div className="st">
              <p>
                Max Person Alowed <span>{d.person}</span>
              </p>
              <p>
                Event Status{" "}
                <span
                  style={{
                    color: "green",
                    fontWeight: "bold",
                    marginLeft: "0.5rem",
                  }}
                >
                  {d.status}
                </span>
              </p>
            </div>
            <div className="images">
              {d.images?.map((d, i) => (
                <Avatar key={i} src={`https://cdn.firsttry.live/${d.url}`} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplayEvents;
