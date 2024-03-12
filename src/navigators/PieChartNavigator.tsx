import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen'
import HistoryScreen from '../screens/HistoryScreen'
import PieChart from '../screens/PieChart'

const Stack = createStackNavigator()

function HomeNavigator() {
  return (
    <Stack.Navigator> 
        <Stack.Screen name="PieChart" component={PieChart} options={{ headerShown: false }} />



    </Stack.Navigator>
  )
}

export default HomeNavigator