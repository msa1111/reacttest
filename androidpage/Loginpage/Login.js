/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import PopupDialog ,{DialogTitle} from 'react-native-popup-dialog';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    Button,
    Alert,
    FlatList,
    TouchableOpacity,
    TouchableHighlight,
    ToastAndroid
} from 'react-native';
import UrlUtils from "../../constant/UrlUtils";
import NetUtils from "../../utils/NetUtils"
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Main from "../mainpage/Main";
import ModalDropdown from 'react-native-modal-dropdown';
import ScreenUtils from "../../utils/ScreenUtils";
import UserInfo from "../../constant/UserInfo";

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

// var image = require('./mipmap-xxhdpi')


export default class Login extends Component<{}> {
    static navigationOptions = {
    };

    constructor(props) {
        super(props);
        this.comCode = "";
        this.userAccount = "";
        this.passWord = "";
        this.state = {
            compName:"公司编码",
            compCode : "",
            userAccount :"",
            passWord : "",
            comObj: [],
            comArr:[],
            comIndex:null};

    };
    //预加载
    componentDidMount()
    {
        this.getCompCode()
    }



    render() {
        return <View style={styles.container}>
            {/*{this.getCompCode()}*/}

            <View
                style={styles.emptyStyle}
            />

            {/*公司logo*/}
            <View style={{
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Image
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 300,
                        height: 100
                    }}
                    source={require('../../mipmap-xxhdpi/ic_login_logo.png')}/>
            </View>


            {/*公司编码*/}
            <View style={styles.borderStyle}>
                <Text
                    onPress ={this._sellectComp}
                    style={styles.inputStyle}>
                    {this.state.compName}
                </Text>
            </View>


            {/*<View style={styles.borderStyle}>*/}
                {/*<ModalDropdown*/}
                    {/*defaultValue={'公司编码'}*/}
                    {/*style={{height:40}}*/}
                    {/*textStyle={{*/}
                        {/*marginLeft:5,*/}
                        {/*marginTop:10}}*/}
                    {/*dropdownStyle={{*/}
                        {/*marginTop:30,*/}
                        {/*flex: 1, width: ScreenUtils.screenWidth-40*/}
                    {/*}}*/}
                    {/*options={this.state.comArr}*/}
                    {/*onSelect={(index) => {*/}
                        {/*this.setState({comIndex:index});*/}
                        {/*// console.log(this.state.comIndex)*/}
                        {/*}*/}
                    {/*}*/}

                {/*/>*/}
            {/*</View>*/}


            {/*登录人*/}
            <KeyboardAwareScrollView>
            <View style={styles.borderStyle}>
                <TextInput
                    id="input_user_account"
                    underlineColorAndroid="transparent"
                    style={styles.inputStyle} placeholder='登陆人'
                    onChangeText={(text) => {
                        this.userAccount = text
                    }}/>
            </View>
            </KeyboardAwareScrollView>

            {/*密码*/}
            <KeyboardAwareScrollView
                // extraScrollHeight ={40}
                enableOnAndroid={true}>
            <View style={styles.borderStyle}>
                <TextInput
                    id="input_pass_word"
                    underlineColorAndroid="transparent"
                    style={styles.inputStyle} placeholder='密码'
                    onChangeText={(text) => {
                        this.passWord = text
                    }}/>
            </View>
            </KeyboardAwareScrollView>

            {/*登录按钮*/}
            <View style={styles.buttonStyle}>
                <Button
                    title='登      录'
                    color='#fabe00'
                    onPress={() =>
                        this.login()

                    }
                >
                </Button>
            </View>

            <PopupDialog
                dialogTitle={<DialogTitle title="Dialog Title" />}
                ref={(popupDialog) => {this.popupDialog = popupDialog }}>
                <View>
                    <FlatList
                        onRefresh={this.refresh}
                        refreshing={this.state.refresh}
                        data={this.state.comObj}
                        // onPressItem = {this._itemSelect}
                        renderItem={
                            this._renderItem
                        }
                    />
                </View>
            </PopupDialog>

        </View>;
    }

    _sellectComp = () => {
        this.popupDialog.show();
    };

    _renderItem = ({item,index}) =>
        <View>
            <Text
                key={index}
                onPress ={this._itemSelect.bind(this,item,index)}>{item.shortName}</Text>
        </View>;

    _itemSelect(item ,index){
        ToastAndroid.show(item.shortName,ToastAndroid.SHORT);
        this.setState ({
            compCode:item.compCode,
            compName:item.shortName
        })
    };



    getCompCode() {
        this.setState({comObj : [],comArr : []});

        NetUtils.get(UrlUtils.domain + UrlUtils.findCompanyUrl,{compCode:'yimidida'},

            responseText => {
                // let tempArr =  JSON.parse(responseText._bodyInit).data;
                let tempArr = responseText.data;
                let comTempArr= [];
                console.log(tempArr);

                for (var index in tempArr ) {
                    tempArr[index].key = index;
                    comTempArr.push(tempArr[index].shortName);
                }
                    this.setState ({comObj : tempArr,comArr : comTempArr});
                }


            );
    }


    login() {
        // this.props.navigation.navigate('Main');
        console.log(this.state);
        let jsonData = {
            'appType': '2',
            'compCode': (this.state.comObj[this.state.comIndex].compCode).toString(),
            'workNum': this.userAccount,
            'password': this.passWord,
        };

        console.log(jsonData);


        NetUtils.postJson(UrlUtils.domain + UrlUtils.loginUrl, jsonData,
            //普通函数不生效
            // function (responseText) {
            // alert(JSON.stringify(responseText));}

            responseText => {
                if(responseText.success){
                    UserInfo.compCode = responseText.data.compCode;
                    UserInfo.compName =responseText.data.compName;
                    UserInfo.userCode = responseText.data.userCode;
                    UserInfo.deptCode = responseText.data.deptCode;

                    this.props.navigation.navigate('Main');
                } else {
                    alert("登录失败")
                }

            });


    }

}


const styles = StyleSheet.create({


    emptyStyle: {
        marginTop: 100
    },


    borderStyle: {
        marginTop: 10,
        borderRadius: 4,
        marginLeft: 15,
        marginRight: 15,
        borderWidth: 1,
        borderColor: '#333333'
    },


    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },


    inputStyle: {
        textAlign: 'left',
        color: '#333333',
        height:40,
        // underlineColorAndroid:'rgba(0,0,0,0)'

    },

    buttonStyle: {
        borderRadius: 4,
        marginTop: 10,
        marginLeft: 15,
        marginRight: 15,
        height: 50,
    },

});
