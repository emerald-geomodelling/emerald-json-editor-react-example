import React from "react";
import { JsonEditorWrapper } from "emerald-json-editor-react";

const JsonForm = () => {
  return (
    <div className="border border-gray-200 text-gray-700 p-5 rounded-lg">
      <JsonEditorWrapper />
      Form here
    </div>
  );
};

export default JsonForm;
