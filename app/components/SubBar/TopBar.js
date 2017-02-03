import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';

//const styles = require('./styles');

const TopBar = React.createClass({
    tabNames: [],

    propTypes: {
        goToPage: React.PropTypes.func,
        activeTab: React.PropTypes.number,
        tabs: React.PropTypes.array,
    },

    iconColor(progress) {
        const red = 59 + (204 - 59) * progress;
        const green = 89 + (204 - 89) * progress;
        const blue = 152 + (204 - 152) * progress;
        return `rgb(${red}, ${green}, ${blue})`;
    },
    render() {
        return <View style={[styles.tabs]}>
            <ScrollView 
                horizontal={true}
                showsHorizontalScrollIndicator={false} >
            {this.props.tabs.map((tab, i) => {
                return <TouchableOpacity key={tab} onPress={() => this.props.goToPage(i)} style={styles.tab}>
                        <Text style={this.props.activeTab === i ? [styles.tabButton, styles.activeTab] : styles.tabButton }
                            ref={(tab) => { this.tabNames[i] = tab; }}>
                            {tab}
                        </Text>
                    </TouchableOpacity>;
            })}
            </ScrollView>
        </View>;
    },
});

const styles = StyleSheet.create({
    tabView: {
        flex: 1,
        padding: 10,
        backgroundColor: 'rgba(0,0,0,0.01)',
    },
    tab: {
        marginRight: 5,
        marginLeft: 5,
        justifyContent: 'center',
    },
    tabs: {
        height: 35,
        paddingTop: 5,
        borderWidth: 1,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderBottomColor: 'rgba(0,0,0,0.05)',
    },
    tabButton: {
        paddingBottom: 5,
    },
    activeTab: {
        fontWeight: '800',
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
    },
});

export default TopBar;
