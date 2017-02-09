/**
 * Created by student on 1/26/17.
 */

import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

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
        let styleColor = '';
        let styleColorPressed = '';
        switch (this.props.text) {
            case 'ПРАКСИ':
                styleColor = 'orangeBorder';
                styleColorPressed = 'orangeFilled';
                break;
            case 'РАБОТА':
                styleColor = 'greenBorder';
                styleColorPressed = 'greenFilled';
                break;
            case 'СЕМИНАРИ':
                styleColor = 'yellowBorder';
                styleColorPressed = 'yellowFilled';
                break;
            case 'КОНФЕРЕНЦИИ':
                styleColor = 'redBorder';
                styleColorPressed = 'redFilled';
                break;
            default:
                styleColor = 'blueBorder';
                styleColorPressed = 'blueFilled';
                break;
        }
        return (
            <View style={styles.categoryLayout}>
                <TouchableOpacity
                    onPress={this._onPress.bind(this)}
                    style={[styles.category, this.state.pressStatus ? styles[styleColorPressed] : styles[styleColor]]}>
                    <Text style={[styles.innerText, this.state.pressStatus ? styles.lightText : styles.darkText]}>{this.props.text}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
export default Category;