import React, {Component} from 'react';
import {WebView, View, StyleSheet,  Navigator} from 'react-native';
import styles from './styles';

class DetailView extends Component {

    render() {
        return (
            <View style={styles.container}>
                <WebView 
                    ref={'webview'}
                    automaticallyAdjustContentInsets={true}
                    source={{html: this.props.html}}/>
            </View>
        );
    }

}


export default DetailView;