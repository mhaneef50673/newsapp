import React from 'react';
import { ScrollView, StyleSheet, View, Text, WebView,ActivityIndicator } from 'react-native';

export default class NewsDetailComponent extends React.Component {
  static navigationOptions = ({navigation}) => {    
/*     headerTitle : "Fixtures & Results",
    headerStyle : { backgroundColor: 'red' },
    headerTintColor : 'white' */       
  };

  loadingIndicator = () => {    
      return(
          <ActivityIndicator style={styles.activityIndicator} size = "large" />
      )
  }

  render() {
    const { params } = this.props.navigation.state;

    return (
      <WebView
        source={{uri: params.news.link}}                 
        startInLoadingState = {true}
        renderLoading={this.loadingIndicator}              
      />   
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
    },
    activityIndicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 80
    }
});
