import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    SafeAreaView,
    TouchableWithoutFeedback,
    Keyboard, KeyboardAvoidingView,
} from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

const Index = () => {

    const { navigate, goBack } = useNavigation<StackNavigationProp<ParamListBase>>();

    const geriGit = () => {
        goBack();
    };

    const enterCode = () => {
        navigate('forgotpasswordvalidation');
    };

    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <SafeAreaView style={styles.container}>
                    <View style={styles.selectContainer}>
                        <TouchableOpacity style={styles.buttonContainer} onPress={geriGit}>
                            <AntDesign name="left" size={24} color="black" />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.textContainer}>
                        <Text style={styles.headerText}>Şifremi unuttum</Text>
                        <Text style={styles.headerContent}>Lütfen doğrulanmış Email adresinizi girin, size bir kod göndereceğiz.</Text>
                    </View>

                    <TextInput style={styles.input} placeholder="Email" />

                    <TouchableOpacity onPress={enterCode} style={styles.buttonEnvironment}>
                        <Text style={styles.sendCode}>Kodu Gönder</Text>
                    </TouchableOpacity>
                </SafeAreaView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

export default Index;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        alignItems: 'center',

    },

    selectContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'flex-start',
        paddingLeft: 25,
        height: 48,
    },

    buttonContainer: {
        display: 'flex',
        width: 40,
        height: 40,
        padding: 8,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#EDF2F7', // Varsayılan renk
    },

    textContainer: {
        width: '100%',
        marginTop: 32,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 62,
    },

    headerText: {
        color: '#2D3748', // Eğer --grayscale-gray-800 varsa, onu kullanır, yoksa varsayılan renk #2D3748 olur
        fontFamily: 'System',
        fontSize: 20,
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: 24,
    },

    headerContent: {
        marginTop: 12,
        color: '#A0AEC0', // Eğer --grayscale-gray-600 varsa, onu kullanır, yoksa varsayılan renk #A0AEC0 olur
        textAlign: 'center',
        fontFamily: 'System',
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 19.6, // Burada line-height değerini piksel olarak belirtmek gerekir
        letterSpacing: 0.2,
    },
    input: {

        marginTop:40,
        flexDirection: 'row',
        width: 325,
        height: 56,
        paddingVertical: 8,
        paddingHorizontal: 12,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 16,
        borderWidth: 1,
        borderColor: '#E2E8F0',

    },

    buttonEnvironment: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        width: 325,
        height: 56,
        marginBottom:36,
        paddingVertical: 8,
        paddingHorizontal: 8,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        backgroundColor: '#33D49D', // Eğer --brand-primary-base varsa, onu kullanır, yoksa varsayılan renk #33D49D olur
        marginVertical: 10, // Yatay aralık
        flexShrink: 0,
       
    },

    sendCode:{
    color: '#FFF', // Eğer --others-white varsa, onu kullanır, yoksa varsayılan renk #FFF olur
    textAlign: 'center',
    fontFamily: 'System',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 19.6, // Burada line-height değerini piksel olarak belirtmek gerekir
    letterSpacing: 0.2,
    },
   
})