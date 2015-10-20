import React from 'react';
import assign from 'object-assign';
import GameLayout from './components/GameLayout/GameLayout';

const { Component, StyleSheet } = React;

const backgroundColors = [
  '#8BD47D', // green
  '#B43CB0', // purple
  '#3F51B5', // indigo
  '#FFC107', // yellow
  '#F44336', // orange-red
  '#00BCD4'  // cyan
];

export default class Main extends Component {

  onMobileUI () {
    if (window.innerWidth <= 475) {
      styles.container.paddingTop = null;
    }

    if (window.innerWidth <= 330) {
      styles.widget.fontSize = 14;
    }
  }

  render () {

    this.onMobileUI();

    return (
      <div style={styles.container} className="container">
        {/* Game UI */}
        <GameLayout />
        {/* Content */}
        <section className="row" style={{ fontFamily: 'courier', padding: 20, maxWidth: 400, margin: '0 auto', border: '0x solid'}}>
          <div style={{ fontSize: 28 }}>
            <span><a name="howToPlay" style={{ color: '#000', textDecoration: 'none' }}>How to Play</a></span>
          </div>
          <div>
            <ul style={{ listStyleType: 'decimal' }}>
              <li style={styles.li}>
                <span style={{ fontWeight: 'bold', letterSpacing: 3 }}>Example</span>
                <table className="table-bordered" style={{ marginTop: 15, marginLeft: -25 }}>
                  <tr>
                    <section style={{ paddingTop: 10, marginLeft: -25 }}>
                    <div style={{ fontSize: 16, paddingBottom: 15 }}>Translating binary ... </div>
                      <div style={{ fontSize: 16, paddingBottom: 15 }}>Using the table below add together the values where 1 is, and voila.</div>
                      <div style={{ fontSize: 16 }}>10000001 => 128 + 1 = 129</div>
                    </section>
                  </tr>
                  <tr>
                    <td style={ assign({}, styles.td, { color: '#c7ff4a', backgroundColor: '#5d5d5d' }) }>128</td>
                    <td style={styles.td}>64</td>
                    <td style={styles.td}>32</td>
                    <td style={styles.td}>16</td>
                    <td style={styles.td}>8</td>
                    <td style={styles.td}>4</td>
                    <td style={styles.td}>2</td>
                    <td style={ assign({}, styles.td, { color: '#c7ff4a', backgroundColor: '#5d5d5d' }) }>1</td>
                  </tr>
                  <tr>
                    <td style={styles.td}>1</td>
                    <td style={styles.td}>0</td>
                    <td style={styles.td}>0</td>
                    <td style={styles.td}>0</td>
                    <td style={styles.td}>0</td>
                    <td style={styles.td}>0</td>
                    <td style={styles.td}>0</td>
                    <td style={styles.td}>1</td>
                  </tr>
                </table>
              </li>
              <li style={styles.li}>
                <span style={{ fontWeight: 'bold', letterSpacing: 3 }}>Gameplay</span>
                <div style={styles.content}>Translate 8-bit binary numbers into their decimal equivalent as many times as possible in 30 seconds.</div>
                <div style={styles.content}>For each correct answer your points increase by 2^n (0 to 1 to 2 to 4 to 8 etc).</div>
                <div style={styles.content}>When you get to 2048 points, you win! (original)</div>
              </li>
              <li style={styles.li}>
                <span style={{ fontWeight: 'bold', letterSpacing: 3 }}>Binary</span>
                <div style={styles.content}>According to Wikipedia, a binary number is a number expressed in the binary numeral system, or base-2 numeral system, which represents numeric values using two different symbols: typically 0 and 1.</div>
              </li>
              <li style={styles.li}>
                <span style={{ fontWeight: 'bold', letterSpacing: 3 }}>WTF</span>

                <div style={styles.content}>
                  How do I convert binary?
                  <a target="_new" href="https://en.m.wikipedia.org/wiki/Binary_number#Counting_in_binary" style={assign({}, styles.hyperlink, { paddingRight: 5 })}>Explanation, animations, etc.</a>
                   via Wikipedia.
                </div>
              </li>
            </ul>
          </div>
          <div style={{ fontSize: 28 }}>
            <span>About</span>
            <section style={{ paddingTop: 10 }}>
              <div style={{ fontSize: 16, paddingBottom: 15 }}>
                <span style={styles.byte}>Byte</span> was designed and built at <a target="_new" style={styles.hyperlink} href="https://facebook.com/hubsycafe">hubsy</a> in Paris, France where coffee makes everything possible.
              </div>
              <div style={{ fontSize: 16, paddingBottom: 15 }}>The game was made for fun by <a target="_new" style={styles.hyperlink} href="http://whoami.pizza">me</a> (isb).</div>
              <div style={{ fontSize: 16, paddingBottom: 15 }}>
                <a target="_new" href="https://github.com/ghostsnstuff/byte">
                  <img src="http://cdn.flaticon.com/png/256/25231.png" height="40" width="40" />
                </a>
              </div>
              <div style={{ fontSize: 16, paddingBottom: 15, border: '0px solid' }}>
                <img style={{ border: '0px solid', verticalAlign: 'middle', margin: 'auto', display: 'table-cell' }} src="http://ferd.ca/static/img/printf/trashcan.png"/>
              </div>
            </section>
          </div>
        </section>
      </div>
    );
  }
}

