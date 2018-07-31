import React from 'react';
import { TouchableOpacity, Image } from 'react-native';

export default class Card extends React.Component {
  render() {
    return (
      <TouchableOpacity>
        <Image
          resize="stretch"
          source={require('../assets/card/2_of_clubs.png')}
          style={[
            commonStyle.card,
            this.props.style,
            { transform: [{ rotate: this.props.rotation + 'deg' }] },
          ]}
        />
      </TouchableOpacity>
    );
  }
}
