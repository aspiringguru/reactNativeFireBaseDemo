/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import { MKTextField, MKColor, MKButton} from 'react-native-material-kit';

const styles = StyleSheet.create({
  form: {
    flex: 1,
    paddingTop: 50,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'space-between',
  },
  fieldStyles: {
    height: 40,
    color: MKColor.Orange,
  },
  addButton:{
    marginTop: 20,
  },
});

const AddButton = MKButton.coloredButton()
  .withText('ADD')
  .build();

class AddPerson extends Component {
    static navigationOptions = {
        tabBar: {
            label: 'Add Person',
            icon: ({ tintColor }) => (
                <Icon
                    name={'plus'}
                    size={70} 
                    style={[{ color: tintColor }, styles.icon]}
                />
            )
        }
    }
  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.form}>
          <Text>Add a new contact</Text>
          <MKTextField 
            textInputStyle={styles.fieldStyles}
            placeholder={'First name...'}
            tintColor={MKColor.Teal}
          />
          <MKTextField 
            textInputStyle={styles.fieldStyles}
            placeholder={'Last name...'}
            tintColor={MKColor.Teal}
          />
          <MKTextField 
            textInputStyle={styles.fieldStyles}
            placeholder={'Phone number...'}
            tintColor={MKColor.Teal}
          />
          <MKTextField 
            textInputStyle={styles.fieldStyles}
            placeholder={'Email...'}
            tintColor={MKColor.Teal}
          />
          <MKTextField 
            textInputStyle={styles.fieldStyles}
            placeholder={'Company...'}
            tintColor={MKColor.Teal}
          />
          <MKTextField 
            textInputStyle={styles.fieldStyles}
            placeholder={'Project...'}
            tintColor={MKColor.Teal}
          />
          <MKTextField 
            textInputStyle={styles.fieldStyles}
            placeholder={'Notes...'}
            tintColor={MKColor.Teal}
          />
          <View style={styles.addButton}>
            <AddButton />
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default AddPerson;