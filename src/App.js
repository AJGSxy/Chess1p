import "./App.css";
const squareboard = Array.from({ length: 64 }, (v, i) => i + 1);
function App() {
  console.log(squareboard);
  return (
    <div className="App">
      <div className="Tablero">
        {squareboard.map((square) => {
          let color = "";
          if (square % 2 === 0) {
            color = square % 8 == 0 && square != 0 ? "Brown" : "Ivory";
          } else {
            color = "Brown";
          }
          return <div className={`Square ${color}`} />;
        })}
      </div>
    </div>
  );
}

export default App;
