import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class GameStatusBar extends React.Component {
  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          marginTop: 10,
          marginLeft: 10,
          marginRight: 10,
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View>
          <Icon.Button
            name="ios-flash-outline"
            size={18}
            color="#fff"
            backgroundColor="#331919">
            1 / 6
          </Icon.Button>
        </View>
        <View>
          <Text
            style={{
              fontSize: 16,
              color: '#fff',
            }}>
            VS CPU
          </Text>
        </View>
        <View>
          <Icon.Button
            name="logo-usd"
            size={18}
            color="#fff"
            backgroundColor="#331919">
            5000
          </Icon.Button>
        </View>
      </View>
    );
  }
}

export default GameStatusBar;
