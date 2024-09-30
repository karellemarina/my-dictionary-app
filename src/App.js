import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>
            <strong>Coded</strong> by{" "}
            <a href="https://www.shecodes.io/graduates/118933-karelle-bolon">
              Karelle Bolon
            </a>{" "}
            and is{" "}
            <a href="https://github.com/karellemarina/my-dictionary-app">
              open sourced on GitHub
            </a>{" "}
            and <strong>hosted</strong> in{" "}
            <a href="https://splendid-brioche-75cf88.netlify.app/"> Netlify</a>
          </small>
        </footer>
      </div>
    </div>
  );
}
