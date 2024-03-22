import React from 'react';
import { StyleSheet, ImageBackground, Text, View, TouchableOpacity } from "react-native";
import {ParamListBase, useNavigation} from "@react-navigation/native";
import {StackNavigationProp} from "@react-navigation/stack";

function Index() {
    const {navigate} = useNavigation<StackNavigationProp<ParamListBase>>();
    const navigateButtton = () => {
        navigate('root')
    }
    return (
        <View style={styles.container}>
            <ImageBackground source={require("../../../assets/hello/hello-bg.png")} resizeMode="cover" style={styles.image}>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Merhaba kullanıcı👋 NöbetçiBorsa'ya hoşgeldin!</Text>
                    <Text style={styles.textDescription}>Seni burada görmek güzel 🙌</Text>
                </View>
            </ImageBackground>
            <View style={styles.buttonWrapper}>
                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={() =>
                    navigateButtton()}>
                    <Text style={styles.buttonText}>Başlamak için hazırım!</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 55,
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        width: 360,
        height: 420,
        resizeMode: 'stretch'
    },
    text: {
        color: '#2D3748',
        fontSize: 24,
        fontFamily: 'System',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    textContainer: {
        paddingBottom: 235
    },
    textDescription: {
        marginTop: 15,
        textAlign: 'center',
        color: '#A0AEC0'
    },
    buttonWrapper: {
        bottom: 36,
        alignItems: 'center',
    },
    buttonContainer: {
        width: 325,
        height: 56,
        padding: 8,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignContent: 'center',
        borderRadius: 16,
        backgroundColor: '#33D49D',
    },
    buttonText: {
        color: '#FFF',
        fontSize: 14,
        fontWeight: '700',
        lineHeight: 19.6,
        letterSpacing: 0.2,
        marginTop: 18
    },
});
export default Index;
