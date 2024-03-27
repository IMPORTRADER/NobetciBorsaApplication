import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';



const index = () => {

  const [searchTerm, setSearchTerm] = useState('');



  const navigation = useNavigation();

  const geriGit = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navbar}>
        <TouchableOpacity style={styles.buttonContainer}>
          <AntDesign name="left" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.navbarText}>Dil</Text>
      </View>

      <View style={styles.inputContainer} >
        <View style={{ flexDirection: 'row', gap: 12, }} >

          <AntDesign name="search1" size={20} color="black" />
          <TextInput
            style={styles.input}
            placeholder="Ara"

          />
        </View>
      </View>

      <View style={styles.languageContainer} >
        <TouchableOpacity style={styles.activeLanguage}>
          <View style={{ justifyContent: 'center', flexDirection: 'row', alignItems: 'center', gap: 16, }} >
            <Image style={{ width: 32, height: 32, }} source={require('../../../assets/language/turkiyem.png')} ></Image>
            <Text style={styles.languageText}>Türkçe</Text>
          </View>

          <View>
            <MaterialCommunityIcons name="checkbox-marked-circle" size={20} color="#33D49D" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.language}>
          <View style={{ justifyContent: 'center', flexDirection: 'row', alignItems: 'center', gap: 16, }} >
            <Image style={{ width: 32, height: 32, }} source={require('../../../assets/language/english.png')} ></Image>
            <Text style={styles.languageText}>English</Text>
          </View>

          <View>
            <MaterialCommunityIcons name="chevron-right" size={24} color="#718096" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.language}>
          <View style={{ justifyContent: 'center', flexDirection: 'row', alignItems: 'center', gap: 16, }} >
            <Image style={{ width: 32, height: 32 }} source={require('../../../assets/language/frans.png')} ></Image>
            <Text style={styles.languageText}>French</Text>
          </View>

          <View>
            <MaterialCommunityIcons name="chevron-right" size={24} color="#718096" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.language}>
          <View style={{ justifyContent: 'center', flexDirection: 'row', alignItems: 'center', gap: 16, }} >
            <Image style={{ width: 32, height: 32 }} source={require('../../../assets/language/china.png')} ></Image>
            <Text style={styles.languageText}>Chinese</Text>
          </View>

          <View>
            <MaterialCommunityIcons name="chevron-right" size={24} color="#718096" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.language}>
          <View style={{ justifyContent: 'center', flexDirection: 'row', alignItems: 'center', gap: 16, }} >
            <Image style={{ width: 32, height: 32, }} source={require('../../../assets/language/japonya.png')} ></Image>
            <Text style={styles.languageText}>Japan</Text>
          </View>

          <View>
            <MaterialCommunityIcons name="chevron-right" size={24} color="#718096" />
          </View>
        </TouchableOpacity>

        


      </View>

      <TouchableOpacity style={styles.buttonEnvironment} >
          <Text style={styles.sendCode} >Değişiklikleri Kaydet</Text>
        </TouchableOpacity>
    </SafeAreaView>
  )
}

export default index

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'white',
    


  },
  navbar: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 25,
  },
  buttonContainer: {
    borderRadius: 12,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: '#EDF2F7'
  },
  navbarText: {
    marginLeft: 112,
    color: '#2D3748',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 25.2,
    letterSpacing: 0.2,
  },
  input: {

  },

  inputContainer: {

    marginHorizontal: 25,
    marginVertical: 32,
    height: 56,
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0'
  },

  languageContainer: {
    marginHorizontal: 25,
   
    
  },

  activeLanguage: {
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#33D49D',
    paddingHorizontal: 16,
    height: 64,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  language: {
    borderRadius: 16,
    paddingHorizontal: 16,
    height: 64,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FAFAFA',
    marginTop: 16,
  },

  languageText: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 22.4,
    letterSpacing: 0.2,
    color: '#2D3748',

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

    alignSelf:'center',

  },
})