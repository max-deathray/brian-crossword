import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import { Sample } from './sample.js';
import { Across, Down } from './Clues.js';

const Square = ({ answer, numbered }) => {
  const [input, setInput] = useState('');

  const MAX_LENGTH = 1;

  const onChange = (e) => {
    setInput(e.target.value);
  };

  console.log('correct?:', input.toLowerCase() === answer);

  return (
    <div className={numbered ? 'numbered' : ''}>
      <input
        className="square"
        type="text"
        maxLength={MAX_LENGTH}
        onChange={onChange}
      />
    </div>
  );
};

class Board extends React.Component {
  renderSquare(answer, numbered = false) {
    return <Square answer={answer} numbered={numbered} />;
  }

  render() {
    return (
      <div>
        <div className="status">
          Brians's Puzzle
          <br />
          Rachel Simon
        </div>
        <div id="wrapper">
          {this.renderSquare('p', true, 0)}
          {this.renderSquare('a', true, 1)}
          {this.renderSquare('p', true)}
          {this.renderSquare('s', true)}
          <input className="square black" disabled />
          {this.renderSquare('i', true)}
          {this.renderSquare('t', true)}
          {this.renderSquare('c', true)}
          {this.renderSquare('h', true)}
          {this.renderSquare('y', true)}
          <input className="square black" disabled />
          {this.renderSquare('c', true)}
          {this.renderSquare('a', true)}
          {this.renderSquare('m', true)}
          {this.renderSquare('p', true)}
          {/* 2nd row */}
          {this.renderSquare('i', true)}
          {this.renderSquare('n')}
          {this.renderSquare('a')}
          {this.renderSquare('t')}
          <input className="square black" disabled />
          {this.renderSquare('f', true)}
          {this.renderSquare('a')}
          {this.renderSquare('r')}
          {this.renderSquare('o')}
          {this.renderSquare('e')}
          <input className="square black" disabled />
          {this.renderSquare('o', true)}
          {this.renderSquare('p')}
          {this.renderSquare('a')}
          {this.renderSquare('l')}
          {/* 3rd row */}
          {this.renderSquare('t', true)}
          {this.renderSquare('y')}
          {this.renderSquare('r')}
          {this.renderSquare('o')}
          <input className="square black" disabled />
          {this.renderSquare('s', true)}
          {this.renderSquare('t')}
          {this.renderSquare('e')}
          {this.renderSquare('n')}
          {this.renderSquare('t')}
          <input className="square black" disabled />
          {this.renderSquare('n', true)}
          {this.renderSquare('o')}
          {this.renderSquare('r')}
          {this.renderSquare('a')}
          {/* 4th row */}
          {this.renderSquare('c', true)}
          {this.renderSquare('h')}
          {this.renderSquare('a')}
          {this.renderSquare('r')}
          {this.renderSquare('l', true)}
          {this.renderSquare('o')}
          {this.renderSquare('t')}
          {this.renderSquare('t')}
          {this.renderSquare('e')}
          <input className="square black" disabled />
          {this.renderSquare('c', true)}
          {this.renderSquare('a')}
          {this.renderSquare('t')}
          {this.renderSquare('a')}
          {this.renderSquare('n')}
          {/* 5th row */}
          {this.renderSquare('h', true)}
          {this.renderSquare('o')}
          {this.renderSquare('m')}
          {this.renderSquare('m')}
          {this.renderSquare('e')}
          <input className="square black" disabled />
          {this.renderSquare('l', true)}
          {this.renderSquare('a')}
          {this.renderSquare('y')}
          {this.renderSquare('m', true)}
          {this.renderSquare('e')}
          {this.renderSquare('n')}
          <input className="square black" disabled />
          <input className="square black" disabled />
          <input className="square black" disabled />
          {/* 6th row */}
          {this.renderSquare('y', true)}
          {this.renderSquare('o')}
          {this.renderSquare('o')}
          <input className="square black" disabled />
          {this.renderSquare('a', true)}
          {this.renderSquare('g', true)}
          {this.renderSquare('e')}
          {this.renderSquare('n')}
          {this.renderSquare('d')}
          {this.renderSquare('a')}
          {this.renderSquare('s')}
          <input className="square black" disabled />
          {this.renderSquare('e', true)}
          {this.renderSquare('m', true)}
          {this.renderSquare('u', true)}
          {/* 7th row */}
          <input className="square black" disabled />
          <input className="square black" disabled />
          {this.renderSquare('u', true)}
          {this.renderSquare('s', true)}
          {this.renderSquare('s')}
          {this.renderSquare('r')}
          <input className="square black" disabled />
          {this.renderSquare('s', true)}
          {this.renderSquare('e')}
          {this.renderSquare('l')}
          <input className="square black" disabled />
          {this.renderSquare('s', true)}
          {this.renderSquare('l')}
          {this.renderSquare('a')}
          {this.renderSquare('v')}
          {/* 8th row */}
          {this.renderSquare('r', true)}
          {this.renderSquare('u', true)}
          {this.renderSquare('n')}
          {this.renderSquare('a')}
          {this.renderSquare('t')}
          {this.renderSquare('a')}
          {this.renderSquare('b', true)}
          <input className="square black" disabled />
          {this.renderSquare('w', true)}
          {this.renderSquare('i')}
          {this.renderSquare('c', true)}
          {this.renderSquare('h')}
          {this.renderSquare('i')}
          {this.renderSquare('t')}
          {this.renderSquare('a')}
          {/* 9th row */}
          {this.renderSquare('l', true)}
          {this.renderSquare('a')}
          {this.renderSquare('t')}
          {this.renderSquare('s')}
          <input className="square black" disabled />
          {this.renderSquare('m', true)}
          {this.renderSquare('r')}
          {this.renderSquare('s', true)}
          <input className="square black" disabled />
          {this.renderSquare('b', true)}
          {this.renderSquare('a')}
          {this.renderSquare('e')}
          {this.renderSquare('z')}
          <input className="square black" disabled />
          <input className="square black" disabled />
          {/* 10th row */}
          {this.renderSquare('s', true)}
          {this.renderSquare('e')}
          {this.renderSquare('s')}
          <input className="square black" disabled />
          {this.renderSquare('o', true)}
          {this.renderSquare('p')}
          {this.renderSquare('o')}
          {this.renderSquare('s')}
          {this.renderSquare('s', true)}
          {this.renderSquare('u')}
          {this.renderSquare('m')}
          <input className="square black" disabled />
          {this.renderSquare('a', true)}
          {this.renderSquare('p', true)}
          {this.renderSquare('e', true)}
          {/* 11th row */}
          <input className="square black" disabled />
          <input className="square black" disabled />
          <input className="square black" disabled />
          {this.renderSquare('c', true)}
          {this.renderSquare('h')}
          {this.renderSquare('a')}
          {this.renderSquare('c')}
          {this.renderSquare('h')}
          {this.renderSquare('a')}
          <input className="square black" disabled />
          {this.renderSquare('e', true)}
          {this.renderSquare('m', true)}
          {this.renderSquare('b')}
          {this.renderSquare('e')}
          {this.renderSquare('d')}
          {/* 12th row */}
          {this.renderSquare('p', true)}
          {this.renderSquare('h', true)}
          {this.renderSquare('i', true)}
          {this.renderSquare('s')}
          {this.renderSquare('h')}
          <input className="square black" disabled />
          {this.renderSquare('c', true)}
          {this.renderSquare('a')}
          {this.renderSquare('v')}
          {this.renderSquare('a', true)}
          {this.renderSquare('l')}
          {this.renderSquare('i')}
          {this.renderSquare('e')}
          {this.renderSquare('r')}
          {this.renderSquare('s')}
          {/* 13th row */}
          {this.renderSquare('s', true)}
          {this.renderSquare('o')}
          {this.renderSquare('a')}
          {this.renderSquare('p')}
          <input className="square black" disabled />
          {this.renderSquare('r', true)}
          {this.renderSquare('o')}
          {this.renderSquare('p')}
          {this.renderSquare('e')}
          {this.renderSquare('s')}
          <input className="square black" disabled />
          {this.renderSquare('a', true)}
          {this.renderSquare('t')}
          {this.renderSquare('m')}
          {this.renderSquare('e')}
          {/* 14th row */}
          {this.renderSquare('a', true)}
          {this.renderSquare('l')}
          {this.renderSquare('t')}
          {this.renderSquare('a')}
          <input className="square black" disabled />
          {this.renderSquare('p', true)}
          {this.renderSquare('l')}
          {this.renderSquare('e')}
          {this.renderSquare('a')}
          {this.renderSquare('s')}
          <input className="square black" disabled />
          {this.renderSquare('t', true)}
          {this.renderSquare('r')}
          {this.renderSquare('u')}
          {this.renderSquare('e')}
          {/* 15th row */}
          {this.renderSquare('t', true)}
          {this.renderSquare('e')}
          {this.renderSquare('e')}
          {this.renderSquare('n')}
          <input className="square black" disabled />
          {this.renderSquare('m', true)}
          {this.renderSquare('i')}
          {this.renderSquare('d')}
          {this.renderSquare('s')}
          {this.renderSquare('t')}
          <input className="square black" disabled />
          {this.renderSquare('a', true)}
          {this.renderSquare('i')}
          {this.renderSquare('d')}
          {this.renderSquare('s')}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        {/* <Sample /> */}
        <Across />
        <Down />
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<Game />, document.getElementById('root'));
