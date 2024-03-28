import React, {useState} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {TouchableOpacity} from 'react-native';
import HomeNavigator from './HomeNavigator';
import HistoryNavigator from './HistoryNavigator';
import AlertNavigator from './AlertNavigator';
import UserNavigator from './UserNavigator';
import PieChartNavigator from './PieChartNavigator';
import {Entypo, FontAwesome5, Feather, FontAwesome6} from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

function RootNavigator() {

    interface CustomTabBarButtonProps {
        children?: React.ReactNode; // children parametresini burada tanımlıyoruz
    }

    const CustomTabBarButton: React.FC<CustomTabBarButtonProps> = ({ children }) => {
        const [isPressed, setIsPressed] = useState(false);

        const handlePress = () => {
            setIsPressed(!isPressed);

            if (!isPressed) {
                console.log('Bildirimler kapatıldı');
            } else {
                console.log('Bildirimler açıldı');
            }
        };


        return(
            <TouchableOpacity
                style={{
                    width: 58,
                    height: 58,
                    backgroundColor: isPressed ? "grey" : "#33D49D", // Basıldığında gri olacak şekilde koşula göre arka plan rengini ayarlıyoruz
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 33,
                    marginTop: -8,
                    borderWidth: 2,
                    borderColor: 'white'
                }}
                onPress={handlePress} // handlePress fonksiyonunu onPress olayına bağlıyoruz
            >
                <FontAwesome6 name={isPressed ? "bell-slash" : "bell"} size={26} color="white" />
            </TouchableOpacity>
        )
    }


    return (
        <Tab.Navigator// Burada initialRouteName'i LoadingScreen'e ayarlıyoruz
            screenOptions={{
                tabBarHideOnKeyboard: true,
                tabBarShowLabel: false,
                tabBarActiveTintColor: '#2D3748',
                tabBarInactiveTintColor: '#959595',
                headerShown: false,
                tabBarStyle: {
                    height: 80,
                },

            }}
        >


            <Tab.Screen
                name="Home"
                component={HomeNavigator}
                options={{
                    tabBarIcon: ({ color }) => (<Entypo name="home" size={24} color={color} />),
                }}
            />
            <Tab.Screen
                name="History"
                component={HistoryNavigator}
                options={{
                    tabBarIcon: ({ color }) => (<FontAwesome5 name="history" size={24} color={color} />),
                }}
            />
            <Tab.Screen
                name="Alert"
                component={AlertNavigator}
                options={{
                    tabBarButton: (props) => <CustomTabBarButton {...props}/>
                }}
            />
            <Tab.Screen
                name="PieChart"
                component={PieChartNavigator}
                options={{
                    tabBarIcon: ({ color }) => (<FontAwesome6 name="arrow-trend-up" size={24} color={color} />),
                }}
            />
            <Tab.Screen
                name="User"
                component={UserNavigator}
                options={{
                    tabBarIcon: ({ color }) => (<Feather name="user" size={24} color={color} />),
                }}
            />
        </Tab.Navigator>
    );
}



export default RootNavigator;
