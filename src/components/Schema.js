import React from "react";
import schema from "../services/schema.json";

const Schema = ({ data }) => {
  console.log(data);
  return (
    <div
      className={`bg-gray-700 border border-gray-800 p-5 rounded-lg font h-fit shadow-lg min-w-72 max-w-[380px]`}
      style={{overflow: "auto"}}
    >
      <pre>
        {JSON.stringify(schema, null, 2)}
      </pre>
    </div>
  );
};

export default Schema;
