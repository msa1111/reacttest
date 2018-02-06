import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    Image,
    View,
    TextInput,
    AppRegistry,
    Button,
    Alert,
    FlatList
} from 'react-native';
import {SearchView} from "./widgte/SearchView";

export default class SearchPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flatListData : null,
        }
    }

    render() {
        return (
            <View>
               <SearchView
                   scan = {this.scan}
                   search = {this.search}/>
                <FlatList
                    data={this.flatListData}
                    renderItem={
                        this._renderItem
                    }
                />
            </View>
        )
    }


    _renderItem = (item) =>{

    };

    search = (text) => {Alert.alert("搜索了" + text)}
    scan = (text) => {Alert.alert("扫描了" + text)}
}

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('MyProject', () => SearchPage);