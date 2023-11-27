import headerImg from "/game-logo.png"
import Player from "./Player"

function App() {
  return (<>
      <header>
        <img src={headerImg} alt="tic tac toe game image" />
        <h1>React Tic-Tac-Toe</h1>
      </header>
      <div id="game-container">
        <ol id="players">
          <Player name="Arun" symbol="X" />
          <Player name="Shruti" symbol="O" />
        </ol>  
        BOARD
      </div>
      LOG
    </>
  )
}

export default App
