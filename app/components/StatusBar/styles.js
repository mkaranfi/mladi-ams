/**
 * Created by User on 2/13/17.
 */
const React = require('react-native')
const {StyleSheet} = React
const constants = {
    actionColor: '#24CE84',
};


var styles = StyleSheet.create({
    navbar: {
        alignItems: 'center',
        backgroundColor: '#fff',
        borderBottomColor: '#eee',
        borderColor: 'transparent',
        borderWidth: 1,
        justifyContent: 'flex-start',
        height: 50,
        flexDirection: 'row'
    },
    navbarTitle: {
        color: '#444',
        fontSize: 16,
        fontWeight: "500",
        paddingRight: 35,
        paddingLeft: 10,
    },
    statusbar: {
        backgroundColor: '#fff',
        height: 22,
    },
    backBtn: {
      paddingLeft: 10,
      paddingRight: 5,
    },
})

module.exports = styles
module.exports.constants = constants;