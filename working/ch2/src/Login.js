/**
*
*
*
*
*
*/

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

/*
*
*   https://github.com/xinthink/react-native-material-kit
*   http://www.xinthink.com/react-native-material-kit/docs/index.html
*
*/
import { MKTextField, MKColor, MKButton } from 'react-native-material-kit';

/*
*   create LoginButton
*
*/
const LoginButton = MKButton.coloredButton()
    .withText('LOGIN')
    .build();

/*
*
*/

export default class Login extends Component {
  state = {
    email: '',
    password: '',
  };

  /*
  *   create onButtonPress
  *   called by this.onButtonPress.bind(this)
  *
  */
  onButtonPress() {
      console.log('Clicked button!!!');
  }


  render() {
    const { form, fieldStyles, loginButtonArea, errorMessage, welcome, container } = styles;

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
            Welcome to the CRM!!!!!
        </Text>
        <MKTextField
            text={this.state.email}
            onTextChange={email => this.setState({ email })}
            textInputStyle={fieldStyles}
            placeholder={'Email...'}
            tintColor={MKColor.Teal}
        />
        <MKTextField
            text={this.state.password}
            onTextChange={password => this.setState({ password })}
            textInputStyle={fieldStyles}
            placeholder={'Password...'}
            tintColor={MKColor.Teal}
            password={true}
        />
        <Text style={errorMessage}>
            {this.state.error}
        </Text>
        <View style={loginButtonArea}>
            <LoginButton onPress={this.onButtonPress.bind(this)} />
        </View>
      </View>
    );
  }
}


/*
*
*   https://facebook.github.io/react-native/docs/stylesheet.html
*/

const styles = StyleSheet.create({
    form: {
        paddingBottom: 10,
        width: 200,
    },
    fieldStyles: {
        height: 40,
        color: MKColor.Orange,
        width: 200,
    },
    loginButtonArea: {
        marginTop: 20,
    },
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
});
