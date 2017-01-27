/**
 * Created by Mile on 24-Jan-17.
 */
import React, {Component} from 'react';
import {ListView, View, AsyncStorage} from 'react-native';

import Card from './Card';
import styles from './styles';
const TRAININGS_API = 'http://mladi.ams.mk/eduservice.svc/GetTrainings';
const INTERNSHIPS_API = 'http://mladi.ams.mk/eduservice.svc/GetInternships';
const SCHOLLARSHIPS_API = 'http://mladi.ams.mk/eduservice.svc/GetListings';
var listingTypes = {
    CONFERENCE: 1,
    JOB: 2
};

class CardLayout extends Component {
    constructor(props) {
        super(props);
        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: this.ds
        };
    }

    manageDataFromAPI(data, scope) {
        // Conference || Seminar
        //scope.filterThroughArray(data, listingTypes.CONFERENCE, 'Conference');

        // Internship || Job
        // data = scope.filterThroughArray(data, listingTypes.JOB, 'Job');

        scope.setState({
            dataSource: scope.ds.cloneWithRows(data)
        });
    }

    componentWillMount() {
        let thisClassScoped = this;
        this.fetchData(TRAININGS_API).then(function (data) {
            AsyncStorage.setItem('cardData', JSON.stringify(data));
            thisClassScoped.manageDataFromAPI(data, thisClassScoped);
        })
            .catch((err) => {
                AsyncStorage.getItem('cardData')
                    .then((data) => JSON.parse(data))
                    .then((data) => {
                        data !== null ? thisClassScoped.manageDataFromAPI(data, thisClassScoped) :
                            console.error('Error: ' + err);
                    });
            });
    }

    fetchData(query) {
        return fetch(query)
            .then((response) => response.json())
            .then((data) => data)
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
        let title = rowData.Title === undefined ? rowData.Name : rowData.Title;
        let source = rowData.EduSiteName === undefined ? rowData.EduSiteID : rowData.EduSiteName;
        let date = rowData.CrawlDate === undefined ? rowData.Inserted : rowData.CrawlDate;

        return (<Card {...this.props} title={title} site={source} date={date}
                      description={rowData.Description} url={rowData.Link}/>);
    }

}
export default CardLayout;