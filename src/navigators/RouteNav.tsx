import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen'
import RootNavigator from './RootNavigator'
import SelectStock from '../screens/SelectStock'
import OnboardingScreen from "../screens/OnboardingScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";



function HomeNavigator() {

  const Stack = createStackNavigator()
  return (
    <Stack.Navigator initialRouteName='onboarding'>
        <Stack.Screen name="onboarding" component={OnboardingScreen} options={{ headerShown: false }} />
        <Stack.Screen name="root" component={RootNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="ismail" component={SelectStock} options={{ headerShown: false }} />
        <Stack.Screen name="home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="register" component={RegisterScreen} options={{ headerShown: false }} />

    </Stack.Navigator>
  )
}

export default HomeNavigator