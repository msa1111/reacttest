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
            flatListData : [],
            refresh : false
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
                    onRefresh = {this.refresh}
                    refreshing = {this.state.refresh}
                    data={this.state.flatListData}
                    renderItem={
                        this._renderItem
                    }
                    // onEndReached={this._onEndReached.bind(this)}
                    // onEndReachedThreshold={1}
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
                    flatListData: json.data.records,
                    refresh :false
                });
                }
            );
    }

    refresh = () =>{
        this.loadData()
    }


    _renderItem = ({item}) =>
        <View>
        <View style={styles.itemStyle}>
            <View style ={styles.cardStyle}>
                <View style ={styles.cardTop}>
                    <Text style={styles.waybillNum}>
                        {item.waybillNo}
                    </Text>
                    <Text style={styles.time}>
                        {item.consignorTime}
                    </Text>
                </View>
            </View>
            <View/>
        </View>
            {this.lastItem(item)}
        </View>

    lastItem = (item) => {
        if(item.key == this.state.flatListData.length) {
            return <View style = {{height: 50}}></View>
        } else {
            return <View style = {{height: 0}}></View>
        }
    }


    search = (text) => {Alert.alert("搜索了" + text)}
    scan = (text) => {Alert.alert("扫描了" + text)}
}

const styles = StyleSheet.create({
    itemStyle:{
        height:150,
        justifyContent:'center'
    },
    cardStyle:{
        height:130,
        marginLeft:10,
        marginRight:10,
        borderRadius:10,
        backgroundColor:'#ffffff'
    },
    cardTop :{
        height:40,
        backgroundColor:'#fabe00',
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        alignItems:'center',
        flexDirection:'row'
    },
    waybillNum:{
        marginLeft:10
    },
    time :{
        position:'absolute',
        right:10
    }
});

// AppRegistry.registerComponent('MyProject', () => SearchPage);