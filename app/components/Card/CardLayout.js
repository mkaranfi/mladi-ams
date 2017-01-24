/**
 * Created by Mile on 24-Jan-17.
 */
import React, {Component} from 'react';
import {ListView, View} from 'react-native';

import Card from './Card';
import styles from './styles';
const TRAININGS_API = 'http://mladi.ams.mk/eduservice.svc/GetTrainings';
class CardLayout extends Component {
    constructor(props) {
        super(props);
        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        let url = this.props.requestedAPI === null ? TRAININGS_API : this.props.requestedAPI;
        this.state = {
            dataSource: this.ds,
            requestedAPI: url
        };
    }

    componentWillMount() {
        let thisClassScoped = this;
        this.fetchData(TRAININGS_API).then(function (data) {
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
        return (<Card {...this.props} title={rowData.Title} site={rowData.EduSiteName} date={rowData.CrawlDate}
                  description={rowData.Description} url={rowData.Link}/>);
    }

}
export default CardLayout;