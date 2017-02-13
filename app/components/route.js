/**
 * Created by student on 2/1/17.
 */
import React, {Component} from 'react';
import {Navigator} from 'react-native';

import CardLayout from './Card/CardLayout';
import CategorySelection from './CategorySelection/CategorySelection';
import TabBar from './TabBar/TabBar';
import DetailView from './DetailView/DetailView';
class MyRouter extends Component {

    configureScene() {
        return Navigator.SceneConfigs.FloatFromBottom;
    }

    render() {
        return (
            <Navigator
                initialRoute={this.props.initialRoute}
                configureScene={()=> {return Navigator.SceneConfigs.FloatFromBottom}}
                renderScene={ this.renderScene.bind(this) }/>
        );
    }

    renderScene(route, navigator) {
        if (route.name == 'CategorySelection') {
            return <CategorySelection categories={route.categories} navigator={navigator}/>
        }
        if (route.name == 'CardLayout') {
            return <CardLayout navigator={navigator}/>
        }
        if(route.name == 'TabBar') {
            return <TabBar categories={route.categories} navigator={navigator} />
        }
        if(route.name == 'DetailView') {
            return <DetailView html={route.html} title={route.title} navigator={navigator} />
        }
    }
}
export default MyRouter;