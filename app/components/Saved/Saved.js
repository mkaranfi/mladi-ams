/**
 * Created by User on 2/15/17.
 */
import React, {Component} from 'react';
import {View, StyleSheet, AsyncStorage, ListView, BackAndroid} from 'react-native';
import styles from './styles';
import StatusBar from '../StatusBar/StatusBar';
import Card from '../Card/Card';
class Saved extends Component {

    componentWillMount() {
        AsyncStorage.getItem('SavedItems')
            .then((data) => JSON.parse(data))
            .then((data) => {
                console.log(data);
                this.setState({
                    dataSource: scope.ds.cloneWithRows(data)
                });
            });
    }

    constructor(props) {
        super(props);
        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        var navigator = this.props.navigator;
        BackAndroid.addEventListener('hardwareBackPress', function() {
            if (navigator && navigator.getCurrentRoutes().length > 1) {
                navigator.pop();
                return true;
            }
            return false;
        });
        this.state = {
            dataSource: this.ds.cloneWithRows(this.ds),
        };
    }

    _onBackPress() {
        this.props.navigator.pop();
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar title="Зачувани" onPress={this._onBackPress.bind(this)}/>
                <ListView
                    enableEmptySections={true}
                    dataSource={this.state.dataSource}
                    renderRow={this._renderRow.bind(this)} />
            </View>
        );
    }


    _renderRow(rowData) {
        return (<Card type={rowData.type} title={rowData.title} site={rowData.site} date={rowData.date}
                      description={rowData.description} url={rowData.url}/>);
    }

}


export default Saved;