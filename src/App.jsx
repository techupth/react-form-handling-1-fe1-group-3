import "./App.css";
import { useState } from "react";

function App() {
  const [startMessage, setMessage] = useState("Greeting Message");
  const [textInput, setTextInput] = useState("");

  return (
    <div className="App">
      <div className="greeting-container">{startMessage}</div>
      <div className="input-container">
        <label htmlFor="greeting-message">New Greeting Message</label>
        <input id="greeting-message" type="text" value={textInput} onChange={(event) => {
          setTextInput(event.target.value);
        }} />
      </div>

      <div className="buttons">
        <button onClick={() => { setMessage(textInput) }}>Update text</button>
      </div>
    </div>
  );
}

export default App;
