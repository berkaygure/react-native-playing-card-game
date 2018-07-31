import React from 'react';
import { View } from 'react-native';
import PlayerMenuButton from './PlayerMenuButton';

export default class PlayerMenu extends React.Component {
  render() {
    return (
      <View style={MenuStyle.container}>
        <PlayerMenuButton text="Kart İste" icon="ios-arrow-dropup-outline" />
        <PlayerMenuButton text="Pas geç" icon="ios-close-circle-outline" />
        <PlayerMenuButton text="Elini Aç" icon="ios-apps-outline" />
        <PlayerMenuButton text="Ayarlar" icon="md-settings" />
      </View>
    );
  }
}

const MenuStyle = {
  container: {
    position: 'absolute',
    bottom: 0,
    height: 100,
    left: 0,
    right: 0,
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'rgba(55, 55, 55, 0.6)',
  },
};
