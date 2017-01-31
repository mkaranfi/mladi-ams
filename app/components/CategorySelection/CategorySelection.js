/**
 * Created by student on 1/26/17.
 */
import React, {Component} from 'react';
import {View, Text, TouchableHighlight} from 'react-native';

import Circles from './Categories';
import Button from './Button';
import styles from './styles';

class CategorySelection extends Component {
    render() {
        return (
            <View style={styles.contentLayout}>
                <Text style={styles.leadText}>ОДБЕРИ ШТО ЌЕ ЧИТАШ</Text>
                <Text style={styles.subText}>Допри на категориите за кои сакаш да се информираш.</Text>
                <Circles />
                <Button />
            </View>
        )
    }
}
export default CategorySelection;