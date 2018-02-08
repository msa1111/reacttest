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
import NetUtils from "../../utils/NetUtils";
import UrlUtils from "../../constant/UrlUtils";
import UserInfo from "../../constant/UserInfo";

export default class SearchPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flatListData : []
        };


    }

    //预加载
    componentDidMount()
    {
        this.loadData()
    }

    render() {
        return (
            <View>

               <SearchView
                   scan = {this.scan}
                   search = {this.search}/>
                <FlatList
                    data={this.state.flatListData}
                    renderItem={
                        this._renderItem
                    }
                />
            </View>
        )
    }


    loadData() {
        NetUtils.get(UrlUtils.domain+ UrlUtils.GET_USER_WAY_BILL_NUM,
            {
                creater: UserInfo.userCode
            },
            (json) => {
                let index = 1;
                json.data.records.forEach( (e) => {
                    e.key = index;
                    index++;
                });
                this.setState({
                    flatListData: json.data.records
                });
                // this._renderItem();
                console.log(json);
                }
            );
    }


    _renderItem = ({item}) =>
        <Text style={{height:30}}>
            {item.waybillNo}
        </Text>;

    search = (text) => {Alert.alert("搜索了" + text)}
    scan = (text) => {Alert.alert("扫描了" + text)}
}

const styles = StyleSheet.create({

});

// AppRegistry.registerComponent('MyProject', () => SearchPage);