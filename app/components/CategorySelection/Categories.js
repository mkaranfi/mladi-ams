/**
 * Created by student on 1/27/17.
 */

import React, {Component} from 'react';
import {View} from 'react-native';

import Category from './Category';
import styles from './styles';
var selectedCategories = [];
class Categories extends Component {
    constructor(props) {
        super(props);
    }

    addOrRemoveCategory(categoryName) {
        selectedCategories.includes(categoryName) ? selectedCategories.slice(selectedCategories.indexOf(selectedCategories)) :
            selectedCategories.push(categoryName);
        this.props.categories(selectedCategories);
    }

    getCategories(){
        return selectedCategories;
    }

    render() {
        return (
            <View style={styles.categoriesLayout}>
                <Category parentFunct={this.addOrRemoveCategory.bind(this)} text="СТИПЕНДИИ"/>
                <Category parentFunct={this.addOrRemoveCategory.bind(this)} text="ПРАКСИ"/>
                <Category parentFunct={this.addOrRemoveCategory.bind(this)} text="РАБОТА"/>
                <Category parentFunct={this.addOrRemoveCategory.bind(this)} text="СЕМИНАРИ"/>
                <Category parentFunct={this.addOrRemoveCategory.bind(this)} text="КОНФЕРЕНЦИИ"/>
            </View>
        );
    }
}
export default Categories;