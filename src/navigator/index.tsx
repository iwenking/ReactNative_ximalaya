import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator, HeaderStyleInterpolators, StackNavigationProp } from '@react-navigation/stack';
import Home from '@/pages/Home';
import Detail from '@/pages/Detail';
import { useAnimatedGestureHandler } from 'react-native-reanimated';
import { Platform, StyleSheet } from 'react-native';

export type RootStackParamList = {
    Hmoe: undefined;
    Detail: {
        id:number;
    };
}

export type RootStackNavigation = StackNavigationProp<RootStackParamList>


let Stack = createStackNavigator<RootStackParamList>();

/**
 * Navigator,
 * Screen 
 * 
 * 
 */

class navigator extends React.Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator
                    headerMode="float"
                    screenOptions={{
                        headerTitleAlign: 'center',
                        headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
                        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                        gestureEnabled: true,
                        gestureDirection: "horizontal",
                        headerStyle: {
                            ...Platform.select({
                                android: {
                                    elevation: 0,
                                    borderBottomWidth: StyleSheet.hairlineWidth,

                                },
                            })
                        }
                    }}>
                    <Stack.Screen options={{ headerTitle: '首页' }} name="Home" component={Home} />
                    <Stack.Screen options={{ headerTitle: '详情页' }} name="Detail" component={Detail} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}

export default navigator;