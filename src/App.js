import React from 'react';
import logo from './logo.svg';
import './App.css';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

class Board extends React.Component {
  renderSquare(i) {
    return <Square value={i} />;
  }
}

class Square extends React.Component {
  render() {
    return (
      <button className="square">
        {this.props.value}
      </button>
    );
  }
}


class SquareNull extends React.Component {
  render() {
    return (
      <button className="square-null">
        {this.props.value}
      </button>
    );
  }
}


class SquareLow extends React.Component {
  render() {
    return (
      <button className="square-low">
        {this.props.value}
      </button>
    );
  }
}

class SquareNormal extends React.Component {
  render() {
    return (
      <button className="square-normal">
        {this.props.value}
      </button>
    );
  }
}

class SquareHigh extends React.Component {
  render() {
    return (
      <button className="square-high">
        {this.props.value}
      </button>
    );
  }
}

class LineparineTable extends React.Component {
  renderSquare(i) {
    return <Square value={i} />;
  }

  renderSquareFreq(i) {
    if (i === null) {
      return <SquareNull />;
    } else if (i <= 0.1) {
      return <SquareLow value="×" />;
    } else if (i < 0.4) {
      return <SquareLow />;
    } else if (i <= 0.6) {
      return <SquareNormal />;
    } else if (i < 0.9) {
      return <SquareHigh value="○" />;
    } else {
      return <SquareHigh />;
    }
  }

