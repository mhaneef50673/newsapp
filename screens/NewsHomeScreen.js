import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';
import { FlatListComponent } from '../components/FlatListComponent';

export default class HomeScreen extends React.Component {
  static navigationOptions = {    
    headerTitle : "Man United News",
    headerStyle : { backgroundColor: 'red' },
    headerTintColor : 'white'
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatListComponent />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#C0C0C0',
  }
});
