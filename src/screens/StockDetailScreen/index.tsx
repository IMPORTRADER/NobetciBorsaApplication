import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import React from 'react'
import { Feather } from '@expo/vector-icons';

const Index = () => {
    return (
        <View style={styles.container}>
            <View style={styles.navbar}>
                <TouchableOpacity style={styles.buttonContainer}>
                    <AntDesign name="left" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.navbarText}>Hisse Detayları</Text>
            </View>
            <View style={styles.cardContainer} >
               <View style={styles.stockNameInfo}>
                <View>
                    <Text style={styles.stockCode}>ARTMS</Text>
                    <Text style={styles.stockName} >ARTEMİSS HALI</Text>
                </View>
                <TouchableOpacity>
                    <Feather name="trash-2" size={24} color="black" />
                </TouchableOpacity>
               </View>
               <View style={styles.priceState} >
                <View>
                    <Text style={styles.price} >{'\u20BA'}33,720</Text>
                    <Text style={styles.change} >+0.81%</Text>
                </View>
                <View style={styles.priceContainer} >
                    <Text style={styles.price} >{'\u20BA'}36,980</Text>
                    <Text style={styles.priceName}>Tavan Fiyatı</Text>

                </View>
               </View>
               <View style={styles.priceState}>
                <View>
                    <Text style={styles.price} >Hareketli</Text>
                    <Text style={styles.priceName} >Durum</Text>
                </View>
                <View>
                    <Text style={styles.price} >{'\u20BA'}30,180</Text>
                    <Text style={styles.priceName} >Taban Fiyatı</Text>
                </View>

               </View>
            </View>
            <View style={styles.chartContainer} >
                <Image source={require('../../../assets/chart.png')} />
            </View>
            <View style={styles.infoBar} >
                <View style={styles.selectMode} >
                    <TouchableOpacity><Text>Derinlik Bilgisi</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.active} ><Text>Detaylar</Text></TouchableOpacity>

                </View>
            </View>
            <View></View>

        </View>
    )
}

export default Index

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        margin:0,
        padding:0,
    },
    navbar: {
        marginTop: 65,
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
        marginLeft: 59,
        color: '#2D3748',
        textAlign: 'center',
        fontFamily: 'System',
        fontSize: 18,
        fontWeight: '700',
        lineHeight: 25.2,
        letterSpacing: 0.2,
    },

    cardContainer: {
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        width:'90%',
        marginHorizontal:25,
        paddingHorizontal:25,
        paddingTop:20,
        marginVertical:25,
        borderRadius:25,
        backgroundColor:'#FAFAFA',
      
    
        
    },
    stockNameInfo:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        width:'100%',
    },
    priceState:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width:'100%',
        paddingVertical:10,
    },
    priceContainer:{
        flexDirection:'column',
        alignItems:'flex-end',
        
    },
    price:{
        color: '#2D3748',
        textAlign: 'right',
        fontFamily: 'System',
        fontSize: 18,
        fontWeight: '700',
        lineHeight: 25.2,
        letterSpacing: 0.2,
    },
    priceName:{
        color: '#A0AEC0',
        textAlign: 'left',
        fontFamily: 'System',
        fontSize: 12,
        fontWeight: '500',
        letterSpacing: 0.2,
    },
    stockCode:{
        color: '#2D3748',
        fontFamily: 'System',
        fontSize: 14,
        fontWeight: '700',
        lineHeight: 19.6,
        letterSpacing: 0.2,
    },
    stockName:{
        color: '#A0AEC0',
        fontFamily: 'System',
        fontSize: 12,
        fontWeight: '400',
        lineHeight: 12, // Burada normal satır yüksekliği olduğunu belirtiyorum. İstenirse düzenlenebilir.
        letterSpacing: 0.2,

    },
    change:{
        color: '#33D49D', // --alert-success-base renk değeri
        fontFamily: 'System',
        fontSize: 12,
        fontWeight: '500',
        lineHeight: 12, // normal satır yüksekliği
        letterSpacing: 0.2,
    },
    chartContainer:{
        width:'100%',
    },
    infoBar:{
      
        backgroundColor:'white',
        marginHorizontal:25,
        paddingVertical:8,
        paddingHorizontal:12,
        alignItems:'center',
        justifyContent:'center',
        marginTop:37,
        marginBottom:24,
     
    },
    selectMode:{
        backgroundColor:'#FAFAFA',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        width:'100%',
        borderRadius:16,
        paddingVertical:8,

    },
    active:{
      
        display: 'flex',
        height: 40,
        padding: 4,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row', // Yatay yönde hizalama için
        marginHorizontal: 10, // Eğer gap özelliği gibi boşluk eklemek istiyorsanız, margin kullanabilirsiniz.
        width:'68%',
        borderRadius: 12,
        backgroundColor: '#FFF', // --others-white renk değeri
        shadowColor: '#717C96', // Kutu gölgesi için
        
    }
})