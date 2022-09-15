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
          <small>Coded by Tamila Bichurina</small>
        </footer>
      </div>
    </div>
  );
}
