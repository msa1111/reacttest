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
    Alert
} from 'react-native';
import {SearchView} from "./widgte/SearchView";

export default class SearchPage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <View>
               <SearchView
                   scan = {this.scan}
                   search = {this.search}/>
            </View>
        )
    }

    search = (text) => {Alert.alert("搜索了" + text)}
    scan = (text) => {Alert.alert("扫描了" + text)}
}

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('MyProject', () => SearchPage);