const styles = {
  flexcontainerRow: {
     display: '-webkit-flex',
     display: 'flex',
     WebkitFlexDirection: 'row',
     flexDirection: 'row',
     WebkitAlignItems: 'center',
     alignItems: 'center',
     WebkitJustifyContent: 'center',
     justifyContent: 'center',
  },
  container: {
    padding: 10,
    paddingTop: 45,
    maxWidth: 500,
    border: '0px solid',
    height: '100%'
  },
  main: {
    border: '2px dotted #c7ff4a',
    padding: 25,
    paddingBottom: 35,
    maxWidth: 400,
    margin: '0 auto',
    backgroundColor: '#5d5d5d',
  },
  header: {
    border: '0px solid',
    padding: 10,
    textAlign: 'center'
  },
  navigation: {
    border: '0px solid',
    paddingTop: 10,
    paddingBottom: 10
  },
  content: {
    fontSize: 16,
    border: '0px solid',
    paddingTop: 15,
    marginLeft: -25,
    fontWeight: '200'
  },
  byte: {
    letterSpacing: 1,
    color: '#c7ff4a',
    backgroundColor: '#5d5d5d',
    padding: 2,
    paddingLeft: 5,
    paddingRight: 5
  },
  GameLaoutContainer: {
    border: '0px solid',
    height: 90
  },
  hyperlink: {
    color: 'blue',
    textDecoration: 'underline'
  },
  footer: {
    borderWidth: 0,
    marginTop: 25
  },
  logo: {
    fontSize: 30,
    color: '#c7ff4a',
    fontFamily: 'courier',
    letterSpacing: 6,
    border: '0px solid',

  },
  widget: {
    color: '#c7ff4a',
    fontFamily: 'courier',
    fontSize: 18,
    border: '1px solid #c7ff4a',
    borderWidth: 2,
    padding: 5,
    margin: 5,
    paddingLeft: 9,
    paddingRight: 9,
  },
  binaryString: {
    border: '0px solid',
    fontSize: 36,
    letterSpacing: 8,
    color: '#c7ff4a',
    fontFamily: 'courier',
    fontWeight: '400'
  },
  binaryStringContainer: {
    border: '0px solid',
    height: 70,
  },
  equals: {
    border: '0px solid',
    margin: 5,
    marginRight: 10,
    height: 100,
    width: 40,
    fontSize: 60,
    textAlign: 'center',
    color: '#c7ff4a'
  },
  textField: {
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
  },
  a: {
    color: '#c7ff4a',
    textDecoration: 'none'
  },
  li: {
    fontSize: 20,
    marginTop: 15
  },
  td: {
    padding: 5,
    paddingLeft: 8,
    paddingRight: 8,
    width: 50,
    textAlign: 'center'
  },
  statsOuterContainer: {
    border: '0px solid',
    height: 50
  },
  statsInnerContainer: {
    border: '0px solid',
  },
  stat: {
    border: '0px solid',
    margin: 10,
    fontSize: 22,
    fontFamily: 'courier',
    fontWeight: '500',
    color: '#c7ff4a'
  }
};
