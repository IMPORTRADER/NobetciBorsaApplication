import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen'
import RootNavigator from './RootNavigator'
import SelectStock from '../screens/SelectStock'
import OnboardingScreen from "../screens/OnboardingScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import RegisterContinueScreen from "../screens/RegisterContinueScreen";
import StockDetailScreen from "../screens/StockDetailScreen";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";
import ForgotPasswordValidationScreen from "../screens/ForgotPasswordValidationScreen";
import NewPasswordScreen from "../screens/NewPasswordScreen";
function HomeNavigator() {

  const Stack = createStackNavigator()
  return (
    <Stack.Navigator initialRouteName='forgotpassword' screenOptions={{
        headerStyle: { elevation: 0 },
        cardStyle: { backgroundColor: '#fff' }
    }}>
        <Stack.Screen name="onboarding" component={OnboardingScreen} options={{ headerShown: false }} />
        <Stack.Screen name="root" component={RootNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="ismail" component={SelectStock} options={{ headerShown: false }} />
        <Stack.Screen name="home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="register" component={RegisterScreen} options={{ headerShown: false }} />
        <Stack.Screen name="registerContinue" component={RegisterContinueScreen} options={{ headerShown: false }} />
        <Stack.Screen name="stockdetail" component={StockDetailScreen} options={{ headerShown: false }} />
        <Stack.Screen name="forgotpassword" component={ForgotPasswordScreen} options={{ headerShown: false }} />
        <Stack.Screen name="forgotpasswordvalidation" component={ForgotPasswordValidationScreen} options={{ headerShown: false }} />
        <Stack.Screen name="newpassword" component={NewPasswordScreen} options={{ headerShown: false }} />

    </Stack.Navigator>
  )
}

export default HomeNavigator