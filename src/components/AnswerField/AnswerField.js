'use strict';

import React from 'react';
import StyleSheet from 'react-style';


const styles = StyleSheet.create({
  input: {
    color: '#c7ff4a',
    borderWidth: 4,
    fontSize: 36,
    fontFamily: 'courier',
    margin: 5,
    height: 60,
    width: 100,
    borderColor: '#c7ff4a',
    backgroundColor: '#5d5d5d',
    textAlign: 'center'
  }
});

export default class AnswerField extends React.Component {
  render () {
    return (
      <input
        id="input-field"
        className="form-control"
        type="text"
        name="answer"
        style={styles.input}
        value={this.props.answer}
        readOnly={!this.props.isEditable}
        onFocus={this.props.onFocusTextInput}
        onChange={this.props.onChangeTextInput} />
    );
  }
};
