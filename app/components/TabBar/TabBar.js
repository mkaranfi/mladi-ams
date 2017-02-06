import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Navigator
} from 'react-native';

import CardLayout from '../Card/CardLayout';
import TopBar from '../SubBar/TopBar';
import CustomBar from './CustomBar';
import ScrollableTabView from 'react-native-scrollable-tab-view';
class TabBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Navigator
                renderScene={this.renderScene.bind(this)}
            />
        )
    }

    renderScene(route, navigator) {
        return <ScrollableTabView
            tabBarPosition="top"
            style={{marginTop: 10,}}
            initialPage={0}
            renderTabBar={() => <CustomBar />}
        >
            <ScrollView tabLabel="ios-paper">
                <ScrollableTabView renderTabBar={() => <TopBar />}>
                    {this.props.categories.includes('СТИПЕНДИИ') &&
                    <View tabLabel="Стипендии">
                        <CardLayout categoryName="СТИПЕНДИИ"/>
                    </View>}
                    {this.props.categories.includes('ПРАКСИ') &&
                    <View tabLabel="Пракси">
                        <CardLayout categoryName="ПРАКСИ"/>
                    </View>}
                    {this.props.categories.includes('РАБОТА') &&
                    <View tabLabel="Вработувања">
                        <CardLayout categoryName="РАБОТА"/>
                    </View>}
                    {this.props.categories.includes('СЕМИНАРИ') &&
                    <View tabLabel="Семинари">
                        <CardLayout categoryName="СЕМИНАРИ"/>
                    </View>}
                    {this.props.categories.includes('КОНФЕРЕНЦИИ') &&
                    <View tabLabel="Конференции">
                        <CardLayout categoryName="КОНФЕРЕНЦИИ"/>
                    </View>}
                </ScrollableTabView>
            </ScrollView>
            <View tabLabel="ios-people" style={styles.tabView}>
                <View style={styles.card}>
                    <Text>Организации</Text>
                </View>
            </View>
            <View tabLabel="ios-school" style={styles.tabView}>
                <View style={styles.card}>
                    <Text>Училишта</Text>
                </View>
            </View>
            <View tabLabel="ios-cart" style={styles.tabView}>
                <View style={styles.card}>
                    <Text>Попусти</Text>
                </View>
            </View>
            <View tabLabel="ios-information-circle" style={styles.tabView}>
                <View style={styles.card}>
                    <Text>Актуелно</Text>
                </View>
            </View>
        </ScrollableTabView>;
    }
}

export default TabBar;

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
        shadowOffset: {width: 2, height: 2,},
        shadowOpacity: 0.5,
        shadowRadius: 3,
    },
});
