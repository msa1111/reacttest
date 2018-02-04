import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    Button,
    Alert
} from 'react-native';

export class SearchView extends Component{
    constructor(props) {
        super(props)
        this.state={}
    }

    render(){
        return(
            <View
                style ={styles.container}>
                <View>

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create(
    {
        container :{
            height:30
        }

    }
)