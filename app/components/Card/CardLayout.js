/**
 * Created by Mile on 24-Jan-17.
 */
import React, {Component} from 'react';
import {ListView, View, Text, AsyncStorage} from 'react-native';

import Card from './Card';
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
var category = {};
class CardLayout extends Component {
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
            case 'ПРАКСИ':
                category.type = listingTypes.JOB;
                category.API = INTERNSHIPS_API;
                category.keyword = 'Internship';
                break;
            case 'РАБОТА':
                category.type = listingTypes.JOB;
                category.API = INTERNSHIPS_API;
                category.keyword = 'Job';
                break;
            case 'СЕМИНАРИ':
                category.type = listingTypes.CONFERENCE;
                category.API = TRAININGS_API;
                category.keyword = 'Seminar';
                break;
            case 'КОНФЕРЕНЦИИ':
                category.type = listingTypes.CONFERENCE;
                category.API = TRAININGS_API;
                category.keyword = 'Conference';
                break;
            default:
                category.type = listingTypes.SCHOLLARSHIP;
                category.API = SCHOLLARSHIPS_API;
                category.keyword = 'Schollarship';
                break;
        }
    }

    manageDataFromAPI(data, scope) {
        data = scope.filterThroughArray(data, category.type, category.keyword);

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
            if (type == listingTypes.CONFERENCE)
                return item.Conference === keyword;
            else if (type == listingTypes.JOB)
                return item.Job === keyword;
            return true;
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this._renderRow}
                />
            </View>
        );
    }

    _renderRow(rowData) {
        if (rowData !== null) {
            let title = rowData.Title === undefined ? rowData.Name : rowData.Title;
            let source = rowData.EduSiteName === undefined ? rowData.EduSiteID : rowData.EduSiteName;
            let date = rowData.CrawlDate === undefined ? rowData.Inserted : rowData.CrawlDate;

            return (<Card {...this.props} title={title} site={source} date={date}
                          description={rowData.Description} url={rowData.Link}/>);
        }
        return (<Text>jaja</Text>);
    }

}
export default CardLayout;