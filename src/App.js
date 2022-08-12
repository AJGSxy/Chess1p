import './App.css';
const squareboard = Array.from({length: 64}, (v, i) => i+1)
function App() {
  console.log(squareboard)
  return (
    <div className="App">
      <div className='Tablero'>
        {
          squareboard.map((square)=>  <div className={"Square"+square%2==0?"Brown":"Ivory"}></div>)
        }                            
                                   
      </div>
    </div>
  );
}

export default App;
