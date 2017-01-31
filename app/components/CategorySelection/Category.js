/**
 * Created by student on 1/26/17.
 */

import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './styles';

class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pressStatus: false
        };
    }

    _onPress() {
        this.props.parentFunct(this.props.text);
        let status = !this.state.pressStatus;
        this.setState({
            pressStatus: status
        });
    }

    render() {
        return (
            <View style={styles.categoryLayout}>
                <TouchableOpacity
                    onPress={this._onPress.bind(this)}
                    style={[styles.category, this.state.pressStatus ? styles.lightgray : styles.dark]}>
                    <Text style={styles.innerText}>{this.props.text}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
export default Category;