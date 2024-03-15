import React, {useState} from 'react';
import {Button, Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import styles from "./styles"
function Index() {

    const {width, height} = Dimensions.get("window");

    const data = [{
        title: 'Anlık Bildirim Özelliği',
        text: 'Hisselerinizi takip edin, anlık bildirimlerle \n fiyat değişikliklerinden hemen haberdar \n olun.',
        image: require('../../../assets/onboarding/onboard-1.png'),
    },
        {
            title: 'Canlı Fiyat Takibi',
            text: 'Kendi takip listenizi oluşturun, hisselerin \n anlık fiyat değişimlerini canlı takip edin.',
            image: require('../../../assets/onboarding/onboard-2.png'),
        },
    ]


    return (
        <View>
            <View>
                <FlatList
                    style={{
                        marginTop:100,
                    }}
                    data={data}
                    renderItem={({ item }) => (
                        <View style={{ display: 'flex',
                            width: 375,
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',

                        }}>
                            <Image
                                source={item.image}
                                style={{ width: width, height: height * 0.45, marginBottom: 16, resizeMode: 'stretch' }}
                            />
                            <Text style={{color: '#2D3748',
                                textAlign: 'center',
                                fontFamily: 'System',
                                fontSize: 24,
                                fontWeight: '700',
                                lineHeight: 28.8,
                                marginBottom: 16}}>{item.title}</Text>
                            <Text style={{ color: '#A0AEC0',
                                textAlign: 'center',
                                fontFamily: 'System',
                                fontSize: 16,
                                fontWeight: '400',
                                lineHeight: 22.4,
                                letterSpacing: 0.2,
                                marginBottom: 16}}>{item.text}</Text>
                        </View>

                    )}
                    horizontal
                    persistentScrollbar
                    snapToInterval={width}
                    snapToAlignment={"center"}
                    decelerationRate={"fast"}
                />
                <View style={styles.container}>
                    <TouchableOpacity
                        style={StyleSheet.compose(styles.layout, styles.buttonLogin)}
                        onPress={() => console.log('Touchable pressed')}>
                        <Text style={styles.buttonTextLogin}>Giriş Yap</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={StyleSheet.compose(styles.layout, styles.buttonRegister)}
                        onPress={() => console.log('Touchable pressed')}>
                        <Text style={styles.buttonTextRegister}>Kayıt Ol</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default Index;