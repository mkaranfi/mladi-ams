'use strict';
import React, {Component} from 'react';
import ReactNative from 'react-native';
const styles = require('./styles.js')
const { StyleSheet, TouchableHighlight, Navigator, Text, View} = ReactNative;
import Icon from 'react-native-vector-icons/Ionicons';
var thisClass;

class StatusBar extends Component {

    render() {
        return (
            <View>
                <View style={styles.navbar}>
                    <TouchableHighlight
                        underlayColor={'#f2f2f2'}
                        style={styles.backBtn}
                        onPress={this.props.onPress}>
                        <Icon name={'ios-arrow-back'}
                              size={35}
                              color={'#000'}
                              />
                    </TouchableHighlight>
                    <Text
                        ellipsizeMode={'tail'}
                        numberOfLines={1}
                        style={styles.navbarTitle}>
                        {this.props.title}
                    </Text>
                </View>
            </View>
        );
    }
}

module.exports = StatusBar;