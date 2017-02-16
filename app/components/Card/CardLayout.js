/**
 * Created by Mile on 24-Jan-17.
 */
import React, {Component} from 'react';
import {ListView, View, Text, AsyncStorage, ActivityIndicator, NetInfo} from 'react-native';

import Card from './Card';
import ErrorHandler from '../ErrorHandler';
import moment from 'moment';
import SearchBar from 'react-native-searchbar';
import styles from './styles';
const TRAININGS_API = 'http://mladi.ams.mk/eduservice.svc/GetTrainings';
const INTERNSHIPS_API = 'http://mladi.ams.mk/eduservice.svc/GetInternships';
const SCHOLLARSHIPS_API = 'http://mladi.ams.mk/eduservice.svc/GetListings';
var listingTypes = {
    CONFERENCE: 1,
    SEMINAR: 2,
    JOB: 3,
    INTERNSHIP: 4,
    SCHOLLARSHIP: 5
};
var categoryAPIs = [];
var counter = 0;
var completeData = [];
class CardLayout extends Component {
    constructor(props) {
        super(props);
        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        let loading = props.categoryNames.length !== 0;
        this.state = {
            searchPressed: false,
            completeData: [],
            dataSource: this.ds.cloneWithRows(this.ds),
            isLoading: loading,
            isConnected: null,
            offlineMode: true
        };
    }

    fetchData(query) {
        return fetch(query)
            .then((response) => response.json())
            .then((data) => data)
    }

    getCategoryAPI() {
        this.props.categoryNames.forEach(function (item) {
            var category = {};
            switch (item) {
                case 'ПРАКСИ':
                    category.type = listingTypes.JOB;
                    category.API = INTERNSHIPS_API;
                    category.keyword = 'Internship';
                    categoryAPIs.push(category);
                    break;
                case 'РАБОТА':
                    category.type = listingTypes.JOB;
                    category.API = INTERNSHIPS_API;
                    category.keyword = 'Job';
                    categoryAPIs.push(category);
                    break;
                case 'СЕМИНАРИ':
                    category.type = listingTypes.CONFERENCE;
                    category.API = TRAININGS_API;
                    category.keyword = 'Seminar';
                    categoryAPIs.push(category);
                    break;
                case 'КОНФЕРЕНЦИИ':
                    category.type = listingTypes.CONFERENCE;
                    category.API = TRAININGS_API;
                    category.keyword = 'Conference';
                    categoryAPIs.push(category);
                    break;
                default:
                    category.type = listingTypes.SCHOLLARSHIP;
                    category.API = SCHOLLARSHIPS_API;
                    category.keyword = 'Schollarship';
                    categoryAPIs.push(category);
                    break;
            }
        });
    }

    manageDataFromAPI(data, category, scope) {
        data = scope.filterThroughArray(data, category.type, category.keyword);
        for (var i = 0; i < data.length; i++) {
            data[i]['type'] = category.keyword;
        }
        completeData = completeData.concat(data);
        counter++;
        if (counter === categoryAPIs.length) {
            completeData.sort(function (itemA, itemB) {
                let date1 = itemA.CrawlDate === undefined ? itemA.Inserted : itemA.CrawlDate;
                let dateA = moment(date1, 'DD.MM.YYYY HH:mm:ss').toDate();
                let date2 = itemB.CrawlDate === undefined ? itemB.Inserted : itemB.CrawlDate;
                let dateB = moment(date2, 'DD.MM.YYYY HH:mm:ss').toDate();
                return dateB - dateA;
            });

            scope.setState({
                completeData: completeData,
                dataSource: scope.ds.cloneWithRows(completeData),
                offlineMode: true,
                isLoading: false
            });
        }
    }

    goOfflineMode(scope, category, data) {
        scope.setState({
            offlineMode: !!data,
        });
        !!data ? scope.manageDataFromAPI(data, category, scope) :
            scope.setState({
                isLoading: false
            })
    }

    checkLocalStorage(category, scope) {
        AsyncStorage.getItem(category.keyword)
            .then((data) => JSON.parse(data))
            .then((data) => {
                scope.goOfflineMode(scope, category, data);
            })
            .catch((err) => {
                scope.setState({
                    isLoading: false,
                    offlineMode: false
                })
            });
    }

    componentWillMount() {
        completeData = [];
        counter = 0;
        categoryAPIs = [];
        let thisClassScoped = this;
        this.getCategoryAPI();
        categoryAPIs.forEach(function (category) {
            NetInfo.isConnected.fetch().then(isConnected => {
                if (!isConnected) {
                    thisClassScoped.checkLocalStorage(category, thisClassScoped);
                }

            });
            thisClassScoped.fetchData(category.API).then(function (data) {
                AsyncStorage.setItem(category.keyword, JSON.stringify(data));
                thisClassScoped.manageDataFromAPI(data, category, thisClassScoped);
            })
                .catch((err) => {
                    thisClassScoped.checkLocalStorage(category, thisClassScoped);
                });
        })
    }

    filterThroughArray(array, type, keyword) {
        return array.filter(function (item) {
            if (type === listingTypes.CONFERENCE)
                return item.Conference === keyword;
            else if (type === listingTypes.JOB) {
                return item.Job === keyword;
            }
            return true;
        })
    }

    _handleResults(results) {
        this.setState({
            dataSource: this.ds.cloneWithRows(results),
        });
    }

    resetDataSource() {
        this.setState({
            dataSource: this.ds.cloneWithRows(this.state.completeData)
        });
    }

    _onBackSearchButton() {
        this.resetDataSource();
        this.props.change();
    }

    render() {
        return (
            <View style={styles.container}>
                {this.state.isLoading && <ActivityIndicator
                    animating={this.state.isLoading}
                    style={[styles.centering, {height: 80}]}
                    size="large"
                />}
                {!this.state.isLoading && this.state.completeData.length !== 0 && this.state.offlineMode &&
                <View>
                    <SearchBar
                        onHide={this.resetDataSource.bind(this)}
                        placeholder="Пребарај..."
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
                        renderRow={this._renderRow}
                    />
                </View>}
                {this.state.completeData.length === 0 && !this.state.isLoading &&
                <View style={{flex: 1, marginHorizontal: 30, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{fontSize: 18, textAlign: 'center'}}>Овде нема ништо.
                        Одбери барем една категорија за која сакаш да се информираш.</Text>
                </View>}
                {!this.state.isConnected && !this.state.offlineMode && this.state.completeData.length !== 0 &&
                <ErrorHandler/>}
            </View>
        );
    }

    _renderRow(rowData) {
        let title = rowData.Title === undefined ? rowData.Name : rowData.Title;
        let source = rowData.EduSiteName === undefined ? rowData.EduSiteID : rowData.EduSiteName;
        let date = rowData.CrawlDate === undefined ? rowData.Inserted : rowData.CrawlDate;

        return (<Card {...this.props} type={rowData.type} title={title} site={source} date={date}
                      description={rowData.Description} url={rowData.Link}/>);

    }

}
export default CardLayout;