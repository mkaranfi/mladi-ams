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
import styles from './styles';
const ARTICLES_API = 'http://mladi.ams.mk/eduservice.svc/GetArticles';
var thisClass;
class ArticleCardLayout extends Component {
    constructor(props) {
        super(props);
        thisClass = this;
        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
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

    render() {
        return (
            <View style={styles.container} navigator={navigator}>
                {this.state.isLoading && <ActivityIndicator
                    animating={this.state.isLoading}
                    style={[styles.centering, {height: 80}]}
                    size="large"
                />}
                {!this.state.isLoading && <ListView
                    onScroll={this.props.onScroll}
                    dataSource={this.state.dataSource}
                    renderRow={(data) => this._renderRow(data)}
                />}
            </View>
        );
    }

    _renderRow(rowData) {
        let title = rowData.Title;
        let date = rowData.Date;
        return (<ArticleCard {...this.props} title={title} date={date} description={rowData.Text} navigator={thisClass.props.navigator}
                            image={rowData.Thumbnail}/>);
    }

}
export default ArticleCardLayout;