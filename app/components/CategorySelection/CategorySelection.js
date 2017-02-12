/**
 * Created by student on 1/26/17.
 */
import React, {Component} from 'react';
import {View, Text, TouchableHighlight, Navigator, ActivityIndicator} from 'react-native';

import Categories from './Categories';
import Button from './Button';
import styles from './styles';
var selected = [];
class CategorySelection extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pressed: false
        }
    }

    _onPress() {
        this.setState({
            pressed: true
        });
        this.props.navigator.resetTo({
            name: 'TabBar',
            categories: selected
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
                <View style={{flex: 1}}>
                    <Categories categories={this.setCategories.bind(this)}/>
                </View>
                {this.state.pressed && <ActivityIndicator
                    animating={this.state.pressed}
                    style={{height: 80}}
                    size="large"
                />}
                {!this.state.pressed && <Button onPress={this._onPress.bind(this)}/>}
            </View>
        )
    }

}
export default CategorySelection;