/**
 * Created by student on 1/26/17.
 */
import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

import Circles from './Circles';
import styles from './styles';

class CategorySelection extends Component {
    render() {
        return (
            <View style={styles.styleLayout}>
                <Text style={styles.leadText}>ОДБЕРИ ШТО ЌЕ ЧИТАШ</Text>
                <Text style={styles.subText}>Допри на категориите за кои сакаш да се информираш.</Text>
                <Circles />
                {/* <Button
                 style={styles.saveBtn}
                 title="Зачувај"
                 accessibilityLabel="Зачувај ги одбраните категории"
                 />*/}
            </View>
        )
    }
}
export default CategorySelection;