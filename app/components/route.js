/**
 * Created by student on 2/1/17.
 */
import React, {Component} from 'react';
import Navigator from 'react-native';

import CardLayout from 'Card/CardLayout';
import CategorySelection from 'CategorySelection/CategorySelection';
class MyRouter extends Component {
    render() {
        return (<Navigator
            style={{ flex:1 }}
            initialRoute={{ name: 'CategorySelection' }}
            renderScene={ this.renderScene }/>);
    }

    renderScene(route, navigator) {
        if (route.name == 'CategorySelection') {
            return <CategorySelection navigator={navigator}/>
        }
        if (route.name == 'CardLayout') {
            return <CardLayout navigator={navigator}/>
        }
    }
}