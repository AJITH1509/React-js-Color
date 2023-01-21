import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>Color Game</h1>
        <p className="para">type valid color name and click on add color</p>
        <Color />
      </div>
      <br />
      <hr />
      <p className="para"> © created by Ajithkumar</p>
    </div>
  );
}

export default App;

function Color() {
  const [color, setColor] = useState("skyblue");
  const styles = {
    backgroundColor: color,
  };
  const [addcolor, setAddcolor] = useState([]);
  return (
    <div>
      <div className="container">
        <input
          type="text"
          style={styles}
          onChange={(e) => setColor(e.target.value)}
          value={color}
        />
        <button onClick={() => setAddcolor([...addcolor, color])}>
          Add Color
        </button>
      </div>
      {addcolor.map((clr) => (
        <Blocks colors={clr} />
      ))}
    </div>
  );
}
function Blocks({ colors }) {
  const bclr = {
    backgroundColor: colors,
  };
  return <div style={bclr} className="blocks"></div>;
}
