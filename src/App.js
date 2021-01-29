import "./App.scss";
import Jumbotron from "./Components/Jumbotron";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <div className="white-circle">
        <div className="nums">
          {Array(100)
            .fill()
            .map(() => (
              <div className="num" />
            ))}
        </div>
      </div>
      <div className="lines"></div>
      <div className="green-circle"></div>

      <div className="wrapper">
        <Navbar />
        <Jumbotron />
      </div>
    </div>
  );
}

export default App;
