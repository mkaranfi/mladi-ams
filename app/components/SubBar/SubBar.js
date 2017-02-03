import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native';

import CardLayout from '../Card/CardLayout';
import CustomBar from './TopBar';
import ScrollableTabView from 'react-native-scrollable-tab-view';
//const styles = require('./styles');

export default React.createClass({
  render() {
    return <ScrollableTabView
            tabBarPosition="bottom"
            style={{marginTop: 20, }}
            initialPage={0}
            renderTabBar={() => <CustomBar />}
            >

      <ScrollView tabLabel="Установа" style={styles.tabView}>
        <Text>Foo Bar Jim</Text>
      </ScrollView>
      <ScrollView tabLabel="Училиште" style={styles.tabView}>
        <Text>Foo Bar Jim 2</Text>
      </ScrollView>

    </ScrollableTabView>;
  },
});

const styles = StyleSheet.create({
    tabView: {
        flex: 1,
        padding: 10,
        backgroundColor: 'rgba(0,0,0,0.01)',
    },
    tabs: {
        height: 45,
        flexDirection: 'row',
        paddingTop: 5,
        borderWidth: 1,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderBottomColor: 'rgba(0,0,0,0.05)',
    },
});