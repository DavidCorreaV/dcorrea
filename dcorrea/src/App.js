import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Here be dragons! </p>
        <a
          className="App-link"
          href="https://dracostore.co"
          target="_blank"
          rel="noopener noreferrer"
        >
          See one of my projects.
        </a>
      </header>
    </div>
  );
}

export default App;
