/**
 * Created by Mile on 24-Jan-17.
 */
import { StyleSheet } from 'react-native';

let styles = StyleSheet.create({
    blueBorder: {
        borderColor: '#4CA9DB'
    },
    card: {
        flex: 1,
        flexDirection: 'column',
        borderTopWidth: 1,
        borderTopColor: '#eaeae8',
        borderBottomWidth: 3,
        backgroundColor: '#fff',
        marginBottom: 12,
        padding: 10
    },
    cardRow: {
        paddingLeft: 15,
        paddingRight: 15
    },
    container: {
        flex: 1,
        paddingTop: 22,
        backgroundColor: '#efefed'
    },
    greenBorder: {
        borderColor: '#AA7EBB'
    },
    mediumText: {
        fontSize: 12
    },
    orangeBorder: {
        borderColor: '#EE9926'
    },
    redBorder: {
        borderColor: '#E95650'
    },
    smallText: {
        fontSize: 10
    },
    spinner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: '#444',
        fontSize: 20,
        marginTop: 5,
        marginBottom: 7
    },
    topText: {
        fontWeight: 'bold'
    },
    yellowBorder: {
        borderColor: '#e1c005'
    },
});
export default styles;