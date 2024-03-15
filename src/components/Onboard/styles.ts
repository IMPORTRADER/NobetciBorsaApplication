import {StyleSheet, Dimensions} from "react-native";

const styles = StyleSheet.create({
    buttonLogin: {
        borderRadius: 16,
        borderWidth: 1,
        borderColor: '#33D49D',
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    buttonRegister: {
        borderRadius: 16,
        borderWidth: 1,
        backgroundColor: '#33D49D',
        borderColor: '#33D49D',
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    buttonTextLogin: {
        color: '#33D49D',
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    buttonTextRegister: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold'
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
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 15,

    },
});

export default styles;