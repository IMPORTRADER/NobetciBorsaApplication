import { StyleSheet, Text, TouchableOpacity, View, TextInput, Image } from 'react-native'
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';




const Index = () => {
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
        <Text style={styles.selectText}>Hisse Seçin</Text>
        <TouchableOpacity style={styles.buttonContainer}>
          <AntDesign name="check" size={24} color="black" />
        </TouchableOpacity>
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
      <View style={styles.watchlistStocks}>
        <View style={styles.stockContainer}>
          <View style={styles.stockState} ><AntDesign name="up" size={24} color="#33D49D" /></View>
          <View style={styles.stockInfo}>
            <Text style={styles.stockCode}>ARTMS</Text>
            <Text style={styles.stockName}>ARTEMİS HALI</Text>
          </View>
          <View style={styles.graph}>
            <Image source={require('../../../assets/item/Group 21.png')} />
          </View>
          <View style={styles.priceContainer} >
            <Text style={styles.price}>&#x20BA;33,720</Text>
            <Text style={styles.change}>+ 0.81%</Text>
          </View>
        </View>
        <View style={styles.stockContainer}>
          <View style={styles.stockState} ><AntDesign name="up" size={24} color="#33D49D" /></View>
          <View style={styles.stockInfo}>
            <Text style={styles.stockCode}>ARTMS</Text>
            <Text style={styles.stockName}>ARTEMİS HALI</Text>
          </View>
          <View style={styles.graph}>
            <Image source={require('../../../assets/item/Group 21.png')} />
          </View>
          <View style={styles.priceContainer} >
            <Text style={styles.price}>&#x20BA;33,720</Text>
            <Text style={styles.change}>+ 0.81%</Text>
          </View>
        </View>
        <View style={styles.stockContainer}>
          <View style={styles.stockState} ><AntDesign name="up" size={24} color="#33D49D" /></View>
          <View style={styles.stockInfo}>
            <Text style={styles.stockCode}>ARTMS</Text>
            <Text style={styles.stockName}>ARTEMİS HALI</Text>
          </View>
          <View style={styles.graph}>
            <Image source={require('../../../assets/item/Group 21.png')} />
          </View>
          <View style={styles.priceContainer} >
            <Text style={styles.price}>&#x20BA;33,720</Text>
            <Text style={styles.change}>+ 0.81%</Text>
          </View>
        </View>
        <View style={styles.stockContainer}>
          <View style={styles.stockState} ><AntDesign name="up" size={24} color="#33D49D" /></View>
          <View style={styles.stockInfo}>
            <Text style={styles.stockCode}>ARTMS</Text>
            <Text style={styles.stockName}>ARTEMİS HALI</Text>
          </View>
          <View style={styles.graph}>
            <Image source={require('../../../assets/item/Group 21.png')} />
          </View>
          <View style={styles.priceContainer} >
            <Text style={styles.price}>&#x20BA;33,720</Text>
            <Text style={styles.change}>+ 0.81%</Text>
          </View>
        </View>
        <View style={styles.stockContainer}>
          <View style={styles.stockState} ><AntDesign name="up" size={24} color="#33D49D" /></View>
          <View style={styles.stockInfo}>
            <Text style={styles.stockCode}>ARTMS</Text>
            <Text style={styles.stockName}>ARTEMİS HALI</Text>
          </View>
          <View style={styles.graph}>
            <Image source={require('../../../assets/item/Group 21.png')} />
          </View>
          <View style={styles.priceContainer} >
            <Text style={styles.price}>&#x20BA;33,720</Text>
            <Text style={styles.change}>+ 0.81%</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Index

const styles = StyleSheet.create({

  container: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',

  },
  selectContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 60,
    paddingHorizontal: 20,
    height: 48,


  },
  selectText: {
    color: '#2D3748', // Varsayılan renk
    textAlign: 'center',
    fontFamily: 'SF Pro Display',
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 25.2,
    letterSpacing: 0.2,
    marginHorizontal: 73,
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

  watchlistStocks: {
    flexDirection: 'column',
    justifyContent: 'center',
    paddingBottom: 8,
    paddingTop: 8,
    width: '100%',
    alignItems: 'center',








  },
  stockContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingBottom: 8,
  


  },
  stockState: {
    backgroundColor: '#FAFAFA',
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    marginRight: 12,

  },
  stockInfo: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  stockCode: {
    color: '#2D3748', // var(--grayscale-gray-800, #2D3748) içeriğini doğrudan yerine koyduk
    fontFamily: 'SF Pro Display',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 19.6 * 1.4, // 140% line-height = font-size * 1.4
    letterSpacing: 0.2,
  },
  stockName: {
    color: '#A0AEC0', // var(--grayscale-gray-600, #A0AEC0) içeriğini doğrudan yerine koyduk
    fontFamily: 'SF Pro Display',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 12 * 1.2, // 120% line-height = font-size * 1.2
    letterSpacing: 0.2,
  },
  graph: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 24,
  },
  priceContainer: {
    flexDirection: 'column',

    alignItems: 'flex-end',

  },
  price: {
    fontFamily: 'SF Pro Display',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 19.6, // 140% line-height = font-size * 1.4
    letterSpacing: 0.2,
    color: '#2D3748', // var(--grayscale-gray-800, #2D3748) içeriğini doğrudan yerine koyduk
    textAlign: 'right',
    paddingTop: 6,
  },
  change: {
    fontFamily: 'SF Pro Display',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 12, // Normal line-height belirtilmediği için varsayılan değeri kullandım
    letterSpacing: 0.2,
    color: '#33D49D', // var(--alert-success-base, #33D49D) içeriğini doğrudan yerine koyduk
    paddingTop: 4,
  },
})