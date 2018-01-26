import React,{Component} from "react";

import {
    Text,
    View,
    Image,
    Dimensions, AppRegistry
} from 'react-native';

export default class ManagePart extends Component<{}> {

    static navigationOptions = {
        tabBarLabel: '管理',
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('./mipmap-xxhdpi/ic_manage_select.png')}
                style={{ width:20,height:20}}
            />
        ),
    };

    render() {
        return(
            <View>
                <Text>管理页面</Text>
            </View>
        )
    }
}