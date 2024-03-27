import { StyleSheet, Text, View, Switch, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';



const index = () => {


  const navigation = useNavigation();

  const geriGit = () => {
    navigation.goBack();
  };
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
  };
  return (
    <SafeAreaView style={styles.container} >
      <View style={styles.navbar}>
        <TouchableOpacity style={styles.buttonContainer}>
          <AntDesign name="left" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.navbarText}>Ayarlar</Text>
      </View>

      <View style={styles.generalContainer}>
        <Text style={styles.generalText} >Genel</Text>
        <View style={styles.options} >
          <View>
            <Text style={styles.optionText} >Karanlık Mod</Text>
          </View>
          <TouchableOpacity>
            <Switch
              trackColor={{ false: "#CBD5E0", true: "#33D49D" }}
              thumbColor={isEnabled ? "white" : "white"}
              ios_backgroundColor="#CBD5E0"
              onValueChange={toggleSwitch}
              value={isEnabled}
            /></TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.options} >
            <Text style={styles.optionText} >Bildirimler</Text>
            <MaterialCommunityIcons name="chevron-right" size={20} color="#718096" />
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity style={styles.options}>
            <Text style={styles.optionText} >Şifremi Sıfırla</Text>
            <MaterialCommunityIcons name="chevron-right" size={20} color="#718096" />

          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.nobetciBorsa} >
        <Text style={styles.generalText} >NobetciBorsa Hakkında</Text>
        <View>
          <TouchableOpacity style={styles.options} >
            <Text style={styles.optionText} >Açıklama</Text>
            <MaterialCommunityIcons name="chevron-right" size={20} color="#718096" />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.options} >
            <Text style={styles.optionText} >Gizlilik & Güvenlik</Text>
            <MaterialCommunityIcons name="chevron-right" size={20} color="#718096" />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.options} >
            <Text style={styles.optionText} >Geri Bildirim</Text>
            <MaterialCommunityIcons name="chevron-right" size={20} color="#718096" />
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={styles.logoutButton} ><Text style={styles.logoutText}>Çıkış Yap</Text></TouchableOpacity>


    </SafeAreaView>
  )
}

export default index

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 25,
  },

  navbar: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',

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
  generalContainer: {
    marginTop: 28,
    gap: 8,
    width: '100%',
    marginBottom: 32,


  },

  generalText: {
    color: '#718096',
    lineHeight: 22.4,
    letterSpacing: 0.2,
    fontWeight: '500',
    fontSize: 16,
  },
  options: {
    height: 48,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  optionText: {
    color: '#2D3748',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 22.4,
    letterSpacing: 0.2
  },

  nobetciBorsa: {
    gap: 8,
    width: '100%',
  },

  logoutButton:{
  marginTop:16,
  justifyContent:'center',
  alignItems:'flex-start',
  width:'100%',
  height:48,
},

logoutText:{
  color:'#FE5050',
  fontWeight:'700',
  lineHeight:22.4,
  letterSpacing:0.2,
  fontSize:16,
},

})