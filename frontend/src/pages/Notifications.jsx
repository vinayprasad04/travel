import { useState, useEffect } from "react";
import axios from "axios";
//import notificationData from "../components/notificationModal/notificationData";
import Greetings from "../components/notificationModal/Greetings";
import EventCard from "../components/notificationModal/EventCard";
import Timeline from "../components/notificationModal/Timeline";

import NotificationTitle from "../components/notificationModal/NotificationTitle";

const Notifications = () => {
  const imagePerRow = 4;
  const [notificationCard, setNotificationCard] = useState([]);
  const [next, setNext] = useState(imagePerRow);

  const getNotification = async () => {
    try {
      const allNotification = await axios.get(
        "http://localhost:5000/notifications"
      );
      setNotificationCard(allNotification.data);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getNotification();
  }, [setNotificationCard]);

  

  notificationCard?.sort((a, b) => b.timeline - a.timeline);
  const modifiedItems = notificationCard?.map((notificationCard) => ({
    ...notificationCard,
    // formattedDate: data?.timeline.toLocaleDateString(),
  }));
  

  const step = 2;
  const handleMoreImage = () => {
    setNext(next + step);
  };

  return (
    <>
      <main className="content">
        <div className="notification">
          <div className="container">
            <Greetings />
            <NotificationTitle />
            <div className="row">
              <div className="col_md_2">
                <div className="notification__date">
                  <ul className="date__list">
                    {modifiedItems?.slice(0, next)?.map((t, i) => {
                      return <Timeline data={t} key={i} />;
                    })}
                  </ul>
                </div>
              </div>

              <div className="col_sm_12 col_md_10">
                <div className="notification__content">
                  <ul className="notification__list">
                    {modifiedItems?.slice(0, next)?.map((d, i) => {
                      return <EventCard data={d} key={i} />;
                    })}
                  </ul>
                  {next < modifiedItems?.length && (
                    <button
                      className="btn btn__black"
                      onClick={handleMoreImage}
                    >
                      Load more
                    </button>
                  )}
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
