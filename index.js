import { AppRegistry } from 'react-native';
import {StackNavigator} from "react-navigation";
import Main from "./androidpage/mainpage/Main";
import Login from './androidpage/Loginpage/Login';
import SearchPage from "./androidpage/search/SearchPage";


const MyProject = StackNavigator({
    Login: {
        screen: Login,
    },
    Main: {
        path:'people/:name',
        screen: Main,
    },
    SearchPage:{
        screen:SearchPage
    }}, {initialRouteName: 'Login',
    //隐藏标题
    headerMode:'none'});

AppRegistry.registerComponent('MyProject', () => MyProject);
