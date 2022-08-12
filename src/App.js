import "./App.css";
import { range } from "./utils";
const squareboard = Array.from({ length: 64 }, (v, i) => i + 1);
const normalRows = [
  ...range(1, 8),
  ...range(17, 24),
  ...range(33, 40),
  ...range(49, 56),
];
function App() {
  console.log(normalRows);
  return (
    <div className="App">
      <div className="Tablero">
        {squareboard.map((square) => {
          let condition;
          if (normalRows.includes(square)) {
            condition = square % 2 == 0;
          } else {
            condition = square % 2 > 0;
          }
          return <div className={`Square ${condition ? "Brown" : "Ivory"}`} />;
        })}
      </div>
    </div>
  );
}

export default App;
