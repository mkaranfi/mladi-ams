import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';

import CardLayout from '../Card/CardLayout';
import CustomBar from './CustomBar';
import ScrollableTabView from 'react-native-scrollable-tab-view';
export default React.createClass({
  render() {
    return <ScrollableTabView
      tabBarPosition="bottom"
      style={{marginTop: 20, }}
      initialPage={0}
      renderTabBar={() => <CustomBar />}
      >
      <ScrollView tabLabel="ios-paper">
        <CardLayout />
      </ScrollView>
      <ScrollView tabLabel="ios-people" style={styles.tabView}>
        <View style={styles.card}>
          <Text>Организации</Text>
        </View>
      </ScrollView>
      <ScrollView tabLabel="ios-school" style={styles.tabView}>
        <View style={styles.card}>
          <Text>Образовни установи</Text>
        </View>
      </ScrollView>
      <ScrollView tabLabel="ios-cart" style={styles.tabView}>
        <View style={styles.card}>
          <Text>Попусти</Text>
        </View>
      </ScrollView>
      <ScrollView tabLabel="ios-information-circle" style={styles.tabView}>
        <View style={styles.card}>
          <Text>Актуелно</Text>
        </View>
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
  card: {
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: 'rgba(0,0,0,0.1)',
    margin: 5,
    height: 150,
    padding: 15,
    shadowColor: '#ccc',
    shadowOffset: { width: 2, height: 2, },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
});
