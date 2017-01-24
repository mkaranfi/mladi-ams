/**
 * Created by Mile on 24-Jan-17.
 */

import React, {Component} from 'react';
import {View, Text, TouchableHighlight, Linking} from 'react-native';

import styles from './styles';

var moment = require('moment');

class Card extends Component {
    setNativeProps(nativeProps) {
        this._root.setNativeProps(nativeProps);
    }

    _onPressButton(url) {
        Linking.openURL(url).catch(err => console.error('An error occurred', err));
    }


    render() {
        let crawlDate = this.props.date;
        let hours = moment().utcOffset(1).subtract(moment(crawlDate, 'DD.MM.YYYY HH:mm:ss')).hours();
        return (
            <TouchableHighlight onPress={()=>this._onPressButton(this.props.url)}>
            <View style={styles.card} ref={component => this._root = component} {...this.props}>
                <View style={styles.cardRow}>
                    <Text style={styles.smallText}>{this.props.site} | пред {hours} часа</Text>
                </View>
                <View style={styles.cardRow}>
                    <Text style={styles.title}>{this.props.title}</Text>
                </View>
                <View style={styles.cardRow}>
                    <Text numberOfLines={4} style={styles.mediumText}>{this.props.description}</Text>
                </View>
            </View>
            </TouchableHighlight>
        );
    }
}
export default Card;