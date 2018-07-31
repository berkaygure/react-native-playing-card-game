import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { View, StatusBar, ImageBackground } from 'react-native';
import { AnimatedDeck, PlayerMenu, PlayerHand, GameArea } from './components';
import * as Actions from './actions';
import commonStyle from './styles';

class Game extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ImageBackground
        source={require('./assets/bg.png')}
        style={{
          flex: 1,
        }}>
        <StatusBar hidden={true} />
        <View style={commonStyle.gameContainer}>
          <View style={this.getStyle()}>
            {!this.props.gameStart ? <AnimatedDeck /> : <GameArea />}
          </View>
          <PlayerHand />
        </View>
        {this.props.gameStart && this.props.myTurn ? <PlayerMenu /> : null}
      </ImageBackground>
    );
  }

  getStyle() {
    return [
      commonStyle.gameArea,
      this.props.gameStart ? commonStyle.gameStart : commonStyle.gameNotStart,
    ];
  }
}

function mapStateToProps(state) {
  return {
    gameStart: state.dataReducer.gameStart,
    myTurn: state.dataReducer.myTurn,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);
