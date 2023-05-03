import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { displayAllNotifications } from "../../redux/actions/notificationAction";
import { columns } from "../../DummyText";

const DisplayAllNotifications = () => {
  const [data, setData] = useState();

  const getData = async () => {
    try {
      const res = await displayAllNotifications();
      if (res?.data.data) {
        setData(res?.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="all">
      <h2>Display All Notifications</h2>
      <div style={{ padding: "1.5rem" }}>
        <Table
          columns={columns}
          dataSource={data?.map((d) => ({
            key: d.id,
            title: d.title,
            eventid: d.eventid,
            msg: d.msg,
          }))}
          pagination={false}
        />
      </div>
    </div>
  );
};

export default DisplayAllNotifications;
