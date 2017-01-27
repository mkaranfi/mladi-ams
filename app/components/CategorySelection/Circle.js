/**
 * Created by student on 1/26/17.
 */

import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './styles';

class Circle extends Component {
    constructor(props) {
        super(props);
        this.state = {pressStatus: false};
    }

    _onPress() {
        let status = !this.state.pressStatus;
        this.setState({
            pressStatus: status
        });
    }

    render() {
        return (
            <TouchableOpacity
                onPress={this._onPress.bind(this)}>
                <View style={this.state.pressStatus ? styles.buttonPress : styles.circle}>
                    <Text style={[styles.innerText]}>{this.props.text}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}
export default Circle;