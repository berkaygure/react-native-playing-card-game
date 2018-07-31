import React from 'react';
import { View, StatusBar, ImageBackground, Button } from 'react-native';

class GameMenu extends React.Component {
  render() {
    return (
      <ImageBackground source={require('../assets/bg.png')} style={{ flex: 1 }}>
        <StatusBar hidden={true} />
        <View>
          <Button title="Test" />
        </View>
      </ImageBackground>
    );
  }
}

export default GameMenu;
