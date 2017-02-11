import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Navigator,
    TouchableNativeFeedback
} from 'react-native';

import ActionButton from 'react-native-action-button';
import CardLayout from '../Card/CardLayout';
import InfoCardLayout from '../Card/InfoCardLayout';
import ArticleCardLayout from '../Card/ArticleCardLayout';
import CustomBar from './CustomBar';
import Icon from 'react-native-vector-icons/Ionicons';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import styles from './styles';
class TabBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            organizations: 0,
            schools: 0,
            articles: 0
        }
    }

    render() {
        return (
            <Navigator
                renderScene={this.renderScene.bind(this)}
            />
        )
    }

    _onPress(id, tabName) {
        switch (tabName) {
            case 'organizations':
                this.setState({organizations: id});
                break;
            case 'schools':
                this.setState({schools: id});
                break;
            default:
                this.setState({articles: id});
                break;
        }
    }

    renderScene(route, navigator) {
        return <ScrollableTabView
            tabBarPosition="bottom"
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
                        title="Категории"
                        onPress={() => {
                            this.props.navigator.push({
                                name: 'CategorySelection'
                            })
                        }}>
                        <Icon name="md-settings" style={styles.actionButtonIcon}/>
                    </ActionButton.Item>
                    <ActionButton.Item buttonColor='#1abc9c' title="Зачувани" onPress={() => {
                    }}>
                        <Icon name="md-star" style={styles.actionButtonIcon}/>
                    </ActionButton.Item>
                </ActionButton>
            </View>

            <View tabLabel="ios-people" style={{flex: 1}}>
                <View style={styles.buttonContainer}>
                    <TouchableNativeFeedback
                        onPress={() => this._onPress(0, 'schools')}
                        background={TouchableNativeFeedback.SelectableBackground()}>
                        <View style={[styles.categoryButton,
                            this.state.schools === 0 ? styles.darkBackground : styles.lightBackgroung]}>
                            <Text style={styles.categoryButtonText}>УНИВЕРЗИТЕТИ</Text>
                        </View>
                    </TouchableNativeFeedback>

                    <TouchableNativeFeedback
                        onPress={() => this._onPress(1, 'schools')}
                        background={TouchableNativeFeedback.SelectableBackground()}>
                        <View style={[styles.categoryButton,
                            this.state.schools === 1 ? styles.darkBackground : styles.lightBackgroung]}>
                            <Text style={styles.categoryButtonText}>СРЕДНИ УЧИЛИШТА</Text>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback
                        onPress={() => this._onPress(2, 'schools')}
                        background={TouchableNativeFeedback.SelectableBackground()}>
                        <View style={[styles.categoryButton,
                            this.state.schools === 2 ? styles.darkBackground : styles.lightBackgroung]}>
                            <Text style={styles.categoryButtonText}>БИБЛИОТЕКИ</Text>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback
                        onPress={() => this._onPress(3, 'schools')}
                        background={TouchableNativeFeedback.SelectableBackground()}>
                        <View style={[styles.categoryButton,
                            this.state.schools === 3 ? styles.darkBackground : styles.lightBackgroung]}>
                            <Text style={styles.categoryButtonText}>СТУДЕНТСКИ ДОМОВИ</Text>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback
                        onPress={() => this._onPress(4, 'schools')}
                        background={TouchableNativeFeedback.SelectableBackground()}>
                        <View style={[styles.categoryButton,
                            this.state.schools === 4 ? styles.darkBackground : styles.lightBackgroung]}>
                            <Text style={styles.categoryButtonText}>СТУДЕНТСКИ ОРГАНИЗАЦИИ</Text>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback
                        onPress={() => this._onPress(5, 'schools')}
                        background={TouchableNativeFeedback.SelectableBackground()}>
                        <View style={[styles.categoryButton,
                            this.state.schools === 5 ? styles.darkBackground : styles.lightBackgroung]}>
                            <Text style={styles.categoryButtonText}>НЕВЛАДИНИ ОРГАНИЗАЦИИ</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
                {this.state.schools === 0 && <InfoCardLayout categoryName="Универзитети"/>}
                {this.state.schools === 1 && <InfoCardLayout categoryName="Средни училишта"/>}
                {this.state.schools === 2 && <InfoCardLayout categoryName="Библиотеки"/>}
                {this.state.schools === 3 && <InfoCardLayout categoryName="Студентски домови"/>}
                {this.state.schools === 4 && <InfoCardLayout categoryName="Студентска организација"/>}
                {this.state.schools === 5 && <InfoCardLayout categoryName="Организација"/>}
                <ActionButton buttonColor="rgba(174,198,207,1)">
                    <ActionButton.Item buttonColor='#9b59b6' title="Пребарај"
                                       onPress={() => console.log("filter tapped!")}>
                        <Icon name="md-search" style={styles.actionButtonIcon}/>
                    </ActionButton.Item>
                </ActionButton>
            </View>

            <View tabLabel="ios-information-circle" style={{flex: 1}}>
                <View style={styles.buttonContainer}>
                    <TouchableNativeFeedback
                        onPress={() => this._onPress(0, 'articles')}
                        background={TouchableNativeFeedback.SelectableBackground()}>
                        <View style={[styles.categoryButton,
                            this.state.articles === 0 ? styles.darkBackground : styles.lightBackgroung]}>
                            <Text style={styles.categoryButtonText}>АКТУЕЛНО</Text>
                        </View>
                    </TouchableNativeFeedback>

                    <TouchableNativeFeedback
                        onPress={() => this._onPress(1, 'articles')}
                        background={TouchableNativeFeedback.SelectableBackground()}>
                        <View style={[styles.categoryButton,
                            this.state.articles === 1 ? styles.darkBackground : styles.lightBackgroung]}>
                            <Text style={styles.categoryButtonText}>ПРОЕКТИ</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
                {this.state.articles === 0 && <ArticleCardLayout categoryName="Актуелно" />}
                {this.state.articles === 1 && <ArticleCardLayout categoryName="Проекти" />}
                <ActionButton buttonColor="rgba(174,198,207,1)">
                    <ActionButton.Item buttonColor='#9b59b6' title="Пребарај"
                                       onPress={() => console.log("filter tapped!")}>
                        <Icon name="md-search" style={styles.actionButtonIcon}/>
                    </ActionButton.Item>
                </ActionButton>
            </View>

        </ScrollableTabView>;
    }
}

export default TabBar;