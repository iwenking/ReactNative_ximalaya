import React from 'react';
import { NavigationContainer, RouteProp, TabNavigationState } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '@/pages/Home';
import Listen from '@/pages/Listen';
import Found from '@/pages/Found';
import Account from '@/pages/Account';
import Icon from '@/assets/iconfont';
import { RootStackNavigation } from '@/navigator/index';
import { RootStackParamList } from '@/navigator/';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import HomeTabs from './HomeTabs';



export type BottmTabParamList = {
    HomeTabs: undefined;
    Listen: undefined;
    Found: undefined;
    Account: undefined;
}

type Route = RouteProp<RootStackParamList, 'BottomTabs'> & {
    state?: TabNavigationState
}

const Tab = createBottomTabNavigator<BottmTabParamList>();

interface IProps {
    navigation: RootStackNavigation,
    route: RouteProp<RootStackParamList, 'BottomTabs'>
}

function getHeaderTitle(route: Route) {
    const routeName = route.state ? route.state.routes[route.state.index].name : route.params?.screen || 'HomeTabs';
    switch (routeName) {
        case 'HomeTabs':
            return '首页';
        case 'Listen':
            return '我听';
        case 'Found':
            return '发现';
        case 'Account':
            return '我的';
        default:
            return '首页'
    }
}

class BottomTabs extends React.Component<IProps> {

    componentDidUpdate() {
        const { navigation, route } = this.props
        navigation.setOptions({
            headerTitle: getHeaderTitle(route)
        })
    }

    render() {
        return (
            <Tab.Navigator tabBarOptions={{
                activeTintColor: '#f86442'
            }} >
                <Tab.Screen name='HomeTabs' component={HomeTabs} options={{
                    tabBarLabel: "首页",
                    tabBarIcon: ({ color, size }) => <Icon
                        name="iconshouye1" size={size}
                        color={color} />
                }} />
                <Tab.Screen name='Listen' component={Listen} options={{
                    tabBarLabel: "我听",
                    tabBarIcon: ({ color, size }) => <Icon
                        name="iconcollection-b" size={size}
                        color={color} />
                }} />
                <Tab.Screen name='Found' component={Found} options={{
                    tabBarLabel: "发现",
                    tabBarIcon: ({ color, size }) => <Icon
                        name="iconfaxian" size={size}
                        color={color} />
                }} />
                <Tab.Screen name='Account' component={Account} options={{
                    tabBarLabel: "我的",
                    tabBarIcon: ({ color, size }) => <Icon
                        name="iconzhanghao" size={size}
                        color={color} />
                }} />
            </Tab.Navigator>
        )
    }
}

export default BottomTabs

