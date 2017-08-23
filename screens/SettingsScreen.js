import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    headerTitle : "Settings",
    headerStyle : { backgroundColor: 'red' },
    headerTintColor : 'white'
  };

  render() {
    return (
      <View style={styles.container}>        
       <Text style={styles.text}>
          This is settings screen. Coming Soon !!
        </Text>         
      </View>  
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text : {
      paddingTop : 20
  }
});
