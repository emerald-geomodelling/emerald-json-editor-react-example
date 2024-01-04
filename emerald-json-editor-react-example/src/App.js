import "./App.css";
import JsonForm from "./components/JsonForm";
import OutputDisplay from "./components/OutputDisplay";

function App() {
  return (
    <div className="App bg-blue-200">
      <main className="flex min-h-screen flex items-center gap-10 p-24 bg-white">
        <JsonForm />
        <OutputDisplay />
      </main>
    </div>
  );
}

export default App;
