import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class PlayerMenu extends React.Component {
  render() {
    return (
      <TouchableOpacity
        disabled={this.props.disabled}
        style={{
          backgroundColor: '#331919',
          padding: 5,
          borderRadius: 5,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Icon color={'white'} name={this.props.icon} size={30} />
        <Text style={{ color: '#fff' }}>{this.props.text}</Text>
      </TouchableOpacity>
    );
  }
}
