/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    Button,
    Alert
} from 'react-native';
import UrlUtils from "./constant/UrlUtils";
import NetUtils from "./utils/NetUtils"

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

// var image = require('./mipmap-xxhdpi')


export default class App extends Component<{}> {
    constructor(props) {
        super(props);
        this.comCode = "";
        this.userAccount = "";
        this.passWord = "";
    }


    render() {
        return (
            // Welcome to React Native!
            <View style={styles.container}>
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
                        source={require('./mipmap-xxhdpi/ic_login_logo.png')}/>
                </View>


                {/*公司编码*/}
                <View style={styles.borderStyle}>
                    <TextInput
                        id="input_comp_code"
                        style={styles.inputStyle} placeholder='公司编码'
                        onChangeText= {(text) => {this.comCode = text}}></TextInput>
                </View>


                {/*登录人*/}
                <View style={styles.borderStyle}>
                    <TextInput
                        id="input_user_account"
                        style={styles.inputStyle} placeholder='登陆人'
                        onChangeText= {(text) => {this.userAccount = text}}></TextInput>
                </View>

                {/*密码*/}
                <View style={styles.borderStyle}>
                    <TextInput
                        id="input_pass_word"
                        style={styles.inputStyle} placeholder='密码'
                        onChangeText= {(text) => {this.passWord = text}}></TextInput>
                </View>


                {/*登录按钮*/}
                <View style={styles.buttonStyle}>
                    <Button
                        title='登      录'
                        color='#fabe00'
                        onPress={() => this.login()}
                    >
                    </Button>
                </View>


            </View>
        );
    }


    login() {

        var jsonData = {
            'appType': '2',
            'compCode': this.comCode,
            'workNum': this.userAccount,
            'password': this.passWord,
        };


        NetUtils.postJson(UrlUtils.domain + UrlUtils.loginUrl, jsonData, function (responseText) {
            alert(JSON.stringify(responseText))
        });

    }

}


const styles = StyleSheet.create({


    emptyStyle: {
        marginTop: 150
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

    },

    buttonStyle: {
        borderRadius: 4,
        marginTop: 10,
        marginLeft: 15,
        marginRight: 15,
        height: 50,
    },

});
