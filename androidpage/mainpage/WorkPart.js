import React, {Component} from "react";
import {
    Text,
    View,
    Image,
    StyleSheet,
    FlatList,
    TouchableOpacity
} from 'react-native';
import ScreenUtils from "../../utils/ScreenUtils";
import WorkPartBanner from "./widget/WorkPartBanner";
import SettingPart from "./SettingPart";

// const screenWidth = Dimensions.get("window").width;
const BANNER_IMGS = [
    require('../../mipmap-xxhdpi/banner1.png'),
    require('../../mipmap-xxhdpi/banner2.png'),
    require('../../mipmap-xxhdpi/banner3.png'),
];

export default class WorkPart extends Component<{}> {
    static navigationOptions = {
        tabBarLabel: '工作',


        tabBarIcon: ({tintColor}) => (
            <Image
                source={require('../../mipmap-xxhdpi/ic_work_select.png')}
                style={{width: 20, height: 20}}
            />
        ),
    };

    constructor(props) {
        super(props);

        this.state = {
        };

        this.flatListData = [
            {
                key: 1,
                itemName: '开单',
                imgSource: require('../../mipmap-xxhdpi/ic_kaidan.png'),
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
                imgSource: require('../../mipmap-xxhdpi/ic_chaxunbuda.png'),
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
                imgSource: require('../../mipmap-xxhdpi/ic_dingdanjiedan.png'),
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
                imgSource: require('../../mipmap-xxhdpi/ic_dingdanjiedan.png'),
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
                imgSource: require('../../mipmap-xxhdpi/ic_paisongqianshou.png'),
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
                imgSource: require('../../mipmap-xxhdpi/ic_tongji.png'),
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
                imgSource: require('../../mipmap-xxhdpi/ic_problem.png'),
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
                imgSource: require('../../mipmap-xxhdpi/ic_notitle.png'),
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
                imgSource: require('../../mipmap-xxhdpi/ic_load_task.png'),
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
                imgSource: require('../../mipmap-xxhdpi/ic_unload_task.png'),
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
                <WorkPartBanner/>
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


    //方法直接返回view，返回体不要写{}
    _renderItem = ({item}) =>
        <TouchableOpacity style={styles.flatItem}
                          onPress = {() =>{
                this.props.navigation.navigate('SettingPart');
                console.log(this.props.navigation);
                console.log(this.props.navigation.navigate('SettingPart'));
            }
           }>
        <View style={styles.flatItem}>
            <Image
                style={
                    item.style
                }
                source={item.imgSource}
            />
            <Text>{item.itemName}</Text>
        </View>
        </TouchableOpacity>;

}


const styles = StyleSheet.create({

    flatItem: {
        marginTop:20,
        flex: 1,
        alignItems: 'center'
    },

})