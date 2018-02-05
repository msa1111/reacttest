import React,{Component} from "react";

import {
    Image,
    WebView,
} from 'react-native';
import UrlUtils from "../../constant/UrlUtils";

export default class ManagePart extends Component<{}> {



    render() {
        return(
           <WebView
                source={{uri: UrlUtils.domain+UrlUtils.biUrl}}
           />
        )
    }
}