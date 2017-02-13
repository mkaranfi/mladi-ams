import React, {Component} from 'react';
import {WebView, View, StyleSheet, BackAndroid} from 'react-native';
import styles from './styles';
import StatusBar from '../StatusBar/StatusBar';
class DetailView extends Component {

    constructor(props) {
        super(props);
        var navigator = this.props.navigator;
        BackAndroid.addEventListener('hardwareBackPress', function() {
            if (navigator && navigator.getCurrentRoutes().length > 1) {
                navigator.pop();
                return true;
            }
            return false;
        });
    }

    _onBackPress() {
        this.props.navigator.pop();
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar title={this.props.title} onPress={this._onBackPress.bind(this)}/>
                <WebView 
                    ref={'webview'}
                    automaticallyAdjustContentInsets={true}
                    source={{html: this.props.html}}/>
            </View>
        );
    }

}


export default DetailView;