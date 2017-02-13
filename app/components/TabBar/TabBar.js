import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Navigator,
    TouchableNativeFeedback,
    LayoutAnimation
} from 'react-native';

import ActionButton from 'react-native-action-button';
import CardLayout from '../Card/CardLayout';
import InfoCardLayout from '../Card/InfoCardLayout';
import ArticleCardLayout from '../Card/ArticleCardLayout';
import CustomBar from './CustomBar';
import Icon from 'react-native-vector-icons/Ionicons';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import styles from './styles';
var loadedCategories = [];
var searchPressed = false;
var thisClass;
class TabBar extends Component {
    constructor(props) {
        super(props);
        thisClass = this;
        this.state = {
            organizations: 0,
            schools: 0,
            articles: 0,
            searchPressed: false,
            isActionButtonVisible: true
        };
        _listViewOffset = 0;
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

    triggerChange(component) {
        !searchPressed ?
            component.searchBar.show() : component.searchBar.hide();
        searchPressed = !searchPressed;
    }

    _onScroll(event) {
        const CustomLayoutLinear = {
            duration: 100,
            create: {type: LayoutAnimation.Types.linear, property: LayoutAnimation.Properties.opacity},
            update: {type: LayoutAnimation.Types.linear, property: LayoutAnimation.Properties.opacity},
            delete: {type: LayoutAnimation.Types.linear, property: LayoutAnimation.Properties.opacity}
        };
        const currentOffset = event.nativeEvent.contentOffset.y;
        const direction = (currentOffset > 0 && currentOffset > this._listViewOffset)
            ? 'down'
            : 'up';
        const isActionButtonVisible = direction === 'up';
        if (isActionButtonVisible !== this.state.isActionButtonVisible) {
            LayoutAnimation.configureNext(CustomLayoutLinear);
            this.setState({isActionButtonVisible})
        }
        this._listViewOffset = currentOffset
    }

    renderScene(route, navigator) {
        return <ScrollableTabView
            tabBarPosition="bottom"
            initialPage={0}
            renderTabBar={() => <CustomBar />}
        >

            <View tabLabel="ios-home" style={{flex: 1}}>
                <CardLayout ref={(ref) => this.cardLayout = ref} onScroll={this._onScroll.bind(this)}
                            change={() => this.triggerChange(this.cardLayout)}
                            categoryName={this.props.categories}/>
                {this.state.isActionButtonVisible ? <ActionButton buttonColor="#4C9BFF">
                        <ActionButton.Item buttonColor='#4C9BFF' title="Пребарај" titleColor="#fff" titleBgColor="#333"
                                           onPress={() => this.triggerChange(this.cardLayout)}>
                            <Icon name="md-search" style={styles.actionButtonIcon}/>
                        </ActionButton.Item>
                        <ActionButton.Item titleColor="#fff" titleBgColor="#333" buttonColor='#4C9BFF'
                                           title="Измени категории"
                                           onPress={() => {
                                               this.props.navigator.push({
                                                   name: 'CategorySelection'
                                               })
                                           }}>
                            <Icon name="md-settings" style={styles.actionButtonIcon}/>
                        </ActionButton.Item>
                        <ActionButton.Item buttonColor='#4C9BFF' title="Зачувани" titleColor="#fff" titleBgColor="#333"
                                           onPress={() => {
                                           }}>
                            <Icon name="md-star" style={styles.actionButtonIcon}/>
                        </ActionButton.Item>
                    </ActionButton> : null}
            </View>

            <View tabLabel="ios-book" style={{flex: 1}}>
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
                {this.state.articles === 0 &&
                <ArticleCardLayout onScroll={this._onScroll.bind(this)} navigator={thisClass.props.navigator} categoryName="Актуелно"/>}
                {this.state.articles === 1 &&
                <ArticleCardLayout onScroll={this._onScroll.bind(this)} navigator={thisClass.props.navigator} categoryName="Проекти"/>}
                {this.state.isActionButtonVisible ? <ActionButton buttonColor="#4C9BFF">
                        <ActionButton.Item buttonColor='#4C9BFF' title="Пребарај" titleColor="#fff" titleBgColor="#333"
                                           onPress={() => console.log("filter tapped!")}>
                            <Icon name="md-search" style={styles.actionButtonIcon}/>
                        </ActionButton.Item>
                    </ActionButton> : null}
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
                {this.state.schools === 0 &&
                <InfoCardLayout onScroll={this._onScroll.bind(this)} categoryName="Универзитети"/>}
                {this.state.schools === 1 &&
                <InfoCardLayout onScroll={this._onScroll.bind(this)} categoryName="Средни училишта"/>}
                {this.state.schools === 2 &&
                <InfoCardLayout onScroll={this._onScroll.bind(this)} categoryName="Библиотеки"/>}
                {this.state.schools === 3 &&
                <InfoCardLayout onScroll={this._onScroll.bind(this)} categoryName="Студентски домови"/>}
                {this.state.schools === 4 &&
                <InfoCardLayout onScroll={this._onScroll.bind(this)} categoryName="Студентска организација"/>}
                {this.state.schools === 5 &&
                <InfoCardLayout onScroll={this._onScroll.bind(this)} categoryName="Организација"/>}
                {this.state.isActionButtonVisible ? <ActionButton buttonColor="#4C9BFF">
                        <ActionButton.Item buttonColor='#4C9BFF' title="Пребарај" titleColor="#fff" titleBgColor="#333"
                                           onPress={() => console.log("filter tapped!")}>
                            <Icon name="md-search" style={styles.actionButtonIcon}/>
                        </ActionButton.Item>
                    </ActionButton> : null}
            </View>

        </ScrollableTabView>;
    }
}

export default TabBar;