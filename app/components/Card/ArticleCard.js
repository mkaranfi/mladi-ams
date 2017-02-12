/**
 * Created by Mile on 2/9/2017.
 */
import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableHighlight,
    Navigator,
    Image
} from 'react-native';

import styles from './styles';
import DetailView from '../DetailView/DetailView';
var moment = require('moment');
// var HTMLParser = require('fast-html-parser');
var classScope;
class ArticleCard extends Component {

    constructor(props) {
        super(props);
        classScope = this;
    }

    /*setNativeProps(nativeProps) {
     this._root.setNativeProps(nativeProps);

     }*/

    _onPress(html) {
        classScope.props.navigator.push({
            name: 'DetailView',
            html: html,
        });
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
        let description = this.props.description;
        let imgSrc = this.props.image;
        return (
            <TouchableHighlight onPress={this._onPress.bind(this, description)}>
                <View style={[styles.card, styles.articleCard]}
                      ref={component => this._root = component} {...this.props}>
                    <View style={styles.articleCardRow}>
                        <Text style={[styles.mediumText, styles.topText]}>{message}</Text>
                    </View>
                    <View style={[styles.articleCardRow, styles.titleImage]}>
                        {this.props.image !== '' && <Image source={{uri: imgSrc}} style={styles.thumbnail}/>}
                        <Text numberOfLines={4} style={styles.title}>{this.props.title}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }
}
export default ArticleCard;