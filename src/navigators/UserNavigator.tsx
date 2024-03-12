import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import UserScreen from '../screens/UserScreen'

const Stack = createStackNavigator()

function HomeNavigator() {
  return (
    <Stack.Navigator> 
        <Stack.Screen name="User" component={UserScreen} options={{ headerShown: false }} />



    </Stack.Navigator>
  )
}

export default HomeNavigator