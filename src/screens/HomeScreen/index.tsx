import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native'
import Svg, { Path } from 'react-native-svg';
import { Feather } from '@expo/vector-icons';
import Watchlist from '../../components/Watchlist';

const { width, height } = Dimensions.get('window')
// @ts-ignore
const ImageSVG = ({ width, height, color }) => (
  <Svg width={width} height={height} viewBox="0 0 32 48">
    <Path fill={color} d="M18.3931 22.1752C18.489 22.1369 18.5304 22.0166 18.5166 21.8143C18.5116 21.7418 18.5346 21.733 18.5861 21.788C18.6083 21.8117 18.6201 21.8405 18.6213 21.8743C18.6242 21.9955 18.6494 22.0434 18.6967 22.0177C18.7616 21.9829 18.8362 22.0117 18.9199 22.104C18.9865 22.1798 19.0686 22.2178 19.1662 22.218C20.1964 22.2191 21.2254 22.3191 22.2519 22.5177C22.597 22.5838 22.9417 22.5986 23.2864 22.5622C23.3559 22.5557 23.4057 22.5209 23.4355 22.458L23.5682 22.1902C23.6256 22.0734 23.6976 22.0694 23.7839 22.1781L24.0976 22.5764L24.0373 8.50278C24.0369 8.47929 24.041 8.45634 24.0498 8.43519C24.0586 8.41408 24.072 8.39519 24.0884 8.3797C24.1051 8.3642 24.1248 8.35239 24.1466 8.3449C24.1684 8.33744 24.1918 8.33443 24.2157 8.33614L28.3392 8.64916C28.3669 8.6515 28.3937 8.64652 28.4175 8.63467C28.4414 8.62286 28.4611 8.60464 28.4749 8.58186C28.4883 8.55907 28.4954 8.53256 28.4954 8.50505C28.4954 8.47753 28.4879 8.44997 28.4741 8.42518L21.109 -4.80381C21.0956 -4.82693 21.0772 -4.84661 21.0546 -4.86098C21.0324 -4.87534 21.0072 -4.88389 20.9813 -4.88577C20.9557 -4.88766 20.9306 -4.8828 20.9084 -4.8717C20.8862 -4.8606 20.8678 -4.84364 20.8548 -4.82249L13.6204 7.31782C13.6049 7.34333 13.5969 7.37306 13.5969 7.40393C13.5969 7.43479 13.6053 7.46574 13.6208 7.49364C13.6363 7.52153 13.6585 7.54536 13.6853 7.56274C13.7121 7.58008 13.7423 7.59038 13.7732 7.59256L18.1715 7.89087C18.2666 7.89787 18.3139 7.94846 18.3135 8.04265L18.3931 22.1752Z" />
    <Path fill={color} d="M31.5323 16.5192L31.6801 45.2411C31.6805 45.3542 31.5896 45.4392 31.477 45.4308L26.177 45.0422C26.0644 45.0338 25.9722 44.9354 25.9718 44.8223L25.824 16.1003C25.8236 15.9871 25.9144 15.9021 26.0275 15.9103L31.3271 16.2992C31.4397 16.3075 31.5318 16.406 31.5323 16.5192Z" />
    <Path fill={color} d="M18.393 22.1753L18.4307 30.498C18.4303 30.5152 18.4253 30.5315 18.4157 30.5454C18.406 30.5588 18.3926 30.5688 18.3767 30.5747C18.3608 30.5801 18.3432 30.5805 18.3265 30.5763C18.3093 30.5717 18.2938 30.5625 18.2812 30.55L7.73898 19.2572C7.72265 19.2401 7.70204 19.2277 7.67972 19.2218C7.65735 19.2158 7.63428 19.2165 7.61334 19.2237C7.5924 19.2309 7.57456 19.2444 7.56195 19.2623C7.54939 19.2803 7.54264 19.3021 7.5426 19.3249L7.71071 52.3294C7.71096 52.3495 7.71511 52.3696 7.7229 52.3885C7.73069 52.4077 7.742 52.4253 7.75611 52.4404C7.77027 52.4555 7.78698 52.468 7.80532 52.4768C7.82366 52.4856 7.84326 52.4911 7.86299 52.4923L13.2229 52.8856C13.2485 52.8877 13.2736 52.8843 13.2975 52.8764C13.3209 52.868 13.3427 52.8554 13.3607 52.8387C13.3787 52.8215 13.393 52.801 13.4026 52.778C13.4122 52.7549 13.4168 52.7298 13.4168 52.7042L13.3155 33.3811C13.3151 33.3714 13.3176 33.3622 13.323 33.3543C13.328 33.3463 13.3356 33.3409 13.3448 33.3379C13.3536 33.3346 13.3636 33.3346 13.3728 33.3375C13.3825 33.3404 13.3909 33.3463 13.3971 33.3543L24.0184 44.752C24.0347 44.77 24.0561 44.7834 24.0787 44.7897C24.1018 44.796 24.1256 44.7951 24.1474 44.7876C24.1692 44.7801 24.188 44.7662 24.2014 44.747C24.2144 44.7281 24.2215 44.7055 24.2215 44.6812L24.0976 22.5764L23.7839 22.1781C23.6976 22.0694 23.6256 22.0734 23.5682 22.1902L23.4354 22.458C23.4057 22.521 23.3559 22.5557 23.2863 22.5623C22.9417 22.5986 22.597 22.5838 22.2519 22.5178C21.2254 22.3191 20.1964 22.2192 19.1662 22.218C19.0686 22.2179 18.9865 22.1798 18.9199 22.104C18.8361 22.0117 18.7616 21.983 18.6967 22.0178C18.6494 22.0434 18.6242 21.9956 18.6213 21.8744C18.62 21.8405 18.6083 21.8117 18.5861 21.788C18.5346 21.733 18.5116 21.7418 18.5166 21.8143C18.5304 22.0166 18.489 22.137 18.393 22.1753Z" />
    <Path fill={color} d="M6.04801 19.2006L6.18018 44.8852C6.18094 45.0326 6.06246 45.1432 5.91558 45.1327L0.719445 44.7512C0.57257 44.7403 0.452877 44.6121 0.452123 44.4651L0.31995 18.7803C0.319196 18.633 0.437675 18.5224 0.584549 18.5332L5.78068 18.9145C5.92756 18.9252 6.04725 19.0534 6.04801 19.2006Z" />
  </Svg>
);


