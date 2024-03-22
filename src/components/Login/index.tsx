import React, { useState } from 'react';
import {
    Image,
    Text,
    TextInput,
    View,
    Keyboard,
    TouchableWithoutFeedback,
    TouchableOpacity, Platform, KeyboardAvoidingView,
} from 'react-native';
import styles from './styles';
import { FontAwesome } from "@expo/vector-icons";
import {ParamListBase, useNavigation} from "@react-navigation/native";
import {StackNavigationProp} from "@react-navigation/stack"; // FontAwesome import edildi.

function Index() {
    const [inputText, setInputText] = useState('');
    const [inputPass, setInputPass] = useState('');
    const [showPassword, setShowPassword] = useState(false); // Şifrenin görünürlüğünü kontrol etmek için bir state tanımlandı.
    const {navigate} = useNavigation<StackNavigationProp<ParamListBase>>();
    const handleInputChange = (text: string) => {
        setInputText(text);
    };

    const handleInputPassChange = (text: string) => {
        setInputPass(text);
    };

    const navigateButtton = () => {
        navigate('hello');
        console.log("Email: " + inputText + " Password: " + inputPass);
    };

    const dismissKeyboard = () => {
        Keyboard.dismiss();
    };

    return (
        <TouchableWithoutFeedback onPress={dismissKeyboard}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.mainComponent}
            >
                <View style={styles.mainComponent}>
                    <Image
                        style={styles.logo}
                        source={require('../../../assets/login/login-screen-logo.png')}
                    />
                    <Text style={styles.textMain}>Hoş Geldiniz! 👋</Text>
                    <Text style={styles.textDescription}>
                        Hesabınızla giriş yapınız.
                    </Text>
                    <TextInput
                        style={[styles.input, styles.container, { borderColor: inputText ? '#33D49D' : '#E2E8F0' }]}
                        onChangeText={handleInputChange}
                        value={inputText}
                        placeholder="Email"
                        keyboardType='email-address'
                    />
                    <View style={[styles.input, styles.container, { borderColor: inputPass ? '#33D49D' : '#E2E8F0' }]}>
                        <TextInput
                            style={{ flex: 1 }}
                            onChangeText={handleInputPassChange}
                            value={inputPass}
                            placeholder="Şifre"
                            keyboardType='default'
                            secureTextEntry={!showPassword} // Şifrenin görünürlüğünü state'e göre ayarlanır.
                        />
                        <TouchableOpacity
                            onPress={() => setShowPassword(!showPassword)} // Göz simgesine basıldığında state'i tersine çevir.
                        >
                            <FontAwesome name={showPassword ? 'eye-slash' : 'eye'} size={20} color="#A0AEC0" />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                        style={[styles.container, styles.button]}
                        onPress={() =>
                            navigateButtton()
                        }>
                        <Text style={styles.buttonText}>Devam Et</Text>
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', alignItems: 'baseline',marginTop:5 }}>
                        <TouchableOpacity onPress={() => console.log("Şifreni mi unuttun")}>
                            <Text style={{ color: '#33D49D', fontSize:16, marginTop:24}}>Şifreni mi unuttun?</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection:'row', alignItems:'center', marginTop:110}}>
                        <View style={{width:'35%', height:1, backgroundColor: '#E2E8F0', marginRight:10}}></View>
                        <Text style={{color: '#A0AEC0'}}>veya</Text>
                        <View style={{width:'35%', height:1, backgroundColor: '#E2E8F0', marginLeft:10}}></View>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <TouchableOpacity
                            style={[styles.layout, styles.buttonGoogle]}
                            onPress={() =>
                                console.log("google")
                            }>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image
                                    style={{width:24,height:24}}
                                    source={require("../../../assets/google.png")}/>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.layout, styles.buttonGoogle]}
                            onPress={() =>
                                console.log("appstore")
                            }>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image
                                    style={{width:24,height:28,resizeMode:'stretch',marginBottom:4}}
                                    source={require("../../../assets/apple.png")}/>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    );
}

export default Index;
