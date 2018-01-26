import React, {Component} from 'react';
import {
} from 'react-native';
import {
    TabNavigator
} from 'react-navigation';
import WorkPart from "./WorkPart";
import SettingPart from "./SettingPart";
import ManagePart from "./ManagePart";
import MessagePart from "./MessagePart";


const MainNavigator = TabNavigator({
        WorkPart:{
            screen:WorkPart
        },
        ManagePart:{
            screen:ManagePart
        },
        MessagePart:{
            screen:MessagePart
        },
        SettingPart:{
            screen:SettingPart
        },

    },
    {
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


export default class Main extends Component<{}> {

    render() {
        return(
            <MainNavigator>
            </MainNavigator>
        )
    }
}

// AppRegistry.registerComponent('MainNavigator', () => MainNavigator);



