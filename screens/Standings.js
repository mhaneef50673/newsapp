import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';

export default class LinksScreen extends React.Component {
  static navigationOptions = {    
    headerTitle : "League Standings",
    headerStyle : { backgroundColor: 'red' },
    headerTintColor : 'white'    
  };

  render() {
    return (
      <View style={styles.container}>    
        <Text style={styles.text}>
          This is standings screen. Coming Soon !!
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
