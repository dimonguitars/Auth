import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import { createStore } from 'redux';
import reducers from './src/reducers/';


const store = createStore(reducers);

class App extends Component {
  componentWillMount() {
    const config = {
    apiKey: 'AIzaSyA3Tm2pP6q67Ufew5EvjH_yIXX2uIpTqoQ',
    authDomain: 'manager-ca45c.firebaseapp.com',
    databaseURL: 'https://manager-ca45c.firebaseio.com',
    projectId: 'manager-ca45c',
    storageBucket: 'manager-ca45c.appspot.com',
    messagingSenderId: '1072341397153'
  };
  firebase.initializeApp(config);
  }
  render() {
    return (
      <Provider store={store}>
        <View>
          <Text>Open on your app!</Text>
        </View>
      </Provider>
    );
  }
}

export default App;
