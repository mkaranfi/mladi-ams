/**
 * Created by Mile on 2/15/2017.
 */
import React, {Component} from 'react';
import {Text, View} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
class ErrorHandler extends Component {
    render() {
        return <View
            style={styles.errorContainer}>
            <Icon name='ios-warning' style={styles.largeIcon}/>
            <Text style={styles.messageTitle}>Има некаков проблем</Text>
            <Text style={styles.message}>Провери ја твојата интернет конекција и
                обиди се повторно.</Text>
        </View>
    }
}
export default ErrorHandler;