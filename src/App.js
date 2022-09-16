import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <main>
          <Dictionary defaultKeyword="flower" />
        </main>
        <footer className="App-footer">
          <small>
            This project was coded by Tamila Bichurina and is{" "}
            <a
              href="https://github.com/Tamilo4ka/dictionary-project"
              target="_blank"
              rel="noreferrer"
            >
              open-sourced on GitHub
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
