import React from 'react';
import {Dimensions, Image, View} from "react-native";
import Onboard from "../../components/Onboard";
import { LogBox } from 'react-native';

function Index() {
    const {width, height} = Dimensions.get("window");
    LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
    return (
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image
                source={require("../../../assets/onboarding/logo-with-text.png")}
                style={{
                    width: 170,
                    height: 40,
                    marginTop: 35,
                    marginBottom: -125,
                    resizeMode: 'stretch'
                }}
            />
            <Onboard/>
        </View>
    );
}

export default Index;