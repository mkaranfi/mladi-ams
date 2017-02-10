import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
    },
    buttonContainer: {
        backgroundColor: '#efefed',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row'
    },
    card: {
        borderWidth: 1,
        backgroundColor: '#fff',
        borderColor: 'rgba(0,0,0,0.1)',
        margin: 5,
        height: 150,
        padding: 15,
        shadowColor: '#ccc',
        shadowOffset: {width: 2, height: 2,},
        shadowOpacity: 0.5,
        shadowRadius: 3,
    },
    categoryButton: {
        margin: 5,
        borderWidth: 1,
        borderColor: '#d4d4d4',
        maxWidth: 180
    },
    categoryButtonText: {
        textAlign: 'center',
        margin: 5,
        color: '#666',
        fontWeight: 'bold'

    },
    darkBackground: {
        backgroundColor: '#d4d4d4',
    },
    darkFont: {
        color: '#7d7b7b'
    },
    lightBackgroung: {
        backgroundColor: '#efefed'
    },
    lightFont: {
        color: '#efefed'
    },
    saveButton: {
        fontSize: 18,
        color: '#444',
        textAlign: 'center'
    },
    tab: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 10,
    },
    tabs: {
        height: 45,
        flexDirection: 'row',
        paddingTop: 5,
        borderWidth: 1,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderBottomColor: 'rgba(0,0,0,0.05)',
    },
    tabView: {
        flex: 1,
        padding: 10,
        backgroundColor: 'rgba(0,0,0,0.01)',
    },
    touchable: {
        width: 180,
        height: 45,
        backgroundColor: 'mediumaquamarine',
        borderRadius: 180 / 2,
        borderColor: 'mediumaquamarine',
        marginBottom: 10,
        justifyContent: 'center'
    }
});
export default styles;
