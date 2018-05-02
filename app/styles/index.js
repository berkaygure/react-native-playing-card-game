import { StyleSheet } from 'react-native';

export default (styles = StyleSheet.create({
  gameContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 1,
  },
  topArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingLeft: 25,
    paddingRight: 25,
  },
  gameArea: {
    flex: 3,
    flexDirection: 'row',
  },
  gameStart: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  gameNotStart: {
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  playerArea: {
    flex: 2,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: 100,
    height: 175,
  },
}));
