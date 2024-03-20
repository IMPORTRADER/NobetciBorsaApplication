import { StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native'
import React, { useState, useRef } from 'react'
import { Ionicons } from '@expo/vector-icons';
import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import OTPInputView from '@twotalltotems/react-native-otp-input'
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';


const index = () => {

  const navigation = useNavigation();

  const geriGit = () => {
    navigation.goBack();
  };

  const newPass = () => {
    navigation.navigate('newpassword');
};


  return (

    <SafeAreaView style={styles.container} >
      <KeyboardAvoidingView
        
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{
          height: "100%",
          width: "100%",
          backgroundColor: "#fff",
          alignItems: "center",

        }}
      >

        <View style={styles.selectContainer}>
          <TouchableOpacity style={styles.buttonContainer} onPress={geriGit}>
            <AntDesign name="left" size={24} color="black" />
          </TouchableOpacity>


        </View>

        <View style={styles.entryContainer} >
          <Text style={styles.headerText} >
            Doğrulama kodunu girin
          </Text>

          <Text style={styles.headerContent} >
            Size şifrenizi sıfırlamanız için bir kod gönderdik.
          </Text>
        </View>



        <View style={{ width: "100%", paddingHorizontal: 22, alignItems: 'center', flex:1, }} >

          <OTPInputView
            style={{
              width: '100%',
              height: 200,
              paddingHorizontal: 32,
            }}
            pinCount={6}
            autoFocusOnLoad
            codeInputFieldStyle={{
              width: 44,
              height: 44,
              color: "black",
              fontWeight:'700',
              fontSize: 24,
              borderRadius:12,
              borderWidth: 1,
              borderColor:'#E2E8F0'


            }}

            codeInputHighlightStyle={{
              borderColor: "#2ab12f",
            }}

            onCodeFilled={
              (code) => {
                console.log(`Code is ${code}, you are good to go!`)

              }
            }

          />

          <TouchableOpacity style={{marginBottom:100,}} >
            <Text style={{ color: '#33D49D', fontSize: 14, fontWeight: '700', lineHeight: 19.6, letterSpacing: 0.2 }} >Kodu Tekrar Gönder</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonEnvironment} >

            <Text style={styles.sendCode} onPress={newPass} >Hesabımı Doğrula</Text>


          </TouchableOpacity>

          <View style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: 10,

          }} >


          </View>




        </View>

      </KeyboardAvoidingView>
    </SafeAreaView>

  )
}

export default index

const styles = StyleSheet.create({


  container: {
    flex: 1,
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

  entryContainer: {
    width: "70%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 32,

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
    fontFamily: 'SF Pro Display',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 24,
  },

  headerContent: {
    marginTop: 12,
    color: '#A0AEC0', // Eğer --grayscale-gray-600 varsa, onu kullanır, yoksa varsayılan renk #A0AEC0 olur
    textAlign: 'center',
    fontFamily: 'SF Pro Display',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 19.6, // Burada line-height değerini piksel olarak belirtmek gerekir
    letterSpacing: 0.2,
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
    fontFamily: 'SF Pro Display',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 19.6, // Burada line-height değerini piksel olarak belirtmek gerekir
    letterSpacing: 0.2,
  },
})