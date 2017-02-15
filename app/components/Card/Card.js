/**
 * Created by Mile on 24-Jan-17.
 */

import React, {Component} from 'react';
import {View, Text, AsyncStorage, TouchableHighlight, Linking} from 'react-native';

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

    onLongPress() {
        var item = {}
        item.type = this.props.type;
        item.title = this.props.title;
        item.site = this.props.site;
        item.date = this.props.date;
        item.description = this.props.description;
        item.url = this.props.url;
        var values = [];
        try {
            var value = AsyncStorage.getItem('SavedItems').then((value) => {
                if (value !== null){
                    values = JSON.parse(value);
                    values.push(item);
                } else {
                    values.push(item)
                }
                AsyncStorage.setItem('SavedItems', JSON.stringify(values));
            });
        } catch (error) {
            // Error retrieving data
        }
    }


    render() {
        let message = this.parseTimeMessage(this.props.date);
        let type = '';
        let borderBottomColor = '';
        switch (this.props.type) {
            case 'Internship':
                borderBottomColor = 'orangeBorder';
                type = 'пракса';
                break;
            case 'Job':
                borderBottomColor = 'greenBorder';
                type = 'вработување';
                break;
            case 'Seminar':
                borderBottomColor = 'yellowBorder';
                type = 'семинар';
                break;
            case 'Conference':
                borderBottomColor = 'redBorder';
                type = 'конференција';
                break;
            default:
                borderBottomColor = 'blueBorder';
                type = 'стипендија';
                break;
        }
        return (
            <TouchableHighlight onLongPress={this.onLongPress.bind(this)} onPress={() => this._onPressButton(this.props.url)}>
                <View style={[styles.card, styles[borderBottomColor]]}
                      ref={component => this._root = component} {...this.props}>
                    <View style={styles.cardRow}>
                        <Text style={[styles.smallText, styles.topText]}>{this.props.site} | {type} | {message}</Text>
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