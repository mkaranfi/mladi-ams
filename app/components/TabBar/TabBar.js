import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Navigator
} from 'react-native';

import ActionButton from 'react-native-action-button';
import CardLayout from '../Card/CardLayout';
import InfoCardLayout from '../Card/InfoCardLayout';
import ArticleCardLayout from '../Card/ArticleCardLayout';
import TopBar from '../SubBar/TopBar';
import CustomBar from './CustomBar';
import Icon from 'react-native-vector-icons/Ionicons';
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
            style={{marginTop: 10}}
            initialPage={0}
            renderTabBar={() => <CustomBar />}
        >
            <View tabLabel="ios-paper" style={{flex: 1}}>
                <CardLayout categoryName={this.props.categories}/>
                <ActionButton buttonColor="rgba(174,198,207,1)">
                    <ActionButton.Item buttonColor='#9b59b6' title="Пребарај"
                                       onPress={() => console.log("filter tapped!")}>
                        <Icon name="md-search" style={styles.actionButtonIcon}/>
                    </ActionButton.Item>
                    <ActionButton.Item
                        buttonColor='#3498db'
                        title="Филтер"
                        onPress={() => {
                            this.props.navigator.push({
                                name: 'CategorySelection'
                            })
                        }}>
                        <Icon name="md-options" style={styles.actionButtonIcon}/>
                    </ActionButton.Item>
                    <ActionButton.Item buttonColor='#1abc9c' title="Зачувани" onPress={() => {}}>
                        <Icon name="md-checkmark" style={styles.actionButtonIcon}/>
                    </ActionButton.Item>
                </ActionButton>
            </View>
            <View tabLabel="ios-people" style={{flex: 1}}>
                <InfoCardLayout categoryName="Студентска организација"/>
                {/*<InfoCardLayout categoryName="Организација"/>*/}
                <ActionButton buttonColor="rgba(174,198,207,1)">
                    <ActionButton.Item buttonColor='#9b59b6' title="Пребарај"
                                       onPress={() => console.log("filter tapped!")}>
                        <Icon name="md-search" style={styles.actionButtonIcon}/>
                    </ActionButton.Item>
                    <ActionButton.Item buttonColor='#3498db' title="Студентски организации" onPress={() => {}}>
                        <Icon name="md-create" style={styles.actionButtonIcon}/>
                    </ActionButton.Item>
                    <ActionButton.Item buttonColor='#1abc9c' title="Невладини организации" onPress={() => {}}>
                        <Icon name="md-checkmark" style={styles.actionButtonIcon}/>
                    </ActionButton.Item>
                </ActionButton>
            </View>
            <View tabLabel="ios-school" style={{flex: 1}}>
                <InfoCardLayout categoryName="Библиотеки"/>
                {/*<InfoCardLayout categoryName="Средни училишта"/>*/}
                {/*<InfoCardLayout categoryName="Универзитети"/>*/}
                {/*<InfoCardLayout categoryName="Студентски домови"/>*/}
            </View>
            <View tabLabel="ios-information-circle" style={{flex: 1}}>
                <ArticleCardLayout categoryName="Актуелно"/>
                {/*<ArticleCardLayout categoryName="Проекти" />*/}
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
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
    },
});
