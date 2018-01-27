import React,{Component} from "react";

import {
    Image,
    WebView,
} from 'react-native';
import UrlUtils from "./constant/UrlUtils";

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
           <WebView
                source={{uri: UrlUtils.domain+UrlUtils.biUrl}}
           />
        )
    }
}