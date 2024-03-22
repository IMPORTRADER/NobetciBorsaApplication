import React, { useState } from 'react';
import {
    Image,
    Text,
    TextInput,
    View,
    Keyboard,
    TouchableWithoutFeedback,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform
} from 'react-native';
import styles from './styles';
import {ParamListBase, useNavigation} from "@react-navigation/native";
import {StackNavigationProp} from "@react-navigation/stack";

interface RadioButtonProps {
    label: string;
    selected: boolean;
    onSelect: () => void;
    alignRight?: boolean;
}

const CustomRadioButton: React.FC<RadioButtonProps> = ({ label, selected, onSelect, alignRight }) => {
    const radioButtonStyle = alignRight ? styles.radioButtonRight : styles.radioButtonLeft; // Stili belirle

    return (
        <TouchableOpacity
            style={[
                radioButtonStyle,
                selected && styles.radioButtonSelected,
            ]}
            onPress={onSelect}
        >
            <Text style={[styles.radioButtonText, selected && styles.radioButtonTextSelected]}>
                {label}
            </Text>
        </TouchableOpacity>
    );
};

function Index() {
    const [inputName, setInputName] = useState('');
    const [inputLastName, setInputLastName] = useState('');
    const [inputAddress, setInputAddress] = useState('');
    const [selectedValue, setSelectedValue] = useState('E');
    const {navigate} = useNavigation<StackNavigationProp<ParamListBase>>();
    const handleInputNameChange = (text: string) => {
        setInputName(text);
    };

    const handleInputLastNameChange = (text: string) => {
        setInputLastName(text);
    };
    const handleInputAddressChange = (text: string) => {
        setInputAddress(text);
    };

    const navigateButtton = () => {
        navigate('login')
        console.log("Name: " + inputName )
    }

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
                    <Text style={styles.textMain}>NöbetçiBorsa'ya Katıl</Text>
                    <Text style={styles.textDescription}>
                        Lütfen kişisel bilgilerinizi giriniz.
                    </Text>

                    <View>
                        <TextInput
                            style={[styles.input, styles.container, { borderColor: inputName ? '#33D49D' : '#E2E8F0' }]}
                            onChangeText={handleInputNameChange}
                            value={inputName}
                            placeholder="İsim"
                            keyboardType='email-address'
                        />
                        <TextInput
                            style={[styles.input, styles.container, { borderColor: inputLastName ? '#33D49D' : '#E2E8F0' }]}
                            onChangeText={handleInputLastNameChange}
                            value={inputLastName}
                            placeholder="Soyisim"
                            keyboardType='default'
                        />

                        <View style={styles.radioContainer}>
                            <CustomRadioButton
                                label="Erkek"
                                selected={selectedValue === 'E'}
                                onSelect={() => setSelectedValue('E')}
                            />
                            <CustomRadioButton
                                label="Kadın"
                                selected={selectedValue === 'K'}
                                onSelect={() => setSelectedValue('K')}
                                alignRight
                            />
                        </View>

                        <View style={styles.container}>
                            <TextInput
                                style={[styles.inputMultiline, { borderColor: inputAddress ? '#33D49D' : '#E2E8F0' }]}
                                onChangeText={handleInputAddressChange}
                                multiline
                                numberOfLines={2}
                                value={inputAddress}
                                placeholder="Adres"
                                keyboardType='default'
                            />
                        </View>
                    </View>
                    <TouchableOpacity
                        style={[styles.container, styles.button]}
                        onPress={() =>
                            navigateButtton()
                        }>
                        <Text style={styles.buttonText}>Devam Et</Text>
                    </TouchableOpacity>
                    <View style={{flexDirection:'row', alignItems:'center', marginTop:5}}>
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
                    <View style={{ flexDirection: 'row', alignItems: 'baseline',marginTop:5 }}>
                        <Text style={{fontSize:16}}>Zaten hesabınız var mı? </Text>
                        <TouchableOpacity onPress={() => console.log("Giriş yap")}>
                            <Text style={{ color: '#33D49D', fontSize:16}}>Giriş yap</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    );
}

export default Index;
