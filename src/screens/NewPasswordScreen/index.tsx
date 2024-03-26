import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from "@react-navigation/stack";


const Index = () => {

  const {navigate, goBack} = useNavigation<StackNavigationProp<ParamListBase>>();

  const geriGit = () => {
    goBack();
  };

  const newPass = () => {
    navigate('root');
  };
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [hidePassword, setHidePassword] = useState(true); // True: Password gizli, False: Göster

  const togglePasswordVisibility = () => {
    setHidePassword(!hidePassword);
  };
  return (
    <SafeAreaView style={styles.container} >

      <View style={styles.selectContainer}>
        <TouchableOpacity style={styles.buttonContainer} onPress={geriGit}>
          <AntDesign name="left" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.entryContainer} >
        <Text style={styles.headerText} >
          Yeni şifrenizi belirleyin
        </Text>

        <Text style={styles.headerContent} >
          Şifrenizde büyük harf, küçük harf, rakam ve özel karakter içermesini öneririz.
        </Text>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Şifre"
        secureTextEntry={hidePassword} // Şifre gizli ise true, değilse false
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Şifreyi Onayla"
        secureTextEntry={hidePassword} // Şifre gizli ise true, değilse false
        value={confirmPassword}
        onChangeText={(text) => setConfirmPassword(text)}
      />
      <TouchableOpacity onPress={togglePasswordVisibility} style={styles.toggleButton}>
        <Text style={{ color: '#33D49D', fontWeight: '700', lineHeight: 19.6, letterSpacing: 0.2 }}>{hidePassword ? 'Göster' : 'Gizle'}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={newPass} style={styles.buttonEnvironment} >
        <Text style={styles.sendCode} >Kodu Gönder</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
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

  entryContainer: {
    width: "70%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 32,
    marginBottom: 40

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

    marginTop: 23,
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
  toggleButton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 22,
    color: '#33D49D'
  },

  buttonEnvironment: {
    position: 'absolute',

    bottom: 0,
    flexDirection: 'row',
    width: 325,
    height: 56,
    marginBottom: 36,
    paddingVertical: 8,
    paddingHorizontal: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    backgroundColor: '#33D49D', // Eğer --brand-primary-base varsa, onu kullanır, yoksa varsayılan renk #33D49D olur
    marginVertical: 10, // Yatay aralık
    flexShrink: 0,

  },

  sendCode: {
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