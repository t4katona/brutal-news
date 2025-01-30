import "./App.css";
import "./index.css";
import { Sidebar } from "./components/sidebar/Sidebar";
import { Results } from "./components/news/results/Results";

function App() {
  return (
    <>
      <Sidebar />
      <Results />
    </>
  );
}

export default App;
