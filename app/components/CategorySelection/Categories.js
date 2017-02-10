import React, { Component } from 'react';
import { View } from 'react-native';

import Category from './Category';
import styles from './styles';
var selectedCategories = [];
class Categories extends Component {

    constructor(props) {
        super(props);
    }

    addOrRemoveCategory(categoryName) {
        selectedCategories.includes(categoryName) ? selectedCategories.splice(selectedCategories.indexOf(categoryName), 1) :
            selectedCategories.push(categoryName);
        this.props.categories(selectedCategories);
    }

    render() {
        return (
            <View style={styles.categoriesLayout}>
                <Category parentFunct={this.addOrRemoveCategory.bind(this)} isSelected={selectedCategories.includes("СТИПЕНДИИ")} text="СТИПЕНДИИ" />
                <Category parentFunct={this.addOrRemoveCategory.bind(this)} isSelected={selectedCategories.includes("ПРАКСИ")} text="ПРАКСИ" />
                <Category parentFunct={this.addOrRemoveCategory.bind(this)} isSelected={selectedCategories.includes("РАБОТА")} text="РАБОТА" />
                <Category parentFunct={this.addOrRemoveCategory.bind(this)} isSelected={selectedCategories.includes("СЕМИНАРИ")} text="СЕМИНАРИ" />
                <Category parentFunct={this.addOrRemoveCategory.bind(this)} isSelected={selectedCategories.includes("КОНФЕРЕНЦИИ")} text="КОНФЕРЕНЦИИ" />
            </View>
        );
    }
}
export default Categories;