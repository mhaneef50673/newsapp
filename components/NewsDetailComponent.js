import React from 'react';
import { 
    ScrollView, 
    StyleSheet, 
    View, 
    Text, 
    WebView, 
    ActivityIndicator,
    TouchableHighlight,
    Share 
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default class NewsDetailComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            news : this.props.navigation.state.params.news
        }
    }

    static navigationOptions = ({navigation}) =>  ({
            // headerTitle : "Fixtures & Results",    
            headerStyle : { 
                backgroundColor: 'red' 
            },
            headerTintColor : 'white',
            headerRight :   <TouchableHighlight onPress = {navigation.state.params.handleShare}
                                activeOpacity = {10}
                                underlayColor = {'#ff0000'}>
                                <View style={{ marginRight : 10 }} > 
                                    <FontAwesome
                                        name ={'share-alt'}
                                        size ={25}
                                        color = {'white'}                                                    
                                    />  
                                </View>
                            </TouchableHighlight>                 
    });

    loadingIndicator = () => {    
        return(
            <ActivityIndicator style={styles.activityIndicator} size = "large" />
        )
    }

    componentDidMount() {
        this.props.navigation.setParams({ handleShare: this.shareLink });
    }

    shareLink = () => {
        let news = this.state.news;
        Share.share({
                message : news.title + ". Read the article at" + news.link,                        
            },{
                dialogTitle : 'Share the news'
            }     
        );
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
