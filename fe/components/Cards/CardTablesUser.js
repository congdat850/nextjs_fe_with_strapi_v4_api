import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import RenderTable from "components/RenderTable";

// components


export default function CardTable({ color = "light", res = { } }) {
  const schema = {
    title:"Users",
    columnName : ["id", "user name", "email", "created at"]
  };
  const [data, setData] = useState({});

  useEffect(() => {
    setData(res);
  }, [res]);
  return <RenderTable schema={schema} items={data.data || []} />;
}

CardTable.defaultProps = {
  color: "light",
};

CardTable.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
