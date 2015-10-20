import StyleSheet from 'react-style';


module.exports = StyleSheet.create({
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
    textDecoration: 'none',
    cursor: 'pointer'
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
});
