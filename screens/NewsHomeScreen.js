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
import { NewsHomeComponent } from '../components/NewsHomeComponent';

export default class HomeScreen extends React.Component {
  static navigationOptions = {    
    headerTitle : "Man United News",
    headerStyle : { backgroundColor: 'red' },
    headerTintColor : 'white'
  };

  render() {
    const url = 'http://www.manchestereveningnews.co.uk/all-about/manchester-united-fc?service=rss';

    return(
      <View style={styles.container}>
        <NewsHomeComponent navigate = {this.props.navigation} source={url} />
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
