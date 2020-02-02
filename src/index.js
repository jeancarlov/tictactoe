import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// class Square extends React.Component {
//     render() {
//       return (
//         <button className="square">
//           {/* TODO */}
//         </button>
//       );
//     }
//   }

//  leave the state alone so that it wpuld count all the values there use setState to update the state
  function Square({ value, squares, onClick  }) {
    //   const [ value, setValue ] = useState('')
    return (
        <button  className="square"
        onClick={ onClick }
        >
          {value}
        </button>
      );
  }
  
  function Board () {

    const [squares, setSquares ] = useState(Array(9).fill(null))
    // const [ lastTurn, setLastTurn] = useState(true)
    const [ isXNext, setXNext] = useState(true)

     function renderSquare(i) {
      return <Square 
      value={squares[i]} 
      onClick= { () =>{
        const nextSquares = squares.slice()
        nextSquares[i]=  isXNext ? 'x': 'o'
        setXNext(!isXNext)
        console.log('squares', nextSquares);
        setSquares(nextSquares)
      }}
      />;
    }
    
      const status = 'Next player: X';
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
          </div>
          <div className="board-row">
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
          </div>
          <div className="board-row">
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
          </div>
        </div>
      );

  }
  
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  