/**
 * Created by student on 2/13/17.
 */
import React, {Component} from 'react';
import {View, Text, ActivityIndicator, AsyncStorage} from 'react-native';

import MyRouter from './route';
import styles from './styles';
var route = {name: 'CategorySelection'};
class PreRouter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        };
        AsyncStorage.getItem('Категории')
            .then((data) => JSON.parse(data))
            .then((data) => {
                route = data !== null ? {name: 'TabBar', categories: data} :
                {name: 'CategorySelection'};
                this.setState({
                    isLoading: false
                })
            });
    }

    render() {
        return (this.state.isLoading ? <View style={styles.centering}>
            <Text style={styles.loadingText}>Се вчитува...</Text>
            <ActivityIndicator
                animating={this.state.isLoading}
                style={{height: 80}}
                size="large"
            />
        </View> : <MyRouter initialRoute={route}/>);
    }
}
export default PreRouter;