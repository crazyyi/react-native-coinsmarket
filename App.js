import React, {Component} from 'react';
import { StyleSheet, Button, Text, View, Image } from 'react-native';
import {Provider} from 'react-redux';
import {StackNavigator} from 'react-navigation';
import Pager from './src/components/Pager';
import {Header, CryptoContainer} from './src/components';
import Store from './src/Store';

class RootStack extends Component {
  render() {
    return (
      <View>
        <Header />
        <CryptoContainer />
      </View>
    )
  }
}

export default class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <RootStack />
      </Provider>
    );
  }
}
