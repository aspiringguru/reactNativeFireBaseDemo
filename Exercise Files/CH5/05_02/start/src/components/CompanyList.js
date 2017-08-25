/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CompanyItem from './CompanyItem';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    paddingTop: 10,
    backgroundColor: '#e5e5e5',
  },
});

class CompanyList extends Component {
    static navigationOptions = {
        tabBar: {
            label: 'Companies',
            icon: ({ tintColor }) => (
                <Icon
                    name={'business'}
                    size={45} 
                    style={{ color: tintColor }}
                />
            )
        }
    }
  render() {
    return (
      <View style={styles.container}>
        <CompanyItem />
      </View>
    );
  }
}

const mapStateToProps = state => {
  const people = _.map(state.people, (val, uid) => {
    return { ...val, uid};
  });

  const companies =
    _.chain(people)
    .groupBy('company')
    .map((value, key) => {
      return {
        company: key,
        names: value
      };
    })
    .value();

    return {
      companies,
    };
};

export default connect(mapStateToProps)(CompanyList);