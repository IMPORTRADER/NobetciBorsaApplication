import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen'
import RootNavigator from './RootNavigator'
import IsmailScreen from '../screens/IsmailScreen'



function HomeNavigator() {

  const Stack = createStackNavigator()
  return (
    <Stack.Navigator> 
        <Stack.Screen name="root" component={RootNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="ismail" component={IsmailScreen} options={{ headerShown: false }} />


    </Stack.Navigator>
  )
}

export default HomeNavigator