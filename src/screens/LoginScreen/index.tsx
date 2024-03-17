import React from 'react';
import {Text, View} from "react-native";
import Login from "../../components/Login";

function Index() {
    return (
        <View style={{height: '100%', justifyContent: 'center', alignItems: 'center'}}>
            <Login/>
        </View>
    );
}

export default Index;