  render() {
    let letters = [
      "i", "y", "u", "o", "e", "a",
      "p", "fh", "f", "t", "c", "x",
      "k", "q", "h", "r", "z", "m",
      "n", "r", "l", "j", "w", "b",
      "vh", "v", "d", "s", "g", "dz",
      "ph", "ts", "ch", "ng", "sh",
      "th", "dh", "kh", "rkh", "rl",
    ]
    let freq = [
      [0.00, 0.50, 0.25, 0.03, 0.01, 0.10, 0.07, null, 0.10, 0.13, 0.04, 0.17, null, null, 0.33, 0.01, null, 0.03, 0.17, 0.01, 0.07, 0.02, null, null, null, 0.25, 0.00, 0.00, null, null, null, null, null, null, 0.33, null, 0.33, null, null, 0.33],
      [0.20, null, null, 0.46, 0.04, 0.60, null, null, null, null, 0.33, null, 0.25, null, null, 0.06, null, 0.20, null, 0.06, 0.20, 0.11, null, null, null, null, 0.05, 0.08, null, null, null, null, null, null, null, null, null, null, null, null],
      [0.07, null, 0.33, 0.06, 0.03, 0.17, 0.25, null, 0.14, 0.09, 0.11, 0.13, 0.14, null, null, 0.07, 0.33, 0.03, 0.20, 0.07, 0.14, 0.05, null, 0.33, null, null, 0.04, 0.01, 0.33, null, 0.17, null, null, null, null, null, null, null, null, null],
      [0.05, null, null, 0.18, 0.52, 0.67, 0.07, null, null, 0.13, 0.03, null, null, null, null, 0.03, null, 0.09, 0.33, 0.03, 0.03, 0.44, null, 0.13, null, null, 0.04, 0.01, null, null, null, null, null, null, null, null, null, null, null, null],
      [0.02, null, 0.09, 0.21, 0.10, 0.10, 0.10, null, 0.25, 0.02, 0.01, 0.02, null, null, 0.33, 0.00, null, 0.04, 0.03, 0.00, 0.01, 0.01, 0.33, 0.33, null, 0.33, 0.01, 0.00, 0.17, null, null, null, null, null, 0.33, null, null, null, null, 0.20],
      [0.20, 0.50, 0.15, 0.16, 0.22, 0.47, 0.11, null, 0.13, 0.02, 0.02, 0.03, 0.02, null, 0.33, 0.01, 0.33, 0.02, 0.04, 0.01, 0.02, 0.01, 0.33, 0.14, null, 0.20, 0.00, 0.00, null, null, null, null, null, null, 0.33, null, null, null, null, null],
      [0.08, null, 0.25, 0.05, 0.02, 0.17, null, null, null, 0.33, 0.60, 0.33, null, null, null, 0.25, 0.33, null, null, 0.25, 0.70, 0.25, 0.33, null, null, null, 0.75, 0.78, null, null, null, null, null, null, 0.67, null, null, null, null, null],
      [0.67, null, null, null, 0.33, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      [0.25, 0.14, 0.25, 0.02, 0.01, 0.17, null, null, 0.67, null, 0.75, 0.75, null, null, null, 0.13, null, null, 0.50, 0.13, null, null, null, null, null, null, 0.50, 0.88, null, null, null, null, null, null, null, null, null, null, null, null],
      [0.03, null, 0.20, 0.00, 0.01, 0.03, 0.67, null, 0.67, 0.88, 0.67, 0.75, null, null, 0.89, 0.22, 0.67, 0.67, 0.95, 0.22, 0.76, 0.04, null, 0.75, null, null, 0.91, 0.84, null, null, null, null, null, null, 0.67, null, null, null, null, 0.67],
      [0.25, null, null, 0.01, 0.06, 0.20, null, null, 0.17, 0.20, null, 0.83, 0.33, 0.33, 0.33, 0.50, null, 0.33, 0.33, 0.50, 0.67, 0.33, null, null, null, 0.33, 0.75, null, null, null, null, null, 0.33, null, null, null, null, null, null, null],
      [0.06, null, 0.03, 0.01, 0.01, 0.08, 0.75, null, 0.25, 0.67, 0.86, 0.67, null, null, 0.67, null, null, null, null, null, 0.78, 0.18, null, 0.67, null, null, 0.86, 0.93, null, null, null, null, null, null, null, null, null, null, null, null],
      [0.01, null, 0.13, 0.01, 0.01, 0.13, null, null, 0.80, 0.67, 0.75, null, null, null, null, 0.73, null, 0.67, 0.86, 0.73, 0.56, 0.43, null, 0.25, null, 0.67, 0.96, 0.90, null, null, null, null, null, null, null, null, null, null, null, null],
      [0.33, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      [0.33, null, null, 0.07, 0.20, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      [0.19, 0.17, null, 0.60, 0.22, 0.07, 0.20, 0.33, 0.03, 0.00, 0.20, 0.17, 0.17, null, 0.67, 0.13, 0.33, 0.11, 0.01, 0.13, 0.01, 0.03, null, 0.33, null, 0.04, 0.08, 0.02, 0.07, null, null, null, null, null, null, null, null, null, null, null],
      [0.13, null, null, 0.05, 0.02, 0.33, 0.67, null, null, null, 0.67, null, 0.67, null, null, null, null, null, 0.04, null, null, 0.17, null, null, null, null, null, 0.67, null, null, null, null, null, null, null, null, null, null, null, null],
      [0.24, 0.14, 0.20, 0.08, 0.04, 0.08, null, null, null, 0.50, 0.81, null, null, null, null, 0.55, null, 0.50, 0.75, 0.55, 0.67, 0.29, null, null, null, null, 0.99, 0.97, null, 0.33, null, null, null, null, 0.67, null, null, null, null, null],
      [0.01, 0.33, 0.04, 0.00, 0.01, 0.06, 0.42, null, 0.20, 0.01, 0.78, 0.60, 0.33, 0.10, null, 0.91, null, 0.83, 0.67, 0.91, 0.73, 0.51, null, 0.50, null, 0.67, 0.56, 0.75, null, null, null, null, null, null, 0.67, null, null, null, null, null],
      [0.19, 0.17, null, 0.60, 0.22, 0.07, 0.20, 0.33, 0.03, 0.00, 0.20, 0.17, 0.17, null, 0.67, 0.13, 0.33, 0.11, 0.01, 0.13, 0.01, 0.03, null, 0.33, null, 0.04, 0.08, 0.02, 0.07, null, null, null, null, null, null, null, null, null, null, null],
      [0.01, 0.25, 0.11, 0.00, 0.00, 0.01, 0.75, null, 0.33, 0.18, 0.91, 0.60, 0.17, 0.33, null, 0.81, null, 0.02, 0.67, 0.81, 0.57, 0.05, null, 0.67, null, 0.33, 0.46, 0.88, null, null, null, null, null, null, null, null, null, null, null, null],
      [0.14, null, 0.07, 0.02, 0.03, 0.20, null, null, null, null, 0.80, null, null, null, null, 0.25, null, null, 0.75, 0.25, 0.56, 0.50, 0.67, null, null, null, 0.71, 0.55, null, null, null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      [0.08, 0.33, null, 0.03, 0.02, 0.04, null, null, 0.67, null, null, null, null, null, null, 0.14, null, null, null, 0.14, 0.83, 0.17, null, null, null, null, 0.30, 0.80, null, null, null, null, null, null, null, null, null, null, null, null],
      [0.07, null, null, 0.02, 0.02, 0.11, null, null, null, 0.67, 0.75, null, null, null, null, 0.33, null, null, 0.67, 0.33, 0.75, 0.60, 0.67, null, null, null, 0.70, 0.68, null, null, null, null, null, null, 0.75, null, null, null, null, null],
      [0.11, 0.25, 0.13, 0.01, 0.01, 0.10, 0.44, null, 0.67, 0.23, 0.82, 0.87, null, null, null, 0.77, null, 0.46, 0.60, 0.77, 0.67, 0.02, null, 0.07, null, 0.33, 0.90, 0.90, null, null, null, null, null, null, null, null, null, null, null, null],
      [0.05, null, 0.33, 0.08, 0.04, 0.20, null, null, null, 0.67, 0.83, 0.67, null, null, null, 0.25, null, 0.33, 0.20, 0.25, 0.17, null, null, 0.67, null, null, 0.71, 0.70, null, null, null, null, null, null, null, null, null, null, null, null],
      [null, null, null, 0.33, 0.33, 0.01, null, null, null, null, 0.67, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0.67, null, null, null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      [0.33, null, null, 0.25, 0.33, 0.25, null, null, null, null, null, 0.50, null, null, null, null, null, null, null, null, 0.50, null, null, null, null, null, 0.50, 0.69, null, null, null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, 0.33, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, 0.33, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, 0.33, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0.67, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      [0.12, null, 0.33, 0.05, 0.04, 0.11, null, null, 0.75, null, null, null, null, null, null, null, null, null, 0.67, null, 0.80, 0.75, null, null, null, 0.67, 0.38, 0.58, null, null, null, null, null, null, null, null, null, null, null, null],
    ]
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(null)}
          {letters.map((letter) => { return this.renderSquare(letter) })}
        </div>
        {letters.map((letter) => {
          return (
            <div className="board-row">
              {this.renderSquare(letter)}
              {freq[letters.findIndex((l) => { return l === letter })].map((freq) => { return this.renderSquareFreq(freq) })}
            </div>
          );
        })}
      </div>
    );
  }
}
function App() {
  return (
    <LineparineTable />
  );
}

export default App;