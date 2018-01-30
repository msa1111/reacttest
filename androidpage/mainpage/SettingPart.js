import React,{Component} from "react";
import {
    Text,
    View,
    Image,
    Dimensions, AppRegistry
} from 'react-native';

export default class SettingPart extends Component<{}> {

    static navigationOptions = {
        tabBarLabel: '设置',
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('../../mipmap-xxhdpi/ic_setting_select.png')}
                style={{ width:20,height:20}}
            />
        ),
    };

    render() {
        return(
            <View>
                <Text>设置界面</Text>
            </View>
        )
    }
}