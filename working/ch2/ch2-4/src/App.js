/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';
import Login from './Login';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
          apiKey: "AIzaSyDn9IlrDz889NFiJH_mDEQ1mfPjm1pFa2E",
          authDomain: "crm1-48bcb.firebaseapp.com",
          databaseURL: "https://crm1-48bcb.firebaseio.com",
          projectId: "crm1-48bcb",
          storageBucket: "crm1-48bcb.appspot.com",
          messagingSenderId: "629373816984"
        });
    }
  render() {
    return (
      <View style={styles.container}>
        <Login />
      </View>
    );
  }
}
