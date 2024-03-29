import {StyleSheet, Dimensions} from "react-native";

const {height,width} = Dimensions.get('window')
const styles = StyleSheet.create({
    mainComponent:{
        marginTop:25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo:{
        width:417,
        height:181,
        resizeMode: 'stretch'
    },
    textMain:{
        fontWeight: 'bold',
        fontSize: 24,
        color: '#2D3748'
    },
    textDescription:{
        textAlign: 'center',
        marginTop:10,
        color: '#A0AEC0',
        fontSize:16
    },
    highlightedText:{
        color: '#33D49D'
    },
    input:{
        height: 40,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: '#E2E8F0', // Gri renk
        paddingHorizontal: 10,
        width: '100%',

    },
    inputMultiline:{
        height: 70,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: '#E2E8F0', // Gri renk
        paddingHorizontal: 10,
        width: '100%',
    },
    container: {
        flexDirection: 'row',
        width: 325,
        height: 56,
        paddingVertical: 8,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop:16
    },
    button:{
        display: 'flex',
        width: 325,
        height: 56,
        padding: 8,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignContent: 'flex-start',
        gap: 10,
        flexShrink: 0,
        borderRadius: 16,
        backgroundColor: '#33D49D',
    },
    buttonText: {
        color: '#FFF',
        fontSize: 14,
        fontWeight: '700',
        lineHeight: 19.6,
        letterSpacing: 0.2,
        marginTop:18
    },
    scrollView:{
        height: '100%'
    },
    layout: {
        display: 'flex',
        width: 152,
        height: 56,
        padding: 8,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        flexShrink: 0,
    },
    buttonGoogle: {
        borderRadius: 16,
        borderWidth: 1,
        borderColor: '#E2E8F0',
        paddingVertical: 10,
        paddingHorizontal: 20,
    },

    radioButtonRight: {
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 16,
        borderBottomLeftRadius:0,
        borderTopLeftRadius:0,
        marginVertical: 8,
        borderWidth: 1,
        borderLeftWidth: 0,
        borderColor: '#E2E8F0',
        backgroundColor: '#ffffff',
        alignItems: 'center',
        marginRight:-15,
        width: 170,
    },
    radioButtonLeft: {
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 16,
        borderBottomRightRadius:0,
        borderTopRightRadius:0,
        marginVertical: 8,
        borderWidth: 1,
        borderRightWidth: 0,
        borderColor: '#E2E8F0',
        backgroundColor: '#ffffff',
        alignItems: 'center',
        marginRight:-15,
        width: 170,
    },
    radioButtonText: {
        fontSize: 14,
        color: '#A0AEC0',
    },
    radioContainer:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:8,
    },
    radioButtonSelected: {
        backgroundColor: '#fff',
        shadowColor: '#000',
    },
    radioButtonTextSelected: {
        color: '#33D49D',
        fontWeight: 'bold',
    },


})

export default styles;