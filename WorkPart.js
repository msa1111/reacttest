import React, {Component} from "react";
import {
    Text,
    View,
    Image,
    StyleSheet,
    Dimensions
} from 'react-native';
import Swiper from 'react-native-swiper';

// var screenWidth = Dimensions.window.width

export default class WorkPart extends Component<{}> {
    static navigationOptions = {
        tabBarLabel: '工作',
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('./mipmap-xxhdpi/ic_work_select.png')}
                style={{ width:20,height:20}}
            />
        ),
    };
    render() {
        return(
            <View>
                <Swiper
                    sytle ={styles.swiper}
                    height={200}
                    horizontal={true}
                    paginationStyle={{bottom: 10}}
                    showsButtons={false}
                >
                    <Image source={require('./mipmap-xxhdpi/banner1.png')} style={styles.img}/>
                    <Image source={require('./mipmap-xxhdpi/banner2.png')} style={styles.img}/>
                    <Image source={require('./mipmap-xxhdpi/banner3.png')} style={styles.img}/>
                </Swiper>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    swiper :{},
    img:{
        width:400,
        height:200
    }
})