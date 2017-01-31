/**
 * Created by student on 1/27/17.
 */

import React, {Component} from 'react';
import {View} from 'react-native';

import Category from './Category';
import styles from './styles';
class Categories extends Component {
    render() {
        return (
            <View style={styles.categoriesLayout}>
                <Category text="СТИПЕНДИИ"/>
                <Category text="ПРАКСИ"/>
                <Category text="РАБОТА"/>
                <Category text="СЕМИНАРИ"/>
                <Category text="КОНФЕРЕНЦИИ"/>
            </View>
        );
    }
}
export default Categories;