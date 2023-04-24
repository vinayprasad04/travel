
import notificationData from "../components/notificationModal/notificationData";
import EventCard from "../components/notificationModal/EventCard";
import Timeline from "../components/notificationModal/Timeline";
import { useState } from "react";


const Notifications = () => {


notificationData.sort((a, b) => b.timeline - a.timeline);
const modifiedItems = notificationData.map(notificationData => ({
  ...notificationData,
  formattedDate: notificationData.timeline.toLocaleDateString(),
}));
//console.log(modifiedItems);

const imagePerRow = 4;
const [next, setNext] = useState(imagePerRow);
const step=2;
const handleMoreImage = () => {
    setNext(next + step);
  };

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
                    {modifiedItems?.slice(0, next)?.map((t,i) => {
                       return <Timeline data={t} key={i}/>;
                    })}
                    
                  </ul>
                </div>
              </div>

              <div className="col_sm_12 col_md_10">
                <div className="notification__content">
                  <ul className="notification__list">
                    {modifiedItems?.slice(0, next)?.map((d, i) => {
                      return  (  <EventCard data={d} key={i} />);
                    })}
                  </ul>
                  {next < modifiedItems?.length && (
                  <button className="btn btn__black" onClick={handleMoreImage}>
                    Load more
                  </button> )}
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
