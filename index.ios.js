/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  ScrollView,
  Text,
  View
} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import CardLayout from './app/components/Card/CardLayout';
import TabBar from './app/components/TabBar/TabBar';
import TabSwipe from './TabSwipe';
export default class mladiams extends Component {
  render() {
    return (
      <ScrollableTabView
      tabBarPosition="bottom"
      style={{marginTop: 20, }}
      initialPage={0}
      renderTabBar={() => <TabSwipe />}>
      <ScrollView tabLabel="ios-paper" style={styles.tabView}>
        <CardLayout />
      </ScrollView>
      <ScrollView tabLabel="stuff" style={styles.tabView}>
        <CardLayout />
      </ScrollView>
    </ScrollableTabView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  tabView: {
    flex: 1,
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.01)',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('mladiams', () => mladiams);
