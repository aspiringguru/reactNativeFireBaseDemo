/**
*
*
*
*
*   https://facebook.github.io/react-native/docs/activityindicator.html
*
*/

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator
} from 'react-native';


/*
*   create a stateless Component.
*   size={size || 'small'}
*   if size is not null, size=size, else size='small'
*/
const Loader = ({ size }) => {
    return(
        <View style={styles.loader}>
            <ActivityIndicator size={size || 'small'} />
        </View>
        );
};



export default Loader;
/*
*
*   https://facebook.github.io/react-native/docs/stylesheet.html
*/

const styles = StyleSheet.create({
  loader: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
  },
});
