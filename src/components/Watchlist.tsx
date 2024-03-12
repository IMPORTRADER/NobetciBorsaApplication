import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { useNavigation, NavigationContainer } from '@react-navigation/native'; // React Navigation'ı kullanabilmek için gerekli import
import AlertScreen from '../screens/AlertScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { Link } from '@react-navigation/native';


const Stack = createStackNavigator()



function Watchlist() {

    const navigation = useNavigation();


    return (
        
        
        
        <View style={styles.watchlistContainer}>
            <View style={styles.watchlistBar}>
                <Text style={styles.barText}>Takip Listem</Text>
                <TouchableOpacity >
                    <Link  to={{ screen: 'ismail' }}>
                        <AntDesign name="pluscircleo" size={24} color="#33D49D" />
                    </Link>
                </TouchableOpacity>
            </View>
            <View style={styles.watchlistStocks}>
                <View style={styles.stockContainer}>
                    <View style={styles.stockState} ><AntDesign name="up" size={24} color="#33D49D" /></View>
                    <View style={styles.stockInfo}>
                        <Text style={styles.stockCode}>ARTMS</Text>
                        <Text style={styles.stockName}>ARTEMİS HALI</Text>
                    </View>
                    <View style={styles.graph}>
                        <Image source={require('../../assets/item/Group 21.png')} />
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
                        <Image source={require('../../assets/item/Group 21.png')} />
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
                        <Image source={require('../../assets/item/Group 21.png')} />
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
                        <Image source={require('../../assets/item/Group 21.png')} />
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
                        <Image source={require('../../assets/item/Group 21.png')} />
                    </View>
                    <View style={styles.priceContainer} >
                        <Text style={styles.price}>&#x20BA;33,720</Text>
                        <Text style={styles.change}>+ 0.81%</Text>
                    </View>
                </View>
            </View>
        </View >
    )
}


const styles = StyleSheet.create({

    watchlistContainer: {
        paddingTop: 21,
        backgroundColor: 'white'
    },

    watchlistBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 6,
    },

    barText: {
        color: '#2D3748', // var(--grayscale-gray-800, #2D3748) içeriğini doğrudan yerine koyduk
        fontFamily: 'SF Pro Display',
        fontSize: 18,
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: 18 * 1.2, // 120% line-height = font-size * 1.2
    },

    watchlistStocks: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingBottom: 8,
        paddingTop: 8,




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



});

export default Watchlist