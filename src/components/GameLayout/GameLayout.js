'use strict';

import React          from 'react';
import StyleSheet     from 'react-style';
import assign         from 'object-assign';
import styles         from './styles';
import CountdownTimer from '../CountdownTimer/CountdownTimer';
import AnswerField    from '../AnswerField/AnswerField.js';


const backgroundColors = [
  '#8BD47D', // green
  '#B43CB0', // purple
  '#3F51B5', // indigo
  '#FFC107', // yellow
  '#F44336', // orange-red
  '#00BCD4'  // cyan
];


export default class GameLayout extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      binaryString: this.genRandomBinaryString(255, 0),
      answer: '',
      score: 0,
      elapsed: 30000,
      isEditable: true,
      isPlaying: false,
      shouldReset: false,
      highScore: 0,
      backgroundColorIdx: 0
    };
    this.onChangeTextInput = this.onChangeTextInput.bind(this);
    this.onFocusTextInput = this.onFocusTextInput.bind(this);
    this.onNewGame = this.onNewGame.bind(this);
    this.onGameOver = this.onGameOver.bind(this);
    this.onStartGame = this.onStartGame.bind(this);
    this.clearShouldReset = this.clearShouldReset.bind(this);
  }

  componentDidMount () {
    var HIGH_SCORE = window.localStorage.getItem('HIGH_SCORE');
    if (HIGH_SCORE) {
      this.setState({ highScore: HIGH_SCORE });
    } else {
      window.localStorage.setItem('HIGH_SCORE', String(0));
    }
  }

  onChangeTextInput (e) {
    var _state = {};

    if (parseInt(this.state.binaryString, 2) === Number(e.target.value)) {
      _state.binaryString = this.genRandomBinaryString(255, 0);
      _state.answer = '';

      _state.score = this.state.score > 0 ? 2 * this.state.score : 1;

      if (this.state.backgroundColorIdx === backgroundColors.length - 1) {
        _state.backgroundColorIdx = 0;
      } else {
        _state.backgroundColorIdx = this.state.backgroundColorIdx + 1;
      }
    } else {
      _state.answer = e.target.value;
    }

    this.setState(_state);
  }

  onFocusTextInput () {
    if (!this.state.isPlaying) {
      this.setState({
        isPlaying: true
      });
    }
  }

  onNewGame () {
    this.setState({
      binaryString: this.genRandomBinaryString(255, 0),
      isPlaying: false,
      isEditable: false,
      shouldReset: true,
      score: 0,
      answer: '',
      elapsed: 30000,
      backgroundColorIdx: 0
    });

    setTimeout(function () {
      this.setState({ isEditable: true });
    }.bind(this), 500);
  }

  onGameOver () {
    var HIGH_SCORE = window.localStorage.getItem('HIGH_SCORE');
    if (HIGH_SCORE && HIGH_SCORE < this.state.score) {
      window.localStorage.setItem('HIGH_SCORE', String(this.state.score));
      this.setState({ highScore: this.state.score });
    }

    this.setState({
      isPlaying: false,
      isEditable: false,
      answer: ''
    });
  }

  onStartGame () {
    this.setState({
      binaryString: this.genRandomBinaryString(255, 0),
      score: 0,
      answer: '',
      elapsed: 30000
    });
  }

  clearShouldReset () {
    this.setState({ shouldReset: false });
  }

  genRandomBinaryString (max, min) {
    var binaryString = Math.floor(Math.random() * (max + 1 - min) + min).toString(2);

    while (binaryString.length < 8) {
      binaryString = '0' + binaryString;
    }

    return binaryString;
  }

  render () {
    return (
      <main style={styles.main} className="row">
        <div style={styles.header} className="row">
          <span style={styles.logo}>Byte</span>
        </div>
        <div style={styles.navigation} className="row">
          <div style={styles.flexcontainerRow}>
            <span style={styles.widget}>
              <a style={styles.a}
                 onClick={this.onNewGame}>
                  New Game
              </a>
            </span>
            <span style={styles.widget}>High: {this.state.highScore}</span>
            <span style={styles.widget}>
              <a style={styles.a} href="#howToPlay">?</a>
            </span>
          </div>
        </div>
        <div style={assign({}, styles.binaryStringContainer, styles.flexcontainerRow)} className="row">
          <span style={styles.binaryString}>{this.state.binaryString}</span>
        </div>
        <div style={assign({}, styles.GameLaoutContainer, styles.flexcontainerRow)} className="row">
          <span style={styles.equals}>=</span>
          <AnswerField
              answer={this.state.answer}
              onChangeTextInput={this.onChangeTextInput}
              onFocusTextInput={this.onFocusTextInput}
              isEditable={this.state.isPlaying} />
        </div>
        <div style={assign({}, styles.statsOuterContainer, styles.flexcontainerRow)} className="row">
          <span style={styles.stat}>
            <CountdownTimer
              interval={100}
              elapsed={this.state.elapsed}
              start={this.state.isPlaying}
              onCompleteCallback={this.onGameOver}
              shouldReset={this.state.shouldReset}
              clearShouldReset={this.clearShouldReset}  />
          </span>
          <span style={styles.stat}>Score: {this.state.score}</span>
        </div>
      </main>
    );
  }

};
