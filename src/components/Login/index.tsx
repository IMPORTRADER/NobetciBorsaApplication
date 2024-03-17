import React, { useState } from 'react';
import {
    Image,
    Text,
    TextInput,
    View,
    Keyboard,
    TouchableWithoutFeedback,
    TouchableOpacity,
} from 'react-native';
import styles from './styles';
import {FontAwesome, Zocial} from "@expo/vector-icons";

function Index() {
    const [inputText, setInputText] = useState('');
    const [inputPass, setInputPass] = useState('');
    const [inputRePass, setInputRePass] = useState('');

    const handleInputChange = (text: string) => {
        setInputText(text);
    };

    const handleInputPassChange = (text: string) => {
        setInputPass(text);
    };

    const handleInputRePassChange = (text: string) => {
        setInputRePass(text);
    };

    const dismissKeyboard = () => {
        Keyboard.dismiss();
    };

    return (
        <TouchableWithoutFeedback onPress={dismissKeyboard}>
            <View style={styles.mainComponent}>
                <Image
                    style={styles.logo}
                    source={require('../../../assets/login/login-screen-logo.png')}
                />
                <Text style={styles.textMain}>NöbetçiBorsa'ya Katıl</Text>
                <Text style={styles.textDescription}>
                    Favori hiselerini takip et,{" "}
                    <Text style={styles.highlightedText}>alım-satım{"\n"}</Text> imkanlarını kaçırma!
                </Text>
                <TextInput
                    style={[styles.input, styles.container, { borderColor: inputText ? '#33D49D' : '#E2E8F0' }]}
                    onChangeText={handleInputChange}
                    value={inputText}
                    placeholder="Email"
                    keyboardType='email-address'
                />

                <TextInput
                    style={[styles.input, styles.container, { borderColor: inputPass ? '#33D49D' : '#E2E8F0' }]}
                    onChangeText={handleInputPassChange}
                    value={inputPass}
                    placeholder="Şifre"
                    keyboardType='default'
                    secureTextEntry={true}
                />

                <TextInput
                    style={[styles.input, styles.container, { borderColor: inputRePass ? '#33D49D' : '#E2E8F0' }]}
                    onChangeText={handleInputRePassChange}
                    value={inputRePass}
                    placeholder="Şifre Tekrar"
                    keyboardType='default'
                    secureTextEntry={true}
                />

                <View>
                    <TouchableOpacity
                        style={[styles.container, styles.button]}
                        onPress={() =>
                            console.log("Email:", inputText)
                        }>
                        <Text style={styles.buttonText}>Devam Et</Text>
                    </TouchableOpacity>
                </View>

                <View style={{flexDirection:'row', alignItems:'center', marginTop:75}}>
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
                            <FontAwesome name="google" size={24} color="black" />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.layout, styles.buttonGoogle]}
                        onPress={() =>
                            console.log("appstore")
                        }>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Zocial name="appstore" size={24} color="black" />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'baseline',marginTop:5 }}>
                    <Text style={{fontSize:16}}>Zaten hesabınız var mı? </Text>
                    <TouchableOpacity onPress={() => console.log("Giriş yap")}>
                        <Text style={{ color: '#33D49D', fontSize:16}}>Giriş yap</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

export default Index;
