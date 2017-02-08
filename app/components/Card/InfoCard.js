/**
 * Created by Mile on 2/8/2017.
 */

import React, {Component} from 'react';
import {View, Text, Linking} from 'react-native';

import styles from './styles';

class InfoCard extends Component {
    render() {
        let properties = this.props.properties;
        let propertiesList = Object.getOwnPropertyNames(properties);
        let infoText = '';
        if(properties !== undefined){
            propertiesList.forEach(function (property) {
                if(properties[property]){
                    if(infoText.length !== 0)
                        infoText += ' | ';
                infoText += properties[property];
                }
            });
        }
        return (
                <View style={styles.infoCard} {...this.props}>
                    <View style={styles.infoCardRow}>
                        <Text style={styles.infoTitle}>{this.props.title}</Text>
                    </View>
                    <View style={styles.infoCardRow}>
                        <Text style={styles.mediumText}>{infoText}</Text>
                    </View>
                </View>
        );
    }
}
export default InfoCard;