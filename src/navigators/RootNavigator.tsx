import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import HomeNavigator from './HomeNavigator';
import HistoryNavigator from './HistoryNavigator';
import AlertNavigator from './AlertNavigator';
import UserNavigator from './UserNavigator';
import PieChartNavigator from './PieChartNavigator';
import { Entypo, FontAwesome5, AntDesign, Feather } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

function RootNavigator() {
    return (
        <Tab.Navigator
            initialRouteName='Ana Sayfa' // Burada initialRouteName'i LoadingScreen'e ayarlıyoruz
            screenOptions={{
                tabBarHideOnKeyboard: true,
                tabBarShowLabel: false,
                tabBarActiveTintColor: '#5C3EBC',
                tabBarInactiveTintColor: '#959595',
                headerShown: false,
                tabBarStyle: {
                    height: 80,
                }
            }}
        >


            <Tab.Screen
                name="Home"
                component={HomeNavigator}
                options={{
                    tabBarIcon: ({ color }) => (<Entypo name="home" size={24} color="black" />),
                }}
            />
            <Tab.Screen
                name="History"
                component={HistoryNavigator}
                options={{
                    tabBarIcon: ({ color }) => (<FontAwesome5 name="history" size={24} color="black" />),
                }}
            />
            <Tab.Screen
                name="Alert"
                component={AlertNavigator}
                options={{
                    tabBarIcon: ({ color }) => (<Entypo name="bell" size={24} color="black" />),
                }}
            />
            <Tab.Screen
                name="PieChart"
                component={PieChartNavigator}
                options={{
                    tabBarIcon: ({ color }) => (<AntDesign name="piechart" size={24} color="black" />),
                }}
            />
            <Tab.Screen
                name="User"
                component={UserNavigator}
                options={{
                    tabBarIcon: ({ color }) => (<Feather name="user" size={24} color="black" />),
                }}
            />
        </Tab.Navigator>
    );
}



export default RootNavigator;
