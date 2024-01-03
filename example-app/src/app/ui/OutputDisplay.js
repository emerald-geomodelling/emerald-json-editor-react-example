import React from "react";
import { Source_Code_Pro } from "next/font/google";

const font = Source_Code_Pro({ subsets: ["latin"] });

const OutputDisplay = () => {
  return (
    <div
      className={`bg-gray-700 text-gray-300 p-5 rounded-lg ${font.className}`}
    >
      Output Display
    </div>
  );
};

export default OutputDisplay;
