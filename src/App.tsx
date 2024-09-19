import './App.css'
function App() {
  const nombre = "Titulo"

  const scores = [
    {
      name:"mato123",
      score:2345,
      character:"Ganondorf"
    },{
      name:"tomas12",
      score:1221,
      character:"Dr.Mario"
    },{
      name:"SergioPk",
      score:1221,
      character:"Ryu",
    }
  ];
  
  const bestPlayers = scores.map (score => <li>{score.name}</li>);  
  const bestScores = scores.map (score => <li>{score.score}</li>);
  const bestCharacters = scores.map (score => <li>{score.character}</li>);
  

  return (
    <>  
      <div className="fondo">
        <h1>{nombre}</h1>
        <div className="scoreBoard">
          <ul>{bestPlayers}</ul>
          <ul>{bestScores}</ul>
          <ul>{bestCharacters}</ul>
        </div>        
      </div>
    </>
  )
}

export default App
