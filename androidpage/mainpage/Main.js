import React, {Component} from 'react';
import {
    Image
} from 'react-native';
import {
    TabNavigator,
    StackRouter
} from 'react-navigation';
import WorkPart from "./WorkPart";
import SettingPart from "./SettingPart";
import ManagePart from "./ManagePart";
import MessagePart from "./MessagePart";






export class WorkPartTab extends Component<{}> {

    static navigationOptions = {
        tabBarLabel: '工作',


        tabBarIcon: ({tintColor}) => (
            <Image
                source={require('../../mipmap-xxhdpi/ic_work_select.png')}
                style={{width: 20, height: 20}}
            />
        ),
    };

    constructor(props) {
        super(props)
    }

    render() {
        return(
            <WorkPart navigation = {navigate}>
            </WorkPart>
        )
    }
}
export  class ManagePartTab extends Component<{}> {

    static navigationOptions = {
        tabBarLabel: '管理',
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('../../mipmap-xxhdpi/ic_manage_select.png')}
                style={{ width:20,height:20}}
            />
        ),
    };

    constructor(props) {
        super(props)
    }

    render() {
        return(
            <ManagePart navigation = {navigate}>
            </ManagePart>
        )
    }
}


export  class MessagePartTab extends Component<{}> {

    static navigationOptions = {
        tabBarLabel: '消息',
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('../../mipmap-xxhdpi/ic_message_select.png')}
                style={{width:20,height:20}}
            />
        ),
    };


    constructor(props) {
        super(props)
    }

    render() {
        return(
            <MessagePart navigation = {navigate}>
            </MessagePart>
        )
    }
}

export  class SettingPartTab extends Component<{}> {

    static navigationOptions = {
        tabBarLabel: '设置',
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('../../mipmap-xxhdpi/ic_setting_select.png')}
                style={{ width:20,height:20}}
            />
        ),
    };

    constructor(props) {
        super(props)
    }

    render() {
        return(
            <SettingPart navigation = {navigate}>
            </SettingPart>
        )
    }
}


const MainNavigator = TabNavigator(

    {
        WorkPart:{
            screen:WorkPartTab
        },
        ManagePart:{
            screen:ManagePartTab
        },
        MessagePart:{
            screen:MessagePartTab
        },
        SettingPart:{
            screen:SettingPartTab
        },

    },
    {
        swipeEnabled:false,
        tabBarPosition:'bottom',
        tabBarOptions:{
            iconStyle:{
                alignItems: 'center',
                justifyContent: 'center',
                width:20,height:20
            },
            showLabel:true,
            showIcon:true,
            labelStyle :{
                color:"#fabe00"
            },
            style:{
                backgroundColor:'#ffffff'
            }

        }
    }
);

//主页面的stateNavigate
var navigate;

export default class Main extends Component<{}> {
    constructor(props) {
        super(props)
        navigate = this.props.navigation;
    }

    render() {
        return(

            <MainNavigator>
            </MainNavigator>
        )
    }
}




// AppRegistry.registerComponent('MainNavigator', () => MainNavigator);



