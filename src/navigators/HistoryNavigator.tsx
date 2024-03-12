import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen'
import HistoryScreen from '../screens/HistoryScreen'

const Stack = createStackNavigator()

function HomeNavigator() {
  return (
    <Stack.Navigator> 
        <Stack.Screen name="History" component={HistoryScreen} options={{ headerShown: false }} />



    </Stack.Navigator>
  )
}

export default HomeNavigator