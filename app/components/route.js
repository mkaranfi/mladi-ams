/**
 * Created by student on 2/1/17.
 */
import React, {Component} from 'react';
import {Navigator} from 'react-native';

import CardLayout from './Card/CardLayout';
import CategorySelection from './CategorySelection/CategorySelection';
import GetData from './Card/GetData';
import TabBar from './TabBar/TabBar';

class MyRouter extends Component {
    render() {
        return (
            <Navigator
                initialRoute={{name: 'TabBar'}}
                renderScene={ this.renderScene.bind(this) }/>
        );
    }

    renderScene(route, navigator) {
        if (route.name == 'CategorySelection') {
            return <CategorySelection navigator={navigator}/>
        }
        if (route.name == 'CardLayout') {
            return <CardLayout data={route.data} navigator={navigator}/>
        }
        if(route.name == 'GetData') {
            return <GetData navigator={navigator} />
        }
        if(route.name == 'TabBar') {
            return <TabBar navigator={navigator} />
        }
    }
}
export default MyRouter;