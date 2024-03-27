import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';


const index = () => {

  const navigation = useNavigation();

  const geriGit = () => {
    navigation.goBack();
  };

  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const [inputValue3, setInputValue3] = useState('');
  const [inputValue4, setInputValue4] = useState('');

  const handleChangeText1 = (text) => {
    setInputValue1(text);
  };

  const handleChangeText2 = (text) => {
    setInputValue2(text);
  };

  const handleChangeText3 = (text) => {
    setInputValue3(text);
  };
  const handleChangeText4 = (text) => {
    setInputValue4(text);
  };

  const [maleChanged, setMaleChanged] = useState(true);
  const [femaleChanged, setFemaleChanged] = useState(false);

  const handleMalePress = () => {
    setMaleChanged(true);
    setFemaleChanged(false);
  };

  const handleFemalePress = () => {
    setMaleChanged(false);
    setFemaleChanged(true);
  };



  return (
    <SafeAreaView style={styles.container} >
      <View style={styles.navbar}>
        <TouchableOpacity style={styles.buttonContainer}>
          <AntDesign name="left" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.navbarText}>Profil</Text>
      </View>

      <ScrollView >
        <View style={styles.accountItem}>
          <View style={styles.imageContainer} >
            <Image style={{ width: 90, height: 90, }} source={require('../../../assets/userphoto/memoji.png')} />
            <TouchableOpacity style={styles.changePhoto}>
              <Feather name="camera" size={16} color="white" />
            </TouchableOpacity>

          </View>

          <View style={styles.infoContainer}>
            <View style={{ gap: 12, }} >
              <Text style={styles.infoText} >İsim</Text>
              <View style={styles.inputContainer}>

                <TextInput
                  style={[inputValue1 !== '' && styles.inputWithValue]} // inputValue boş değilse farklı bir stil uygula
                  placeholder="Canberk"
                  onChangeText={handleChangeText1}
                  value={inputValue1}
                />
              </View>
            </View>
            <View style={{ gap: 12, }} >
              <Text style={styles.infoText} >Soyisim</Text>
              <View style={styles.inputContainer}>

                <TextInput
                  style={[inputValue2 !== '' && styles.inputWithValue]} // inputValue boş değilse farklı bir stil uygula
                  placeholder="Canberk"
                  onChangeText={handleChangeText2}
                  value={inputValue2}

                />
              </View>
            </View>
            <View style={{ gap: 12, }} >
              <Text style={styles.infoText} >Email</Text>
              <View style={styles.inputContainer}>

                <TextInput
                  style={[inputValue3 !== '' && styles.inputWithValue]} // inputValue boş değilse farklı bir stil uygula
                  placeholder="canberksoysal@gmail.com"
                  onChangeText={handleChangeText3}
                  value={inputValue3}
                />
              </View>
            </View>




          </View>

          <View style={styles.changeSex} >
            <TouchableOpacity
              style={[styles.notChanged, maleChanged ? styles.onChanged : null]}
              onPress={handleMalePress}
            >
              <Text style={[styles.notChangedText, maleChanged ? styles.onChangedText : null]}>Erkek</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.notChanged, femaleChanged ? styles.onChanged : null]}
              onPress={handleFemalePress}
            >
              <Text style={[styles.notChangedText, femaleChanged ? styles.onChangedText : null]}>Kadın</Text>
            </TouchableOpacity>
          </View>
          <View style={{ width: '100%', paddingVertical: 29, paddingHorizontal: 25, }} >
            <View style={{ gap: 12, }} >
              <Text style={styles.infoText} >Adres</Text>
              <View style={styles.inputContainer}>

                <TextInput
                  style={[inputValue4 !== '' && styles.inputWithValue]} // inputValue boş değilse farklı bir stil uygula
                  placeholder="fjasdfjsadfjasdfjasdfjas"
                  onChangeText={handleChangeText4}
                  value={inputValue4}
                />
              </View>
            </View>
          </View>

          <TouchableOpacity  style={styles.buttonEnvironment} >
            <Text style={styles.sendCode} >Değişiklikleri Kaydet</Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default index

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',

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
    marginLeft: 100,
    color: '#2D3748',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 25.2,
    letterSpacing: 0.2,
  },
  accountItem: {
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    overflow: 'hidden',
  },

  imageContainer: {
    marginTop: 35,
    width: 110,
    height: 110,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EEFFF9',
    borderRadius: 200,

  },
  changePhoto: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    width: 32,
    height: 32,
    backgroundColor: '#33D49D'
  },
  infoContainer: {
    flexDirection: 'column',
    width: '100%',
    marginTop: 48,
    paddingHorizontal: 25,
    gap: 20,
  },
  inputContainer: {
    paddingRight: 12,
    paddingLeft: 16,
    paddingTop: 8,
    paddingBottom: 8,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    width: '100%',
    borderRadius: 16,
    height: 56,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  infoText: {
    color: '#718096',
    fontSize: 12,
    fontWeight: '500',
    letterSpacing: 0.2,

  },

  inputText: {
    fontSize: 14,
    fontWeight: '600',
    letterSpacing: 0.2,
    lineHeight: 19.6,
    color: '#1A202C',
  },

  inputWithValue: {
    fontSize: 14,
    fontWeight: '600',
    letterSpacing: 0.2,
    lineHeight: 19.6,
    color: '#1A202C',
  },

  changeSex: {
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    flexDirection: 'row',
    width: '87%',
    borderRadius: 16,
    marginTop: 22,
    overflow: 'hidden',
    backgroundColor: '#FAFAFA',
    paddingHorizontal: 8,
    paddingVertical: 4,

  },

  onChanged: {
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    width: '50%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',

  },
  onChangedText: {
    color: '#33D49D',
    letterSpacing: 0.2,
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 19.6
  },
  notChangedText: {
    color: '#A0AEC0',
    letterSpacing: 0.2,
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 19.6
  },
  notChanged: {
    padding: 8,
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonEnvironment: {
   
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