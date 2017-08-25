import React from 'react';
import {
    FlatList, 
    View, 
    Text, 
    TouchableHighlight, 
    StyleSheet,
    ActivityIndicator
} from 'react-native';

export class NewsHomeComponent extends React.Component {
 
    constructor(props){
        // Always super constructor call comes first
        super(props);
        this.state = {
            loading : true,
            error : null,
            data : [],
            refreshing : false,
            source : this.props.source
        } 
    } 

    getData = () => {       
        const parseString = require('react-native-xml2js').parseString;

        fetch(this.state.source)
            .then(response => response.text())
                .then(response => {                                        
                    var responseData = [];
                    parseString(response, {ignoreAttrs : false, mergeAttrs : true}, function (err, result) {                        
                        var items = result.rss.channel[0].item;
                        items.forEach(function(element,index) {
                            var tempObj = {};
                            tempObj.key = index;
                            tempObj.title = element.title[0];
                            tempObj.description = element.description[0];
                            tempObj.link = element.link[0];
                            responseData.push(tempObj);
                        });      
                    });
                                                 
                    this.setState({
                        data : responseData,
                        loading : false,
                        refreshing : false
                    })  
                })
    } 

    componentDidMount(){
        console.log("OMG, Component mounteded");
        this.getData();
    }

    refreshList = () => {        
        this.setState ({
            refreshing : true
        }, () => {
            this.getData();
        })
    }

    newsPressed = (news,navigate) => {                
       navigate('NewsDetail',{news : news});
    } 

    render() { 
        const { navigate } = this.props.navigate; 
        if(this.state.loading){
            return(
                <ActivityIndicator style={styles.activityIndicator} size = "large" />
            )            
        } else {
            return (
                    <View style={styles.flatListView}>
                        <FlatList
                            data={this.state.data}
                            renderItem={({item, separators}) => (
                                    <TouchableHighlight
                                        onPress={() => {this.newsPressed(item,navigate)}}
                                        style = {{margin : 1}}
                                        activeOpacity = {10}
                                        underlayColor = {'#ff0000'}
                                        onShowUnderlay={separators.highlight}
                                        onHideUnderlay={separators.unhighlight}>
                                        <View style={styles.newsRow}>
                                            <Text style={styles.news}>{item.title}</Text>
                                        </View>
                                    </TouchableHighlight>
                            )}
                            keyExtractor = {item => item.key}
                            initialNumToRender = {5}
                            refreshing = {this.state.refreshing}
                            onRefresh = {this.refreshList}
                        />
                    </View>    
            )
        }                
    }
}

const styles = StyleSheet.create({
    newsRow : {
       backgroundColor : 'white',
       margin : 1,
       borderRadius: 4,
       borderWidth: 1,
       borderColor: '#d6d7da',
       height : 100,
       elevation : 1 ,
       justifyContent : 'center'
    },
    news :{
        fontSize : 16,        
        padding : 10
    },
    flatListView : {
       padding : 4 
    },
    activityIndicator: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      height: 80
   }
})