/**
 * Created by Mile on 2/8/2017.
 */

import React, {Component} from 'react';
import {View, Text, Linking, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
class InfoCard extends Component {
    _onPress(url) {
        Linking.openURL(url).catch(err => console.error('An error occurred', err));
    }

    render() {
        let properties = this.props.properties;
        let website = '', email = '', phone = '', facebook = '', twitter = '';
        let prev = false;
        if (properties['website'] !== '') {
            website =
                <TouchableOpacity
                    onPress={()=>this._onPress(properties['website'])}>
                    <Text style={styles.websiteUrl}>{properties['website']} </Text>
                </TouchableOpacity>;
            prev = true;
        }
        if (properties['phone'] !== '') {
            phone = <TouchableOpacity
                onPress={()=>this._onPress('tel:' + properties['phone'])}>
                <Text>{prev && ' • '}<Icon name="phone" style={{color: '#00C853', fontSize: 22}}/></Text>
            </TouchableOpacity>;
            prev = true;
        }
        if (properties['email'] !== '') {
            email =
                <TouchableOpacity
                    onPress={()=>this._onPress('mailto:' + properties['email'])}>
                    <Text>{prev && ' • '}<Icon name="envelope" style={{color: '#89CFF0', fontSize: 20}}/></Text>
                </TouchableOpacity>;
            prev = true;
        }
        if (properties['facebook'] !== '') {
            facebook = <TouchableOpacity
                onPress={()=>this._onPress(properties['facebook'])}>
                <Text>
                    {prev && ' • '}<Icon style={{color: '#3b5998', fontSize: 22}} name="facebook-square"/>
                </Text>
            </TouchableOpacity>;
            prev = true;
        }
        if (properties['twitter'] !== '') {
            twitter = <TouchableOpacity
                onPress={()=>this._onPress(properties['twitter'])}>
                <Text>
                    {prev && ' • '}<Icon style={{color: '#4099FF', fontSize: 22}} name="twitter-square"/>
                </Text>
            </TouchableOpacity>;
        }

        // if (properties['locationX'] !== '' && properties['locationY'] !== '') {
        //     map = <TouchableOpacity
        //         onPress={()=>this._onPressMap(properties['locationX'], properties['locationY'])}>
        //         <Icon style={{color: '#FE7569', fontSize: 28}} name="map-marker"/>
        //     </TouchableOpacity>
        // }
        return (
            <View style={styles.infoCard} {...this.props}>
                <View style={styles.infoCardRow}>
                    <Text style={styles.infoTitle}>{this.props.title}</Text>
                </View>
                <View style={styles.infoCardRow}>
                    {website !== '' && website}
                    {phone !== '' && phone}
                    {email !== '' && email}
                    {facebook !== '' && facebook}
                    {twitter !== '' && twitter}
                </View>
            </View>
        );
    }
}
export default InfoCard;