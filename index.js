import { AppRegistry } from 'react-native';
import {StackNavigator} from "react-navigation";
import Main from "./Main";
import Login from './Login';


const MyProject = StackNavigator({
    Login: {
        screen: Login,
    },
    Main: {
        path:'people/:name',
        screen: Main,
    },
}, {initialRouteName: 'Login',
    //隐藏标题
    headerMode:'none'});

AppRegistry.registerComponent('MyProject', () => MyProject);
