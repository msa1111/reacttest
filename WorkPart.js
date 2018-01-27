import React, {Component} from "react";
import {
    Text,
    View,
    Image,
    StyleSheet,
    Dimensions,
    ScrollView,
    FlatList
} from 'react-native';
import ScreenUtils from "./utils/ScreenUtils";

// const screenWidth = Dimensions.get("window").width;
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


        this.flatListData = [
            {
                key: 1,
                itemName: '开单',
                imgSource: require('./mipmap-xxhdpi/ic_kaidan.png'),
                style: {
                    marginTop: 5,
                    marginBottom: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 35,
                    height: 45,
                }
            },

            {
                key: 2,
                itemName: '查询补打',
                imgSource: require('./mipmap-xxhdpi/ic_chaxunbuda.png'),
                style: {
                    marginTop: 5,
                    marginBottom: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 50,
                    height: 45,
                }
            },
            {
                key: 3,
                itemName: '订单受理',
                imgSource: require('./mipmap-xxhdpi/ic_dingdanjiedan.png'),
                style: {
                    marginTop: 5,
                    marginBottom: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 35,
                    height: 45,
                }
            },
            {
                key: 4,
                itemName: '揽货接单',
                imgSource: require('./mipmap-xxhdpi/ic_dingdanjiedan.png'),
                style: {
                    marginTop: 5,
                    marginBottom: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 35,
                    height: 45,
                }
            },
            {
                key: 5,
                itemName: '派件签收',
                imgSource: require('./mipmap-xxhdpi/ic_paisongqianshou.png'),
                style: {
                    marginTop: 5,
                    marginBottom: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 35,
                    height: 45,
                }
            },
            {
                key: 6,
                itemName: '统计',
                imgSource: require('./mipmap-xxhdpi/ic_tongji.png'),
                style: {
                    marginTop: 5,
                    marginBottom: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 50,
                    height: 45,
                }
            },
            {
                key: 7,
                itemName: '问题件上传',
                imgSource: require('./mipmap-xxhdpi/ic_problem.png'),
                style: {
                    marginTop: 5,
                    marginBottom: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 35,
                    height: 45,
                }
            },
            {
                key: 8,
                itemName: '无头件上传',
                imgSource: require('./mipmap-xxhdpi/ic_notitle.png'),
                style: {
                    marginTop: 5,
                    marginBottom: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 35,
                    height: 45,
                }
            },

            {
                key: 9,
                itemName: '装车任务',
                imgSource: require('./mipmap-xxhdpi/ic_load_task.png'),
                style: {
                    marginTop: 5,
                    marginBottom: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 55,
                    height: 45,
                }
            },
            {
                key: 10,
                itemName: '卸车任务',
                imgSource: require('./mipmap-xxhdpi/ic_unload_task.png'),
                style: {
                    marginTop: 5,
                    marginBottom: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 55,
                    height: 45,
                }
            },
            {
                key: 11,
                itemName: '',
                imgSource: null,
                style: {
                    marginTop: 5,
                    marginBottom: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 55,
                    height: 45,
                }
            },

            {
                key: 12,
                itemName: '',
                imgSource: null,
                style: {
                    marginTop: 5,
                    marginBottom: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 55,
                    height: 45,
                }
            }


        ];


    }

    render() {
        return (
            // var _scrollView: ScrollView;
            <View>
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
                <FlatList
                    data={this.flatListData}
                    horizontal={false}
                    numColumns={4}
                    renderItem={
                        this._renderItem
                    }
                />

            </View>

        )
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

    //方法直接返回view，返回体不要写{}
    _renderItem = ({item}) =>
        <View style={styles.flatItem}>
            <Image
                style={
                    item.style
                }
                source={item.imgSource}
            />
            <Text>{item.itemName}</Text>
        </View>;


    componentWillUnmount() {
        // 如果存在this.timer，则使用clearTimeout清空。
        // 如果你使用多个timer，那么用多个变量，或者用个数组来保存引用，然后逐个clear
        this.timer && clearInterval(this.timer);
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
        width: ScreenUtils.screenWidth,
        height: 170,
    },

    page: {
        flex: 1,
        width: ScreenUtils.screenWidth,
        height: 170,
        resizeMode: 'stretch'
    },

    flatItem: {
        marginTop:20,
        flex: 1,
        alignItems: 'center'
    },

    // flatImgItem : {
    //     marginTop:5,
    //     marginBottom:5,
    //     justifyContent: 'center',
    //     alignItems:'center',
    //     width:70,
    //     height:90,
    //     flex:1,
    // }
})