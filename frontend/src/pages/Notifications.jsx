import React from "react";
import notificationData from "../components/notificationModal/notificationData";
import EventCard from "../components/notificationModal/EventCard";
import Timeline from "../components/notificationModal/Timeline";


const Notifications = () => {


notificationData.sort((a, b) => b.timeline - a.timeline);
const modifiedItems = notificationData.map(notificationData => ({
  ...notificationData,
  formattedDate: notificationData.timeline.toLocaleDateString(),
}));
//console.log(modifiedItems);

  return (
    <>
      <main className="content">
        <div className="notification">
          <div className="container">
            <h2 className="notification__title">Good morning Charlie!</h2>
            <div className="notification__subtitle">
              Here are the notifications that you have received so far.
            </div>
            <div className="row">
              <div className="col_md_2">
                <div className="notification__date">
                  <ul className="date__list">
                    {modifiedItems.map((t,i) => {
                       return <Timeline data={t} key={i}/>;
                    })}
                    
                  </ul>
                </div>
              </div>

              <div className="col_sm_12 col_md_10">
                <div className="notification__content">
                  <ul className="notification__list">
                    {modifiedItems.map((d, i) => {
                      return  (  <EventCard data={d} key={i} />);
                    })}
                  </ul>

                  <button className="btn btn__black" >
                    Load more
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Notifications;
