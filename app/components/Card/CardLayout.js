/**
 * Created by Mile on 24-Jan-17.
 */
import React, {Component} from 'react';
import {ListView, View} from 'react-native';

import Card from './Card';
import styles from './styles';
const TRAININGS_API = 'http://mladi.ams.mk/eduservice.svc/GetTrainings';
const INTERNSHIPS_API = 'http://mladi.ams.mk/eduservice.svc/GetInternships';
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

    componentWillMount() {
        let thisClassScoped = this;
        this.fetchData(INTERNSHIPS_API).then(function (data) {
            // Conference || Seminar
            //thisClassScoped.filterThroughArray(data, listingTypes.CONFERENCE, 'Conference');

            // Internship || Job
            data = thisClassScoped.filterThroughArray(data, listingTypes.JOB, 'Job');

            thisClassScoped.setState({
                dataSource: thisClassScoped.ds.cloneWithRows(data)
            });
        }).catch((err) => console.error('error=>' + err));
    }

    fetchData(query) {
        return fetch(query)
            .then((response) => response.json())
            .then((data) => data)
            .catch(function (err) {
                console.error('error => ' + err);
            });
    }

    filterThroughArray(array, type, keyword) {
        return array.filter(function (item) {
            if (type == listingTypes.CONFERENCE)
                return item.Conference === keyword;
            else if (type == listingTypes.JOB)
                return item.Job === keyword;
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