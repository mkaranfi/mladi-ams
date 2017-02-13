/**
 * Created by Mile on 24-Jan-17.
 */
import {StyleSheet} from 'react-native';

let styles = StyleSheet.create({
    articleCardRow: {
        paddingHorizontal: 5
    },
    articleCard: {
        padding: 5,
        borderBottomWidth: 2,
        borderBottomColor: '#cfcfc2'
    },
    blueBorder: {
        borderColor: '#4CA9DB'
    },
    card: {
        flex: 1,
        flexDirection: 'column',
        borderTopWidth: 1,
        borderTopColor: '#eaeae8',
        borderBottomWidth: 2,
        backgroundColor: '#fff',
        marginBottom: 12,
        padding: 10
    },
    cardRow: {
        paddingHorizontal: 15
    },
    centering: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8
    },
    container: {
        flex: 1,
        paddingTop: 5,
        backgroundColor: '#efefed'
    },
    greenBorder: {
        borderColor: '#AA7EBB'
    },
    infoCard: {
        flex: 1,
        flexDirection: 'column',
        borderTopWidth: 1,
        borderTopColor: '#eaeae8',
        borderBottomWidth: 2,
        borderBottomColor: '#cfcfc2',
        backgroundColor: '#fff',
        marginBottom: 5,
        padding: 5
    },
    infoCardRow: {
        paddingHorizontal: 5,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    infoTitle: {
        fontWeight: '700',
        fontSize: 18
    },
    listHeading: {
        marginVertical: 10,
        fontSize: 35,
        textAlign: 'center',
        alignSelf: 'center',
        color:'#4C9BFF'
    },
    searchBarMargin: {
        marginTop: 70
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
    thumbnail: {
        width: 100,
        height: 70,
        marginRight: 5,
        marginTop: 5,
        flex: 2
    },
    title: {
        color: '#444',
        fontSize: 16,
        flex: 3,
        paddingVertical: 2
    },
    titleImage: {
        alignItems: 'flex-start',
        flexDirection: 'row',
        flex: 1,
        marginBottom: 3
    },
    topText: {
        fontWeight: 'bold'
    },
    websiteUrl: {
        textDecorationLine: 'underline',
        color: 'blue',
        fontSize: 12
    },
    yellowBorder: {
        borderColor: '#e1c005'
    }
});
export default styles;