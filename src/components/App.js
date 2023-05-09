import Tooltip from "./Tooltip";
import "../styles/index.css";
function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>React Tooltip</h1>
      <div className="tooltipContainer">
        <Tooltip text="default tooltip"></Tooltip>
        <Tooltip position="Right" text="Right tooltip"></Tooltip>
        <Tooltip position="Top" text="Top tooltip"></Tooltip>
        <Tooltip position="Bottom" text="Bottom tooltip"></Tooltip>
        <Tooltip position="Left" text="Left tooltip"></Tooltip>
      </div>
    </div>
  );
}

export default App;
