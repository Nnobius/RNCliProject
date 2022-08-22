import {StyleSheet} from "react-native";

export const gStyles = StyleSheet.create({
    content: {
        backgroundColor: '#E5E5E5',
        flex: 1,
        marginTop: 30,
    },
    titleContent: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 16,
        paddingTop: 10
    },
    titleText: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 28,
        lineHeight: 36,
        letterSpacing: 0.2,
        color: '#191C1F',
        paddingLeft: 7
    },
    scrollBlock: {
        marginTop: 24
    },

    newsBlock: {
        borderRadius: 12,
        backgroundColor: '#FFFFFF',
        padding: 16,
        marginBottom: 16,
        marginRight: 16,
        marginLeft: 16,
        flexDirection: 'column'
    },
    titleItem: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 17,
        color: '#191C1F',
        marginBottom: 16
    },
    bodyItem: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 15,
        color: '#191C1F',
        marginBottom: 16
    },
    blockDownItem: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    dateItem: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 14,
        color: '#8B959E',
        letterSpacing: -0.1
    },
    btnItem: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: "center"
    },
    btnTextItem: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 14,
        lineHeight: 22,
        letterSpacing: -0.1,
        color: '#FF7700',
        paddingRight: 10
    },
    iconDown: {
        transform: [{
            rotate: '360deg'
        }]
    },
    iconUp: {
        transform: [{
            rotate: '180deg'
        }]
    },
    imageItem: {
        paddingRight: 16,
        paddingLeft: 16,
        height: 150,
        marginBottom: 17,
    }
})