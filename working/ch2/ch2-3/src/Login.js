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

  /*
  *     while page is loading, display loader symbol
  *     when page is loaded insert button
  *
  */
  renderLoader() {
      if (this.state.loading) {
        return <Loader size="large"/>
      } else {
        return <LoginButton onPress={this.onButtonPress.bind(this)} />
      }
  }
  /*
  *
  *   nb: when const { blah... } = styles is used
  *   <View style={styles.container}> is reduced to <View style={container}>
  *   NB: need to load all the styles required o/wise wont work.
  */
  render() {
    const { form, fieldStyles, loginButtonArea, errorMessage, welcome, container } = styles;

    return (
      <View style={form}>
        <Text>Login or create an account</Text>
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
            {this.renderLoader() }
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
