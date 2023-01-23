import "./App.css";
import SearchEngine from "./SearchEngine.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
      </header>
      <SearchEngine />
      <footer>
        <p>
          <a
            href="https://github.com/sophbradley/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            Open source code
          </a>{" "}
          created by Sophie Bradley
        </p>
      </footer>
    </div>
  );
}

export default App;
