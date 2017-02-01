/**
 * Created by student on 1/26/17.
 */
import React, {Component} from 'react';
import {View, Text, TouchableHighlight, Navigator} from 'react-native';

import Categories from './Categories';
import Button from './Button';
import styles from './styles';
var selected = [];
class CategorySelection extends Component {

    _onPress() {
        // TODO...
        // navigate to tab screen
        this.props.navigator.push({
            name: 'GetData' // Matches route.name
        })
    }

    setCategories(categories) {
        selected = categories;
    }

    render() {
        return (
            <Navigator
                renderScene={this.renderScene.bind(this)}
            />
        )
    }

    renderScene(route, navigator) {
        return (
            <View style={styles.contentLayout}>
                <Text style={styles.leadText}>ОДБЕРИ ШТО ЌЕ ЧИТАШ</Text>
                <Text style={styles.subText}>Допри на категориите за кои сакаш да се информираш.</Text>
                <Categories categories={this.setCategories.bind(this)}/>
                <Button onPress={this._onPress.bind(this)}/>
            </View>
        )
    }

}
export default CategorySelection;