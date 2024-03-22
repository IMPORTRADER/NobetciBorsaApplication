import React from 'react';
import {View} from "react-native";
import Hello from "../../components/Hello";

function Index() {
    return (
        <View style = {{flex:1 , justifyContent:'center', alignItems:'center'}}>
            <Hello/>
        </View>
    );
}

export default Index;