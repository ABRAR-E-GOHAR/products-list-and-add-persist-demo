import React from "react";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
  },

  {
    title: "Inventory Date",
    dataIndex: "inventory_date",
    key: "inventory_date",
    render: (text) => {
      return <div>{new Date(text).toDateString()}</div>;
    },
  },
];

export default columns;
