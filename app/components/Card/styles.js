/**
 * Created by Mile on 24-Jan-17.
 */
import {StyleSheet} from 'react-native';

let styles = StyleSheet.create({
    card: {
        flex: 1,
        flexDirection: 'column',
        borderTopWidth: 1,
        borderTopColor: '#eaeae8',
        borderBottomWidth: 2,
        borderBottomColor: '#cfcfc2',
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
    mediumText: {
        fontSize: 12
    },
    smallText: {
        fontSize: 10
    },
    spinner: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        color: '#444',
        fontSize: 20,
        marginTop: 5,
        marginBottom: 7
    },
    topText: {
        fontWeight: 'bold'
    }
});
export default styles;