import React from "react";
import { JsonEditorWrapper } from "emerald-json-editor-react";
import schema from "../services/schema.json";
import { importFile } from "../services/importFile";

const JsonForm = ({ data, setData }) => {
  const handleFormSubmit = () => {
    console.log("Function to handle form submit");
  };

  return (
    <div className="bg-gray-100 border border-gray-200 text-gray-700 p-5 rounded-lg min-w-72 max-w-[380px]">
      <JsonEditorWrapper
        schema={schema}
        data={data}
        setData={setData}
        importFile={importFile}
      />
      <button
        onClick={handleFormSubmit}
        className="bg-gray-700 hover:bg-gray-700/90 rounded-md w-full p-1 text-white font-medium mt-1"
      >
        Submit
      </button>
    </div>
  );
};

export default JsonForm;