function Index() {


  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Image source={require('../../../assets/logoyesil.svg')} style={styles.svgImage} />
        <ImageSVG width={32} height={48} color="#33D49D" />

        <View style={{flexDirection:'row',justifyContent:'space-between',width:'75%',}}>
          <Text style={styles.bannerText}>NöbetçiBorsa</Text>
          <Feather name="bell" size={24} color="grey" style={{paddingTop:12}} />
        </View>
      </View>

      <View style={styles.portfolioCard}>
          <View style={styles.cardContainer}>
            <Text style={styles.degisim}>Toplam Değişim</Text>
            <Text style={styles.miktar}>%31,31</Text>
            <View style={styles.stockContainer}>
              <View style={styles.stateContainer} >
                <View style={{ width: 6, height: 6, backgroundColor: '#52FFC4', borderRadius: 3, marginRight: 4, marginTop: 4 }} ></View>
                <Text style={styles.miktarText}>Tavandaki hisse: </Text>
                <Text style={styles.hisseAdet}>3</Text>
              </View>
              <View style={styles.stateContainer} >
                <View style={{ width: 6, height: 6, backgroundColor: '#FF6B6B', borderRadius: 3, marginRight: 4, marginTop: 4 }} ></View>
                <Text style={styles.miktarText}>Tabandaki Hisse: </Text>
                <Text style={styles.hisseAdet}>2</Text>
              </View>
            </View>
          </View>
          <Watchlist />
        
      </View>




    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white',
    alignItems: 'center',
    flexDirection: 'column',
  },

  navbar: {
    
    flexDirection: 'row',
    width: '100%',
    marginTop: 70,
    height: '10%',
  },

  portfolioCard: {
    width: 325,
    height: 169,
    borderRadius: 20,
    backgroundColor: '#33D49D',
    flexShrink: 0,
    
  },

  svgImage: {
    width: 32,
    height: 48,
  },

  bannerText: {
    color: '#1A202C',
    fontFamily: 'System',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 24 * 1.2,
    paddingTop: 12,
    paddingLeft: 5,
  },
  cardContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  degisim: {
    color: '#E2E8F0', // var(--grayscale-gray-400, #E2E8F0) içeriğini doğrudan yerine koyduk
    fontFamily: 'System',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 19.6 * 1.4, // 140% line-height = font-size * 1.4
    letterSpacing: 0.2,
  },
  miktar: {
    color: '#FFF', // var(--others-white, #FFF) içeriğini doğrudan yerine koyduk
    fontFamily: 'System',
    fontSize: 32,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 35.2 * 1.1, // 110% line-height = font-size * 1.1
  },
  stockContainer: {
    width: '100%',
    height: 40,
    flexDirection: 'row',
    borderRadius: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.20)',
    flexShrink: 1,
    marginTop: 26,
    paddingHorizontal: 20,
    paddingRight:10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  miktarText: {
    color: '#E2E8F0', // var(--grayscale-gray-400, #E2E8F0) içeriğini doğrudan yerine koyduk
    fontFamily: 'System',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '500',
    letterSpacing: 0.2,
  },
  hisseAdet: {
    color: '#FFF', // var(--others-white, #FFF) içeriğini doğrudan yerine koyduk
    fontFamily: 'System',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '700',
    letterSpacing: 0.2,
  },
  stateContainer: {
  
    flexDirection: 'row',
  }


});

export default Index