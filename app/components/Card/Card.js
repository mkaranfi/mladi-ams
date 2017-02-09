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

    parseTimeMessage(crawlDate) {
        let message = moment(crawlDate, 'DD.MM.YYYY HH:mm:ss').toNow(true).toString();

        message = message.replace("a few seconds", "неколку секунди");
        message = message.replace("a minute", "една минута");
        message = message.replace("minutes", "минути");
        message = message.replace("an hour", "еден час");
        message = message.replace("hours", "часа");
        message = message.replace("a day", "еден ден");
        message = message.replace("days", "дена");
        message = message.replace("a month", "еден месец");
        message = message.replace("months", "месеца");
        message = message.replace("a year", "една година");
        message = message.replace("years", "години");

        return "пред " + message;
    }


    render() {
        message = this.parseTimeMessage(this.props.date);
        let borderBottomColor = '';
        switch (this.props.type) {
            case 'Internship':
                borderBottomColor = 'orangeBorder';
                break;
            case 'Job':
                borderBottomColor = 'greenBorder';
                break;
            case 'Seminar':
                borderBottomColor = 'yellowBorder';
                break;
            case 'Conference':
                borderBottomColor = 'redBorder';
                break;
            default:
                borderBottomColor = 'blueBorder';
                break;
        }
        return (
            <TouchableHighlight onPress={()=>this._onPressButton(this.props.url)}>
                <View style={[styles.card, styles[borderBottomColor]]} ref={component => this._root = component} {...this.props}>
                    <View style={styles.cardRow}>
                        <Text style={[styles.smallText, styles.topText]}>{this.props.site} | {message}</Text>
                    </View>
                    <View style={styles.cardRow}>
                        <Text style={styles.title}>{this.props.title}</Text>
                    </View>
                    <View style={styles.cardRow}>
                        <Text numberOfLines={3} style={styles.mediumText}>{this.props.description}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }
}
export default Card;