import { useState } from "react";
import Schema from "./components/Schema";
import JsonForm from "./components/JsonForm";
import OutputDisplay from "./components/OutputDisplay";

function Page() {
  const [data, setData] = useState(undefined);

  return (
    <div className="bg-gray-50 w-screen h-screen flex flex-col items-center">
      <header className="py-5 px-8 font-semibold text-gray-700 flex gap-2 items-center w-full">
        <a
          className="w-fit h-fit mt-1.5 hover:text-gray-700/90"
          href="https://github.com/emerald-geomodelling/emerald-json-editor-react-example"
          target="_"
        >
          <ion-icon name="logo-github"></ion-icon>
        </a>
        <a
          className="w-fit h-fit hover:text-gray-700/90"
          href="https://www.npmjs.com/package/emerald-json-editor-react"
          target="_"
        >
          emerald-json-editor-example
        </a>
      </header>
      <main className="flex flex-wrap gap-10 mt-8 p-5">
        <Schema />
        <JsonForm data={data} setData={setData} />
        <OutputDisplay data={data} />
      </main>
      <footer className="p-5 text-sm text-gray-500 flex mt-auto items-center gap-2">
        @ EMerald Geomodelling
      </footer>
    </div>
  );
}

export default Page;
