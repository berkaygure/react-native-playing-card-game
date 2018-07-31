import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import GameStatusBar from './GameStatusBar';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import commonStyle from '../styles';
import * as Actions from '../actions';

class GameArea extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
        }}>
        <GameStatusBar />
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          {this.props.deck.length > 0 ? (
            <TouchableOpacity
              onPress={() => {
                this.props.cardRequest();
              }}>
              <Image
                resizeMode="stretch"
                source={require('../assets/card/back.png')}
                style={[commonStyle.card]}
              />
            </TouchableOpacity>
          ) : null}
          {this.props.openDeck.length > 0 ? (
            <TouchableOpacity
              onPress={() => {
                this.props.addMyDeck();
              }}>
              <Image
                resizeMode="stretch"
                source={
                  this.props.openDeck[this.props.openDeck.length - 1].image
                }
                style={[commonStyle.card]}
              />
            </TouchableOpacity>
          ) : null}
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    openDeck: state.dataReducer.openDeck,
    deck: state.dataReducer.deck,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(GameArea);
