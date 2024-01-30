import React from "react";

const OutputDisplay = ({ data }) => {
  console.log(data);
  return (
    <div
      className={`bg-gray-700 border border-gray-800 p-5 rounded-lg font h-fit shadow-lg min-w-72 max-w-[380px]`}
    >
      <ul>
        <li className="text-emerald-300">
          Name: <span className="text-gray-200">{data?.name}</span>
        </li>
        <li className="text-emerald-300">
          Age: <span className="text-gray-200">{data?.age}</span>
        </li>
        <li className="text-emerald-300">
          Avatar: <span className="text-gray-200">{data?.Avatar}</span>
        </li>
        <li className="text-emerald-300">
          Subscribe:{" "}
          <span
            className={
              data?.newsletterSubscription ? "text-sky-300" : "text-red-300"
            }
          >
            {JSON.stringify(data?.newsletterSubscription)}
          </span>
        </li>
      </ul>
    </div>
  );
};

export default OutputDisplay;
