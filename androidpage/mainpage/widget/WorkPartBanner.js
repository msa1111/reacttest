
import React, {Component} from "react";
import {
    View,
    Image,
    StyleSheet,
    Dimensions,
    ScrollView,

} from 'react-native';
import ScreenUtils from "../../../utils/ScreenUtils";


const BANNER_IMGS = [
    require('../../../mipmap-xxhdpi/banner1.png'),
    require('../../../mipmap-xxhdpi/banner2.png'),
    require('../../../mipmap-xxhdpi/banner3.png'),
];

export default class WorkPartBanner extends Component<{}> {
    constructor(props) {
        super(props);
        //滚动的轮播图
        this._scrollView;
        this.state = {
            //轮播图位置
            swiperIndex: 0
        };


        //计时器
        this.timer = setInterval(
            () => {
                // alert('计时器')
                let index = (this.state.swiperIndex + 1) % BANNER_IMGS.length;
                this.setState({
                    swiperIndex: index
                })
                // console.log(this.state.swiperIndex);
                this._scrollView.scrollTo({x: (ScreenUtils.screenWidth * this.state.swiperIndex)});
            },
            2000
        );

    }

    render() {
        return (
            <ScrollView
                ref={(scrollView) => {
                    this._scrollView = scrollView;
                }}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                pagingEnabled={true}
            >
                {this.createPage()}
            </ScrollView>
        );
    }


    //创建banner page
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


    //页面卸载时调用
    componentWillUnmount() {
        // 如果存在this.timer，则使用clearTimeout清空。
        // 如果你使用多个timer，那么用多个变量，或者用个数组来保存引用，然后逐个clear
        this.timer && clearInterval(this.timer);
    }
}

const styles = StyleSheet.create({
    pageView: {
        flex: 1,
        width: ScreenUtils.screenWidth,
        height: 170,
    },

    page: {
        flex: 1,
        width: ScreenUtils.screenWidth,
        height: 170,
        resizeMode: 'stretch'
    },

})