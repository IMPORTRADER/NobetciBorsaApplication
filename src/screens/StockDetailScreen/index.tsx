import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import React, { useState } from 'react'
import { Feather } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';


const Index = () => {

    const [active, setActive] = useState(true);
    const [deActive, setdeActive] = useState(false);

    const handleActive = () => {
        setActive(true);
        setdeActive(false);
    };

    const handledeActive = () => {
        setActive(false);
        setdeActive(true);
    };
    return (
        <SafeAreaView style={styles.container}>
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
                <View style={styles.changeSex} >
                    <TouchableOpacity
                        style={[styles.notChanged, active ? styles.onChanged : null]}
                        onPress={handleActive}
                    >
                        <Text style={[styles.notChangedText, active ? styles.onChangedText : null]}>Derinlik Bilgisi</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.notChanged, deActive ? styles.onChanged : null]}
                        onPress={handledeActive}
                    >
                        <Text style={[styles.notChangedText, deActive ? styles.onChangedText : null]}>Detaylar</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }} >
                <Text style={styles.listText} >Takip Listem</Text>
                

            </View>
            <TouchableOpacity style={styles.buttonEnvironment} >
                <Text style={styles.sendCode} >Takip Listeme Ekle</Text>
            </TouchableOpacity>

        </SafeAreaView>
    )
}

export default Index

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',

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
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        marginHorizontal: 25,
        paddingHorizontal: 25,
        paddingTop: 20,
        marginVertical: 25,
        borderRadius: 25,
        backgroundColor: '#FAFAFA',



    },
    stockNameInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
    },
    priceState: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingVertical: 10,
    },
    priceContainer: {
        flexDirection: 'column',
        alignItems: 'flex-end',

    },
    price: {
        color: '#2D3748',
        textAlign: 'right',
        fontFamily: 'System',
        fontSize: 18,
        fontWeight: '700',
        lineHeight: 25.2,
        letterSpacing: 0.2,
    },
    priceName: {
        color: '#A0AEC0',
        textAlign: 'left',
        fontFamily: 'System',
        fontSize: 12,
        fontWeight: '500',
        letterSpacing: 0.2,
    },
    stockCode: {
        color: '#2D3748',
        fontFamily: 'System',
        fontSize: 14,
        fontWeight: '700',
        lineHeight: 19.6,
        letterSpacing: 0.2,
    },
    stockName: {
        color: '#A0AEC0',
        fontFamily: 'System',
        fontSize: 12,
        fontWeight: '400',
        lineHeight: 12, // Burada normal satır yüksekliği olduğunu belirtiyorum. İstenirse düzenlenebilir.
        letterSpacing: 0.2,

    },
    change: {
        color: '#33D49D', // --alert-success-base renk değeri
        fontFamily: 'System',
        fontSize: 12,
        fontWeight: '500',
        lineHeight: 12, // normal satır yüksekliği
        letterSpacing: 0.2,
    },
    chartContainer: {
        width: '100%',
    },
    infoBar: {

        backgroundColor: 'white',

        paddingVertical: 8,
        paddingHorizontal: 12,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 37,
        marginBottom: 24,

    },
    selectMode: {
        backgroundColor: '#FAFAFA',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        borderRadius: 16,
        paddingVertical: 8,

    },
    active: {

        display: 'flex',
        height: 40,
        padding: 4,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row', // Yatay yönde hizalama için
        marginHorizontal: 10, // Eğer gap özelliği gibi boşluk eklemek istiyorsanız, margin kullanabilirsiniz.
        width: '68%',
        borderRadius: 12,
        backgroundColor: '#FFF', // --others-white renk değeri
        shadowColor: '#717C96', // Kutu gölgesi için

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
        fontWeight: '500',
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
        alignSelf: 'center',
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

    listText: {
        color: '#2D3748',
        alignSelf: 'flex-start',
        marginLeft: 25,
        fontWeight: '700',
        lineHeight: 21.6,
        letterSpacing: 0.2,
        fontSize: 18,

    },

    watchlist: {
        width: '100%',
        backgroundColor: 'red',
    },
})