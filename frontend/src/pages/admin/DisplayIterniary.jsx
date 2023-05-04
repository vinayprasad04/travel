import React, { useState, useEffect } from "react";
import { Table } from "antd";
import { DisplayIterniarys } from "../../redux/actions/iterniaryAction";

const columns = [
  {
    title: "Id",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Iterniary Start Date",
    dataIndex: "startdate",
    key: "startdate",
  },
  {
    title: "Iterniary End Date",
    dataIndex: "enddate",
    key: "enddate",
  },
  {
    title: "Total People",
    dataIndex: "people",
    key: "people",
  },
  {
    title: "Event ID",
    dataIndex: "events",
    key: "events",
  },
  {
    title: "Iterniary Status",
    dataIndex: "status",
    key: "status",
  },
];

const DisplayIterniary = () => {
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 1,
    total: 0,
  });

  const fetchData = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await DisplayIterniarys(
        pagination.current,
        pagination.pageSize,
        token
      );
      console.log(response.data);
      setData(response?.data.rows);
      setPagination({ ...pagination, total: response.data.count });
    } catch (error) {
      console.error(error);
    }
  };

  const handleTableChange = (pagination) => {
    setPagination(pagination);
  };

  useEffect(() => {
    fetchData();
  }, [pagination.current]);
  console.log(data);
  return (
    <div style={{ padding: "1rem" }}>
      <h4>Display Iterniarys</h4>
      <Table
        key={data.id}
        dataSource={data}
        columns={columns}
        pagination={pagination}
        onChange={handleTableChange}
      />
    </div>
  );
};

export default DisplayIterniary;
