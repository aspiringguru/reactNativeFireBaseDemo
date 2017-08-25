/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { connect } from 'react-redux';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons';
import * as actions from '../actions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 353,
    flexWrap: 'wrap',
    paddingTop: 20,
    paddingLeft: 20,
  },
});

class PeopleDetail extends Component {
    handleClick = (link) => {
        Linking.canOpenURL(link).then(suppported => {
            if (supported) {
                Linking.openURL(link);
            } else {
                console.log('Don\'t know how to open URI: ' + link);
            }
        });
    };

  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image 
            source={require('../images/background.jpg')}
            style={[theme.cardImageStyle, styles.image]}
        />
        <EvilIcon name={'user'} size={100} style={styles.icon}/>
        <SimpleIcon name={'close'} size={30} style={styles.closeIcon}
            onPress={() => this.props.noneSelected()} />
        <Text style={[theme.cardTitleStyle, styles.title1]}>{this.props.person.first_name} {this.props.person.last_name}</Text> 
        <Text style={[theme.cardTitleStyle, styles.title2]}>from {this.props.person.company}</Text>
        <View style={styles.textArea}>
           <MaterialIcon name={'phone'} size={40} style={styles.textIcons}/>
           <Text style={theme.cardContentStyle}>{this.props.person.phone}</Text>
        </View>
        <View style={styles.textArea}>
           <MaterialIcon name={'email'} size={40} style={styles.textIcons}/>
           <Text style={theme.cardContentStyle}>{this.props.person.email}</Text>
        </View>
        <View style={styles.textArea}>
           <MaterialIcon name={'assignment'} size={40} style={styles.textIcons}/>
           <Text style={theme.cardContentStyle}>{this.props.person.project}</Text>
        </View>
        <View style={styles.textArea}>
           <MaterialIcon name={'mode-edit'} size={40} style={styles.textIcons}/>
           <Text style={theme.cardContentStyle}>{this.props.person.notes}</Text>
        </View>
        <View style={styles.actionArea}>
            <TouchableOpacity
                onPress={() => { this.handleClick(`tel:${this.props.person.phone}`)}}
            >
                <Image source={require('../images/call@2x.png')} style={styles.actionImage}/>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => { this.handleClick(`sms:${this.props.person.phone}`)}}
            >
                <Image source={require('../images/sms@2x.png')} style={styles.actionImage}/>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => { this.handleClick(`mailto:${this.props.person.email}`)}}
            >
                <Image source={require('../images/email@2x.png')} style={styles.actionImage}/>
            </TouchableOpacity>
            <View style={styles.actionArea}>
                <Text>Call</Text>
                <Text>SMS</Text>
                <Text>Email</Text>
            </View>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  return { 
      people: state.people,
      personSelected: state.personSelected,
   };
};

export default connect(mapStateToProps, actions)(PeopleDetail);