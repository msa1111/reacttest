import React, {Component} from "react";
import {
    Dimensions,
} from 'react-native';


export default  class ScreenUtils extends React.Component {
    static screenWidth = Dimensions.get("window").width;
    static screenHeight= Dimensions.get("window").height;
}
