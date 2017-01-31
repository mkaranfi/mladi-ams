/**
 * Created by student on 1/31/17.
 */
import React, {Component} from 'react';
import {View, TouchableHighlight, Text} from 'react-native';

import styles from './styles';
class Button extends Component {
    _onPress() {
    }

    render() {
        return (
            <TouchableHighlight
                style={styles.touchable}
                onPress={this._onPress}>
                <View>
                    <Text style={styles.saveButton}>Зачувај</Text>
                </View>
            </TouchableHighlight>
        );
    }
}
export default  Button;