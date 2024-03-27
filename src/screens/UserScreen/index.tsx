import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome6 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';





const index = () => {

  const navigation = useNavigation();

  const geriGit = () => {
    navigation.goBack();
  };

  const newPass = () => {
    navigation.navigate('root');
  };

  const account = () =>{
    navigation.navigate('account');
  };
  const language = () =>{
    navigation.navigate('language');
  };
  const settings = () =>{
    navigation.navigate('settings');
  };

  return (
    <SafeAreaView style={styles.container} >
      <View style={styles.navbar}>
        <TouchableOpacity style={styles.buttonContainer}>
          <AntDesign name="left" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.navbarText}>Profil</Text>
      </View>

      <View style={styles.userContainer}>

        <View style={styles.userHeader}>
          <Image style={{ width: 50, height: 50, }} source={require('../../../assets/userphoto/memoji.png')} />
        </View>
        <View style={styles.infoContainer} >
          <Text style={styles.userName} >Canberk Soysal</Text>
          <Text style={styles.email} >canberksoysal@gmail.com</Text>
        </View>

      </View>


      <TouchableOpacity onPress={newPass} style={styles.buttonEnvironment} >
        <View style={{ flexDirection: 'row', }} >
          <View style={{ backgroundColor: 'white', width: 40, height: 40, justifyContent: 'center', alignItems: 'center', borderRadius: 30, padding: 8 }} >
            <FontAwesome6 name="money-bill-1-wave" size={20} color="#33D49D" />
          </View>

          <View style={styles.inviteFriends} >
            <Text style={styles.sendCode} >Arkadaşlarını Davet Et</Text>
            <Text style={styles.request} >Uygulamayı indirme bağlantısı gönderilir.</Text>
          </View>


        </View>
        <AntDesign name="right" size={20} color="white" />
      </TouchableOpacity>

      <View style={styles.line} ></View>

      <View style={styles.menuContainer} >
        <TouchableOpacity style={styles.menuItem} onPress={account} >
          <View style={styles.textIcon} >
            <View style={styles.icons} >
              <Feather name="user" size={16} color="#33D49D" />
            </View>
            <View><Text style={styles.menuText} >Hesabım</Text></View>
          </View>
          <AntDesign name="right" size={16} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={language} >
          <View style={styles.textIcon} >
            <View style={styles.icons} >
              <Ionicons name="language" size={16} color="#33D49D" />
            </View>
            <View>
              <Text style={styles.menuText} >Dil</Text>

            </View>
          </View>
          <View style={{ flexDirection: 'row', gap: 8 }}>
            <Text style={styles.languageText} > Türkçe</Text>
            <AntDesign name="right" size={16} color="black" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={settings}  >
          <View style={styles.textIcon} >
            <View style={styles.icons} >
              <SimpleLineIcons name="settings" size={16} color="#33D49D" />
            </View>
            <View><Text style={styles.menuText} >Ayarlar</Text></View>
          </View>
          <AntDesign name="right" size={16} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} >
          <View style={styles.textIcon} >
            <View style={styles.icons} >
              <MaterialIcons name="question-mark" size={16} color="#33D49D" />
            </View>
            <View><Text style={styles.menuText} >S.S.S</Text></View>
          </View>
          <AntDesign name="right" size={16} color="black" />
        </TouchableOpacity>


      </View>


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
    marginLeft: 100,
    color: '#2D3748',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 25.2,
    letterSpacing: 0.2,
  },

  userContainer: {
    width: '100%',
    marginLeft: 25,
    flexDirection: 'row',
    marginTop: 32,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  userHeader: {
    backgroundColor: '#EEFFF9',
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
  },
  userName: {
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 21.6,
    color: '#2D3748',
    marginBottom: 8,
  },
  email: {
    color: '#718096',
    fontSize: 12,
    fontWeight: '400',
    letterSpacing: 0.2,

  },
  infoContainer: {
    marginLeft: 24,
    alignItems: 'flex-start',


  },

  buttonEnvironment: {
    marginTop: 32,
    alignSelf: 'center',

    flexDirection: 'row',
    width: 325,
    height: 64,
    marginBottom: 36,
    paddingVertical: 8,
    paddingHorizontal: 8,
    justifyContent: 'space-between',
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

  request: {
    fontSize: 10,
    marginTop: 4,
    letterSpacing: 0.2,
    fontWeight: '400',
    color: '#FFF',
  },
  inviteFriends: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft: 12,
  },

  line: {
    width: '100%',
    height: 1,
    backgroundColor: '#EDF2F7',
  },

  icons: {
    width: 32,
    height: 32,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    borderRadius: 1000,
    backgroundColor: '#EEFFF9'
  },
  menuContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 4,
    padding: 25,
  },

  menuItem: {
    width: '100%',
    marginBottom: 4,
    height: 48,

    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },

  menuText: {
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 19.6,
    letterSpacing: 0.2,
    color: '#2D3748'
  },
  textIcon: {
    flexDirection: 'row',
    gap: 16,
    alignItems: 'center'
  },
  languageText: {
    color: '#718096',
    letterSpacing: 0.2,
    fontWeight: '400',
    fontSize: 12,
  },
})