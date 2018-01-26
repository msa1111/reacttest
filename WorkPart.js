import React, {Component} from "react";
import {
    Text,
    View,
    Image,
    StyleSheet,
    Dimensions,
    ViewPagerAndroid,
    ListView,
    ScrollView
} from 'react-native';

const screenWidth = Dimensions.get("window").width;
const BANNER_IMGS = [
    require('./mipmap-xxhdpi/banner1.png'),
    require('./mipmap-xxhdpi/banner2.png'),
    require('./mipmap-xxhdpi/banner3.png'),
];

export default class WorkPart extends Component<{}> {
    static navigationOptions = {
        tabBarLabel: '工作',
        tabBarIcon: ({tintColor}) => (
            <Image
                source={require('./mipmap-xxhdpi/ic_work_select.png')}
                style={{width: 20, height: 20}}
            />
        ),
    };

    constructor(props) {
        super(props);
        // 用于构建DataSource对象
        // var dataSource = new ViewPager.DataSource({
        //     pageHasChanged: (p1, p2) => p1 !== p2,
        // });
        // // 实际的DataSources存放在state中
        // this.state = {
        //     dataSource: dataSource.cloneWithPages(BANNER_IMGS)
        // }
    }

    render() {
        return (
            <View>
                <ScrollView>
                    {this.createPage()}
                </ScrollView>

            </View>
        )
    }

    createPage() {
        var imgArr = [];
        for (let i = 0; i < BANNER_IMGS.length; i++) {
            imgArr.push(
                <View key={i} style={styles.pageView}>
                    <Image
                        style={styles.page}
                        source={BANNER_IMGS[i]}/>
                </View>)
        }

        return imgArr;
    }

}

const styles = StyleSheet.create({
    swiper: {
        width: 600,
        height: 200
    },
    img: {
        width: 600,
        height: 200
    },

    pageView: {
        flex: 1,
        width:screenWidth,
        height: 130,
    },

    page: {
        flex: 1,
        width:screenWidth,
        height: 130,
        resizeMode: 'stretch'
    }
})