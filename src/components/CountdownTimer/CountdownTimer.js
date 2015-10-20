'use strict';

import React from 'react';


var INTERVAL_ID;

export default class CountdownTimer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      elapsed: this.props.elapsed,
      INTERVAL_ID: null,
    };
    this.tick = this.tick.bind(this);
  }

  propTypes: {
    elapsed: React.PropTypes.number.isRequired,
    interval: React.PropTypes.number,
    onCompleteCallback: React.PropTypes.func
  }

  componentWillReceiveProps (newProps, oldProps) {
    if (newProps.shouldReset) {
      this.setState({
        elapsed: 30000
      });

      INTERVAL_ID = clearInterval(INTERVAL_ID);

      this.props.clearShouldReset();
    }
  }

  componentDidUpdate () {
    if (this.props.start && !INTERVAL_ID) {
      INTERVAL_ID = setInterval(function () {
        this.tick()
      }.bind(this), this.props.interval);
    }
  }

  componentWillUnmount  () {
    clearInterval(INTERVAL_ID);
  }

  tick  () {
    if (this.state.elapsed > 0) {
      this.setState({
        elapsed: this.state.elapsed - this.props.interval
      });
    } else {
      this.props.onCompleteCallback()
      clearInterval(INTERVAL_ID);
    }
  }

  render () {
    return (
      <span>
        {(this.state.elapsed/1000).toFixed(1) + ' s'}
      </span>
    );
  }
}
