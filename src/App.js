import "./App.css";
import Todo1 from "./Components/Todo1";
import { useState } from "react";


function App() {
  const [mode, setMode] = useState(true);

 function toggleMode(){
    setMode(!mode);
  }
  return (
    <div className="App">
      <header className={mode ? "light" : "dark"}>
        <button onClick={toggleMode}>
          {" "}
          {mode ? "turn on dark mode" : "turn on light mode"}{" "}
        </button>
      <Todo1 />
      </header>
    </div>
  );
}

export default App;
