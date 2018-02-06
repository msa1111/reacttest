import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    View,
    TextInput,
    Image,
    Button,
    Alert,
    TouchableOpacity
} from 'react-native';
import {PropTypes} from "prop-types";
import {ViewPropTypes,} from 'ViewPropTypes';

export class SearchView extends Component{

    static propTypes = {
        ...ViewPropTypes,
        //点击查询按钮暴露的方法
        search:PropTypes.func,
        //点击扫描框暴露的方法
        scan:PropTypes.func

    };


    constructor(props) {
        super(props)
        this.state={
            inputString : null,
        }
    }

    render(){
        return(
            <View style={styles.searchStyle}>
                <View style={styles.searchInner}>
                    <Image
                        source={require('../../../mipmap-xxhdpi/ic_big_search.png')}
                        style={styles.imgSearch}/>
                    <TextInput
                        style={styles.textInput}
                        underlineColorAndroid="transparent"
                        onChangeText ={(text) => this.setState({
                            inputString : text
                        })}/>
                    <TouchableOpacity
                        style={styles.imgTouch}
                        onPress ={() =>this.props.scan(this.state.inputString)}>
                    <Image
                        source={require('../../../mipmap-xxhdpi/ic_problem_scan.png')}
                        style={styles.imgScan}/>
                    </TouchableOpacity>
                </View>


                <View style={styles.searchButton}>
                    <Button
                        title='查询'
                        color='#fabe00'
                        onPress = {() => this.props.search(this.state.inputString)}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    searchStyle: {
        height: 50,
        backgroundColor: '#e3e3e3',
        flexDirection: 'row',
    },
    searchInner: {
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 15,
        marginRight: 10,
        borderRadius: 5,
        backgroundColor: 'white',
        flex: 1
    },

    searchButton: {
        marginRight: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imgSearch: {
        marginLeft: 10,
        width: 20,
        height: 20
    },

    imgTouch:{
        width: 20,
        height: 20,
        position:'absolute',
        right:10
    },

    imgScan:{
        // absolute:'right',
        width: 20,
        height: 20,
    },
    textInput:{
        flex:1
    }
});