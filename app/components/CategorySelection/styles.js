/**
 * Created by student on 1/26/17.
 */

import { StyleSheet } from 'react-native';

let styles = StyleSheet.create({
    blueBorder: {
        borderColor: '#4CA9DB'
    },
    blueFilled: {
        borderColor: '#4CA9DB',
        backgroundColor: '#4CA9DB'
    },
    category: {
        width: 100,
        height: 120,
        borderRadius: 10,
        borderWidth: 2,
        justifyContent: 'center'
    },
    categoriesLayout: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10
    },
    categoryLayout: {
        padding: 5
    },
    contentLayout: {
        backgroundColor: '#F5F5F5',
        flex: 1,
        alignItems: 'center'
    },
    dark: {
        backgroundColor: '#333'
    },
    darkText: {
        color: '#444',
    },
    greenBorder: {
        borderColor: '#AA7EBB'
    },
    greenFilled: {
        borderColor: '#AA7EBB',
        backgroundColor: '#AA7EBB'
    },
    innerText: {
        fontWeight: 'bold',
        fontSize: 11,
        textAlign: 'center'
    },
    leadText: {
        color: '#444',
        fontFamily: 'Exo2-Black',
        fontSize: 50,
        padding: 5,
        paddingTop: 20,
        textAlign: 'center'
    },
    lightgray: {
        backgroundColor: 'lightgray'
    },
    lightText: {
        color: '#F5F5F5'
    },
    orangeBorder: {
        borderColor: '#EE9926'
    },
    orangeFilled: {
        borderColor: '#EE9926',
        backgroundColor: '#EE9926'
    },
    redBorder: {
        borderColor: '#E95650'
    },
    redFilled: {
        borderColor: '#E95650',
        backgroundColor: '#E95650'
    },
    saveButton: {
        fontSize: 18,
        color: '#444',
        textAlign: 'center'
    },
    subText: {
        fontSize: 16,
        paddingLeft: 60,
        paddingRight: 60,
        textAlign: 'center',
        fontFamily: 'Exo2-ExtraLight'
    },
    touchable: {
        width: 180,
        height: 45,
        backgroundColor: 'mediumaquamarine',
        borderRadius: 180 / 2,
        borderColor: 'mediumaquamarine',
        marginBottom: 10,
        justifyContent: 'center'
    },
    yellowBorder: {
        borderColor: '#e1c005'
    },
    yellowFilled: {
        borderColor: '#e1c005',
        backgroundColor: '#e1c005'
    }
});
export default styles;
