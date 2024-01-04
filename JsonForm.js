import React from "react";
import dynamic from "next/dynamic";

const DynamicJsonEditor = dynamic(
  () => import("emerald-json-editor-react").then((mod) => mod.default),
  { ssr: false }
);

const JsonForm = () => {
  return (
    <div className="border border-gray-200 text-gray-700 p-5 rounded-lg">
      <DynamicJsonEditor />
      Form here
    </div>
  );
};

export default JsonForm;
