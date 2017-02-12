/**
 * Created by Mile on 2/9/2017.
 */
import React, {Component} from 'react';
import {ListView, Navigator, View, Text, AsyncStorage, ActivityIndicator} from 'react-native';

import ArticleCard from './ArticleCard';
import DetailView from '../DetailView/DetailView';
import styles from './styles';
const ARTICLES_API = 'http://mladi.ams.mk/eduservice.svc/GetArticles';

class ArticleCardLayout extends Component {
    constructor(props) {
        super(props);
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
        data = data.reverse();

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

    renderScene(route, navigator) {
        if(route.name == 'DetailView') {
            return <DetailView html={route.html} navigator={navigator} />
        }
        if(route.name == 'ArticleCard') {
            return (
                <View style={styles.container}>
                    {this.state.isLoading && <ActivityIndicator
                        animating={this.state.isLoading}
                        style={[styles.centering, {height: 80}]}
                        size="large"
                    />}
                    {!this.state.isLoading && <ListView
                        dataSource={this.state.dataSource}
                        renderRow={(data) => this._renderRow(data, navigator)}
                    />}
                </View>
                );
            }
        
    }

    render() {
        return (
           <Navigator
                initialRoute={{name: 'ArticleCard'}}
                configureScene={()=> {return Navigator.SceneConfigs.FloatFromBottom}}
                renderScene={ this.renderScene.bind(this) }/>
        );
    }
    _renderRow(rowData, navigator) {
        if (rowData !== null) {
            console.log(navigator);
            let title = rowData.Title;
            let date = rowData.Date;
            return (<ArticleCard {...this.props} nav={navigator} title={title} date={date}
                                 description={rowData.Text} image={rowData.Thumbnail} text={rowData.Text}/>);
        }
        return (<Text></Text>);
    }

}
export default ArticleCardLayout;