import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet,TextInput, ScrollView } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


function index() {

  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    // Burada arama işlemleri yapılabilir
    console.log('Arama yapıldı:', searchText);
  };

  const navigation = useNavigation();

  const geriGit = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      
      <View style={styles.selectContainer}>
        <TouchableOpacity style={styles.buttonContainer} onPress={geriGit}>
          <AntDesign name="left" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.selectText}>Geçmiş Bildirimler</Text>
  
      </View>

      <View style={styles.searchContainer}>
          <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
            <AntDesign name="search1" size={20} color="black" />
          </TouchableOpacity>
          <TextInput
            style={styles.input}
            placeholder="Sembol veya şirket"
            value={searchText}
            onChangeText={text => setSearchText(text)}
          />
        </View>

        <ScrollView style={styles.notificationContainer}>
          <View style={styles.notificationBar}>
            <Text style = {styles.stockName}>THYAO</Text>
            <Text style={styles.content} >Tavan oldu</Text>
            <Text style={styles.content} >13:57</Text>
          </View>
          <View style={styles.notificationBar}>
            <Text style = {styles.stockName}>THYAO</Text>
            <Text style={styles.content} >Tavan oldu</Text>
            <Text style={styles.content} >13:57</Text>
          </View>
          <View style={styles.notificationBar}>
            <Text style = {styles.stockName}>THYAO</Text>
            <Text style={styles.content} >Tavan oldu</Text>
            <Text style={styles.content} >13:57</Text>
          </View>
          <View style={styles.notificationBar}>
            <Text style = {styles.stockName}>THYAO</Text>
            <Text style={styles.content} >Tavan oldu</Text>
            <Text style={styles.content} >13:57</Text>
          </View>
          <View style={styles.notificationBar}>
            <Text style = {styles.stockName}>THYAO</Text>
            <Text style={styles.content} >Tavan oldu</Text>
            <Text style={styles.content} >13:57</Text>
          </View>
          <View style={styles.notificationBar}>
            <Text style = {styles.stockName}>THYAO</Text>
            <Text style={styles.content} >Tavan oldu</Text>
            <Text style={styles.content} >13:57</Text>
          </View>
          <View style={styles.notificationBar}>
            <Text style = {styles.stockName}>THYAO</Text>
            <Text style={styles.content} >Tavan oldu</Text>
            <Text style={styles.content} >13:57</Text>
          </View>
          <View style={styles.notificationBar}>
            <Text style = {styles.stockName}>THYAO</Text>
            <Text style={styles.content} >Tavan oldu</Text>
            <Text style={styles.content} >13:57</Text>
          </View>
          <View style={styles.notificationBar}>
            <Text style = {styles.stockName}>THYAO</Text>
            <Text style={styles.content} >Tavan oldu</Text>
            <Text style={styles.content} >13:57</Text>
          </View>
          <View style={styles.notificationBar}>
            <Text style = {styles.stockName}>THYAO</Text>
            <Text style={styles.content} >Tavan oldu</Text>
            <Text style={styles.content} >13:57</Text>
          </View>
          <View style={styles.notificationBar}>
            <Text style = {styles.stockName}>THYAO</Text>
            <Text style={styles.content} >Tavan oldu</Text>
            <Text style={styles.content} >13:57</Text>
          </View>
          <View style={styles.notificationBar}>
            <Text style = {styles.stockName}>THYAO</Text>
            <Text style={styles.content} >Tavan oldu</Text>
            <Text style={styles.content} >13:57</Text>
          </View>
          <View style={styles.notificationBar}>
            <Text style = {styles.stockName}>THYAO</Text>
            <Text style={styles.content} >Tavan oldu</Text>
            <Text style={styles.content} >13:57</Text>
          </View>
          <View style={styles.notificationBar}>
            <Text style = {styles.stockName}>THYAO</Text>
            <Text style={styles.content} >Tavan oldu</Text>
            <Text style={styles.content} >13:57</Text>
          </View>
          <View style={styles.notificationBar}>
            <Text style = {styles.stockName}>THYAO</Text>
            <Text style={styles.content} >Tavan oldu</Text>
            <Text style={styles.content} >13:57</Text>
          </View>
          <View style={styles.notificationBar}>
            <Text style = {styles.stockName}>THYAO</Text>
            <Text style={styles.content} >Tavan oldu</Text>
            <Text style={styles.content} >13:57</Text>
          </View>
          <View style={styles.notificationBar}>
            <Text style = {styles.stockName}>THYAO</Text>
            <Text style={styles.content} >Tavan oldu</Text>
            <Text style={styles.content} >13:57</Text>
          </View>
          <View style={styles.notificationBar}>
            <Text style = {styles.stockName}>THYAO</Text>
            <Text style={styles.content} >Tavan oldu</Text>
            <Text style={styles.content} >13:57</Text>
          </View>
          <View style={styles.notificationBar}>
            <Text style = {styles.stockName}>THYAO</Text>
            <Text style={styles.content} >Tavan oldu</Text>
            <Text style={styles.content} >13:57</Text>
          </View>
          
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    marginHorizontal:0,
    marginVertical:0,
    overflow:'hidden',

  },
  selectContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 60,
    paddingHorizontal: 20,
    height: 48,
    marginLeft:0,
    paddingLeft:25,
   
    width: '100%',


  },
  selectText: {
    color: '#2D3748', // Varsayılan renk
    textAlign: 'center',
    fontFamily: 'SF Pro Display',
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 25.2,
    letterSpacing: 0.2,
  },
  buttonContainer: {
    display: 'flex',
    marginRight:56,
    width: 40,
    height: 40,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#EDF2F7', // Varsayılan renk
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 56,
    paddingHorizontal: 16,
    marginHorizontal: 25,
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E2E8E0',
  },
  input: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  searchButton: {
    padding: 10,
  },
  notificationContainer: {
    flexDirection:'column',
    overflow:'hidden',
    width:'100%',
    paddingVertical:10,
    paddingHorizontal:20,
  },

  notificationBar:{
    width:'100%',
    flexDirection:'row',
    backgroundColor:'#96E1C84D',
    height:43,
    alignItems:'center',
    borderRadius: 20,
    paddingHorizontal:15,
    justifyContent: 'space-between',
    marginBottom: 5,

  },
  stockName:{
    fontFamily: 'SF Pro Display',
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 19.6,
    letterSpacing: 0.2,
    color: '#1A202C', // Varsayılan renk
  },
  content:{
    fontFamily: 'SF Pro Display',
    fontSize: 10,
    fontWeight: '500',
    textAlign: 'center',
    color: '#2D3748',
    letterSpacing: 0.2,
  }

})

export default index