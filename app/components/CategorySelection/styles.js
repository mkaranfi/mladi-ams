/**
 * Created by student on 1/26/17.
 */

import {StyleSheet} from 'react-native';

let styles = StyleSheet.create({
    buttonPress: {
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
        justifyContent: 'center',
        backgroundColor: '#333'
    },
    circle: {
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
        justifyContent: 'center',
        backgroundColor: 'lightgray'
    },
    circles: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    firstRow: {
        paddingLeft: 70,
        paddingRight: 70,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    innerText: {
        fontWeight: 'bold',
        color: '#fff',
        fontSize: 12,
        textAlign: 'center'
    },
    leadText: {
        color: '#444',
        fontFamily: 'Geometria-Heavy',
        transform: [{scaleY: 1.1}],
        fontSize: 50,
        padding: 5,
        paddingTop: 12,
        paddingBottom: 10,
        textAlign: 'center'
    },
    schollarships: {
        transform: [{translateY: 160}]
    },
    internships: {
        transform: [{translateY: 160}]
    },
    // job: {
    //     transform: [{translateX: 250}, {translateY: -30}]
    // },
    // seminar: {
    //     transform: [{translateX: 10}, {translateY: -100}]
    // },
    // conference: {
    //     transform: [{translateX: 120}, {translateY: -200}]
    // },
    saveBtn: {
        width: 50,
        height: 20
    },
    styleLayout: {
        backgroundColor: '#F5F5F5',
        flex: 1
    },
    subText: {
        fontSize: 14,
        paddingLeft: 100,
        paddingRight: 100,
        textAlign: 'center'
    },
    secondRow: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
});
export default styles;
