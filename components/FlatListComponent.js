import React from 'react';
import {FlatList, View, Text, TouchableHighlight} from 'react-native';

export class FlatListComponent extends React.Component {
 
    constructor(props){
        // Always super constructor call comes first
        super(props);
       this.state = {
           loading : false,
           error : null,
            data : [{key: 'a'}, {key: 'b'}],
       } 
    } 

    getData = () => {
        const url = "http://www.manchestereveningnews.co.uk/all-about/manchester-united-fc?service=rss";
        const parseString = require('react-native-xml2js').parseString;

        this.setState({
            loading : true,
        })
        fetch(url)
            .then(response => response.text())
                .then(response => {
                    console.log("Response before parsed !!!");
                    console.log(response);
                    var responseData = [];
                    parseString(response, {ignoreAttrs : false, mergeAttrs : true}, function (err, result) {

                        //var tempObj = {};
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
                        data : responseData
                    })  
                })
    } 

    componentDidMount(){
        console.log("OMG, Component mounteded");
        this.getData();
    }

    render() {
        return (
            <View>
                <FlatList
                    data={this.state.data}
                   // renderItem={({item}) => <Text>{item.title}</Text>}
                   // style={{border : '2'}}
                   renderItem={({item, separators}) => (
                        <TouchableHighlight
                        //onPress={() => this._onPress(item)}
                        style = {{margin : 1}}
                        onShowUnderlay={separators.highlight}
                        onHideUnderlay={separators.unhighlight}>
                        <View style={{backgroundColor: 'white'}}>
                            <Text>{item.title}</Text>
                        </View>
                        </TouchableHighlight>
                    )}
                    keyExtractor = {item => item.key}
                />
            </View>    
        )
    }
}