import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

class TabSwipe extends Component {

    tabIcons: []

    propTypes: {
        goToPage: React.PropTypes.func,
        activeTab: React.PropTypes.number,
        tabs: React.PropTypes.array,
    }

    render() {
        return(
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false} 
                style={[styles.tab, this.props.style]}>
                {this.props.tabs.map((tab, i) => {
                    return <TouchableOpacity 
                                key={tab} 
                                onPress={() => this.props.goToPage(i)} 
                                style={this.props.activeTab === i ? [styles.tabButton, styles.activeButton] : styles.tabButton}>
                                <Text>
                                    {tab}
                                </Text>
                            </TouchableOpacity>;
                })}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
  tabButton: {
    backgroundColor: '#ffffcc',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 10,
      
  },
  activeButton: {
    backgroundColor: '#ffff4d',
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

export default TabSwipe;