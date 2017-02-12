/**
 * Created by Mile on 2/8/2017.
 */
import React, {Component} from 'react';
import {ListView, View, Text, AsyncStorage, ActivityIndicator} from 'react-native';

import InfoCard from './InfoCard';
import styles from './styles';
const ORGANIZATIONS_API = 'http://mladi.ams.mk/eduservice.svc/GetOrganizations';
const DORMS_API = 'http://mladi.ams.mk/eduservice.svc/GetDorms';
const LIBRARIES_API = 'http://mladi.ams.mk/eduservice.svc/GetLibraries';
const UNIVERSITIES_API = 'http://mladi.ams.mk/eduservice.svc/GetUniversities';
const ARTICLES_API = 'http://mladi.ams.mk/eduservice.svc/GetArticles';

var listingTypes = {
    UNDEFINED: 1,
    ORGANIZATION: 2,
    UNIVERSITIES: 3,
    SCHOOLS: 4,
    ARTICLES: 5
};

var category = {};
class InfoCardLayout extends Component {
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

    getCategoryAPI() {
        switch (this.props.categoryName) {
            case 'Организација':
                category.type = listingTypes.ORGANIZATION;
                category.API = ORGANIZATIONS_API;
                category.keyword = 'Организација';
                break;
            case 'Студентска организација':
                category.type = listingTypes.ORGANIZATION;
                category.API = ORGANIZATIONS_API;
                category.keyword = 'Студентска организација';
                break;
            case 'Средни училишта':
                category.type = listingTypes.SCHOOLS;
                category.API = UNIVERSITIES_API;
                category.keyword = 'Средни училишта';
                break;
            case 'Универзитети':
                category.type = listingTypes.UNIVERSITIES;
                category.API = UNIVERSITIES_API;
                category.keyword1 = 'универзитети';
                category.keyword2 = 'установи';
                break;
            case 'Студентски домови':
                category.type = listingTypes.UNDEFINED;
                category.API = DORMS_API;
                category.keyword = 'Студентски домови';
                break;
            case 'Библиотеки':
                category.type = listingTypes.UNDEFINED;
                category.API = LIBRARIES_API;
                category.keyword = 'Библиотеки';
                break;
            case 'Актуелно':
                category.type = listingTypes.ARTICLES;
                category.API = ARTICLES_API;
                category.keyword = 'Актуелно';
                break;
            case 'Проекти':
                category.type = listingTypes.ARTICLES;
                category.API = ARTICLES_API;
                category.keyword = 'Проекти';
                break;
            default:
                break;
        }
    }

    manageDataFromAPI(data, scope) {
        data = scope.filterThroughArray(data, category.type, category.keyword);
        data = data.reverse();
        scope.setState({
            dataSource: scope.ds.cloneWithRows(data),
            isLoading: false
        });
    }

    componentWillMount() {
        let thisClassScoped = this;
        this.getCategoryAPI();
        this.fetchData(category.API).then(function (data) {
            AsyncStorage.setItem(category.keyword, JSON.stringify(data));
            thisClassScoped.manageDataFromAPI(data, thisClassScoped);
        })
            .catch((err) => {
                AsyncStorage.getItem(category.keyword)
                    .then((data) => JSON.parse(data))
                    .then((data) => {
                        data !== null ? thisClassScoped.manageDataFromAPI(data, thisClassScoped) :
                            console.error('Error: ' + err);
                    });
            });
    }

    filterThroughArray(array, type, keyword) {
        return array.filter(function (item) {
            if (type === listingTypes.ORGANIZATION)
                return item.Student === keyword;
            if(type === listingTypes.UNIVERSITIES)
                return item.TypeID.includes(category.keyword1) || item.TypeID.includes(category.keyword2);
            if(type === listingTypes.SCHOOLS)
                return item.TypeID === keyword;
            if(type === listingTypes.ARTICLES)
                return item.ArticleCategoryID === keyword;
            return true;
        })
    }

    render() {
        return (
            <View style={styles.container}>
                {this.state.isLoading && <ActivityIndicator
                    animating={this.state.isLoading}
                    style={[styles.centering, {height: 80}]}
                    size="large"
                />}
                {!this.state.isLoading && <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this._renderRow}
                />}
            </View>
        );
    }

    _renderRow(rowData) {
        if(rowData !== null) {
            let properties = {};
            let name = rowData.Name;
            properties['website'] = rowData.Website;
            properties['email']  = rowData.Email;
            properties['phone'] = rowData.Telephone;
            properties['facebook'] = rowData.FB;
            properties['twitter'] = rowData.TW;
            properties['locationX'] = rowData.LocationX;
            properties['locationY'] = rowData.LocationY;

            return (<InfoCard title={name} properties={properties}/>);
        }
        return (<Text></Text>)
    }

}
export default InfoCardLayout;