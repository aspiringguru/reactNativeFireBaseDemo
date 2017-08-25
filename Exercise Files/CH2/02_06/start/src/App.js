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
});

export default class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyDpMeFiwpZvWCBTkK5CvGiQrq0IWBdOPks",
            authDomain: "crmlinkedin2.firebaseapp.com",
            databaseURL: "https://crmlinkedin2.firebaseio.com",
            storageBucket: "crmlinkedin2.appspot.com",
            messagingSenderId: "349972667113"
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
