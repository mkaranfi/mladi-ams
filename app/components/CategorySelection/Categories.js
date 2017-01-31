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
            selectedCategories.push(selectedCategories);
        // this.props.categories(selectedCategories);
    }

    render() {
        return (
            <View style={styles.categoriesLayout}>
                <Category parentFunct={this.addOrRemoveCategory} text="СТИПЕНДИИ"/>
                <Category parentFunct={this.addOrRemoveCategory} text="ПРАКСИ"/>
                <Category parentFunct={this.addOrRemoveCategory} text="РАБОТА"/>
                <Category parentFunct={this.addOrRemoveCategory} text="СЕМИНАРИ"/>
                <Category parentFunct={this.addOrRemoveCategory} text="КОНФЕРЕНЦИИ"/>
            </View>
        );
    }
}
export default Categories;