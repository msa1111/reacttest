import React,{Component} from "react";
import {
    Text,
    View,
    Image,
    Dimensions, AppRegistry
} from 'react-native';

var PropTypes = require('prop-types');
var ViewPropTypes = require('ViewPropTypes');

export default class SettingPart extends Component<{}> {



    static propTypes = {
        ...ViewPropTypes,
      navigation:PropTypes.object,
    };

    render() {
        return(
            <View>
                <Text>设置界面</Text>
            </View>
        )
    }
}