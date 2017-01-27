/**
 * Created by student on 1/27/17.
 */

import React, {Component} from 'react';
import {View} from 'react-native';

import Circle from './Circle';
import styles from './styles';
class Circles extends Component {
    render() {
        return (
            <View style={styles.circles}>
                <View style={styles.firstRow}>
                    <Circle text="СТИПЕНДИИ"/>
                    <Circle text="ПРАКСИ"/>
                </View>
                <View style={styles.secondRow}>
                    <Circle text="РАБОТА"/>
                    <Circle text="СЕМИНАРИ"/>
                    <Circle text="КОНФЕРЕНЦИИ"/>
                </View>
            </View>
        );
    }
}
export default Circles;