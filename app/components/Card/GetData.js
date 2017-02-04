/**
 * Created by Mile on 2/1/2017.
 */
import React, {Component} from 'react';
import {ActivityIndicator, ListView, AsyncStorage, Navigator} from 'react-native';

import styles from './styles';
const TRAININGS_API = 'http://mladi.ams.mk/eduservice.svc/GetTrainings';
const INTERNSHIPS_API = 'http://mladi.ams.mk/eduservice.svc/GetInternships';
const SCHOLLARSHIPS_API = 'http://mladi.ams.mk/eduservice.svc/GetListings';
var jsonData = [];
class GetData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        };
        this.getData();
    }

    getData() {
        let thisClassScoped = this;
        this.fetchData(TRAININGS_API)
            .then(function (data) {
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

    manageDataFromAPI(data, scope) {
        // Conference || Seminar
        //scope.filterThroughArray(data, listingTypes.CONFERENCE, 'Conference');

        // Internship || Job
        // data = scope.filterThroughArray(data, listingTypes.JOB, 'Job');
        this.setState({
            isLoading: false
        });
        jsonData = data;
        this.props.navigator.push({
            name: 'CardLayout',
            data: jsonData
        });
    }

    render() {
        return (
            <Navigator
                renderScene={this.renderScene.bind(this)}
            />
        )
    }

    renderScene() {
        return (
            <ActivityIndicator
                animating={this.state.isLoading}
                style={styles.spinner}
                size="large"
            />
        );
    }
}
export default GetData;