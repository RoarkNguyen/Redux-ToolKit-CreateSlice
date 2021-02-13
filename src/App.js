import logo from "./logo.svg";
import "./App.css";
import Counter from "./Counter";
import { useSelector } from "react-redux";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Study react-redux with toolkit</p>
        <Counter />
      </header>
    </div>
  );
}

export default App;
