import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen'
import HistoryScreen from '../screens/HistoryScreen'
import AlertScreen from '../screens/AlertScreen'

const Stack = createStackNavigator()

function HomeNavigator() {
  return (
    <Stack.Navigator> 
        <Stack.Screen name="Alert" component={AlertScreen} options={{ headerShown: false }} />



    </Stack.Navigator>
  )
}

export default HomeNavigator