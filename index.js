import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import store from './app/config/store';
import Game from './app/Game';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Game />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('otuzbir', () => App);
