import React,{Component} from "react";
import {
    Text,
    View,
    Image,
    Dimensions, AppRegistry
} from 'react-native';

export default class MessagePart extends Component<{}> {
    static navigationOptions = {
        tabBarLabel: '消息',
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('../../mipmap-xxhdpi/ic_message_select.png')}
                style={{width:20,height:20}}
            />
        ),
    };
    render() {
        return(
            <View>
                <Text>消息界面</Text>
            </View>
        )
    }
}