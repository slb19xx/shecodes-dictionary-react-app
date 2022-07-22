import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a href="https://lighthearted-pie-ecc6a8.netlify.app/">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </a>
      </header>
      <main>
        <Dictionary defaultKeyword="crystals" />
      </main>
      <footer className="App-footer">
        <small>
          <a
            href="https://github.com/slb19xx/shecodes-dictionary-react-app"
            target="_blank"
            rel="noreferrer"
          >
            Open Source Code
          </a>{" "}
          by{" "}
          <a
            href="https://www.linkedin.com/in/sharibaldie/"
            target="_blank"
            rel="noreferrer"
          >
            Shari Baldie
          </a>
        </small>
      </footer>
    </div>
  );
}

export default App;
