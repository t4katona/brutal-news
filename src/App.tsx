import "./App.css";
import "./index.css";
import { Sidebar } from "./components/sidebar/Sidebar";
import { Results } from "./components/news/results/Results";

function App() {
  return (
    <div className="md:flex md:h-screen md:w-full">
      <Sidebar />
      <Results />
    </div>
  );
}

export default App;
