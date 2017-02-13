/**
 * Created by Mile on 2/9/2017.
 */
import React, {Component} from 'react';
import {
    ListView,
    View,
    Text,
    AsyncStorage,
    Navigator,
    ActivityIndicator
} from 'react-native';

import ArticleCard from './ArticleCard';
import DetailView from '../DetailView/DetailView';
import SearchBar from 'react-native-searchbar';
import styles from './styles';
const ARTICLES_API = 'http://mladi.ams.mk/eduservice.svc/GetArticles';

class ArticleCardLayout extends Component {
    constructor(props) {
        super(props);
        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            completeData: [],
            searchPressed: false,
            dataSource: this.ds.cloneWithRows(this.ds),
            isLoading: true
        };
    }

    fetchData(query) {
        return fetch(query)
            .then((response) => response.json())
            .then((data) => data)
    }


    manageDataFromAPI(data, scope) {
        data = scope.filterThroughArray(data, scope);

        scope.setState({
            completeData: data,
            dataSource: scope.ds.cloneWithRows(data),
            isLoading: false
        });
    }

    componentWillMount() {
        let scope = this;
        this.fetchData(ARTICLES_API).then(function (data) {
            AsyncStorage.setItem(scope.props.categoryName, JSON.stringify(data));
            scope.manageDataFromAPI(data, scope);
        })
            .catch((err) => {
                AsyncStorage.getItem(scope.props.categoryName)
                    .then((data) => JSON.parse(data))
                    .then((data) => {
                        data !== null ? scope.manageDataFromAPI(data, scope) :
                            console.error('Error: ' + err);
                    });
            });
    }

    filterThroughArray(array, scope) {
        return array.filter(function (item) {
            return item.ArticleCategoryID === scope.props.categoryName;
        })
    }

    renderScene(route, navigator) {
        if (route.name == 'DetailView') {
            return <DetailView html={route.html} navigator={navigator}/>
        }
        if (route.name == 'ArticleCard') {
            return (
                <View style={styles.container} navigator={navigator}>
                    {this.state.isLoading && <ActivityIndicator
                        animating={this.state.isLoading}
                        style={[styles.centering, {height: 80}]}
                        size="large"
                    />}
                    {!this.state.isLoading &&
                    <View>
                        <SearchBar
                            onBack={this._onBackSearchButton.bind(this)}
                            ref={(ref) => this.searchBar = ref}
                            data={this.state.completeData}
                            handleResults={this._handleResults.bind(this)}
                        />
                        <ListView
                            style={this.state.searchPressed && styles.searchBarMargin}
                            onScroll={this.props.onScroll}
                            enableEmptySections={true}
                            dataSource={this.state.dataSource}
                            renderRow={(data) => this._renderRow(data, navigator)}
                        />
                    </View>}
                </View>
            );
        }
    }

    render() {
        return (
            <Navigator
                initialRoute={{name: 'ArticleCard'}}
                configureScene={() => {
                    return Navigator.SceneConfigs.FloatFromBottom
                }}
                renderScene={ this.renderScene.bind(this) }/>
        );
    }

    onPress() {
        nav.push({
            name: 'DetailView',
            html: text
        });
    }

    _handleResults(results) {
        this.setState({
            dataSource: this.ds.cloneWithRows(results)
        });
    }

    _onBackSearchButton() {
        this.setState({
            dataSource: this.ds.cloneWithRows(this.state.completeData)
        });
        this.props.change();
    }

    _renderRow(rowData, navigator) {
        let title = rowData.Title;
        let date = rowData.Date;
        return (<ArticleCard {...this.props} title={title} date={date} description={rowData.Text} navigator={navigator}
                                             image={rowData.Thumbnail}/>);
    }

}
export default ArticleCardLayout;