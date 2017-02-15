import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Animated} from 'react-native';

import styles from './styles';

class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pressStatus: this.props.isSelected
        };
        this.springValue = new Animated.Value(0.3);
    }

    _onPress() {
        this.props.parentFunct(this.props.text);
        let status = !this.state.pressStatus;
        this.setState({
            pressStatus: status
        });
        if (status)
            this.spring();
    }

    componentWillMount() {
        this.props.isSelected ?
            setTimeout(this.spring.bind(this), Math.random() * ((0.5 - 0.2) + 0.2) * 1000) : this.springValue = new Animated.Value(1);
    }

    spring() {
        this.springValue.setValue(0.3);
        Animated.spring(
            this.springValue,
            {
                toValue: 1,
                friction: 1
            }
        ).start()
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
                styleColor = 'purpleBorder';
                styleColorPressed = 'purpleFilled';
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
            <Animated.View style={{transform: [{scale: this.springValue}]}}>
                <TouchableOpacity
                    style={[styles.category, this.state.pressStatus ? styles[styleColorPressed] : styles[styleColor]]}
                    onPress={this._onPress.bind(this)}>
                    <Text
                        style={[styles.innerText, this.state.pressStatus ? styles.lightText : styles.darkText]}>{this.props.text}</Text>

                </TouchableOpacity>
            </Animated.View>
        )
    }
}
export default Category;