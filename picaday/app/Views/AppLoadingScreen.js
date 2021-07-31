import React, { Component } from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';
import dataStore from '../DatasStore';

export default class AppLoadingScreen extends Component {

    constructor(props) {
        super(props);
    }


    async componentDidMount() {
        await dataStore.initStore()
        dataStore.getAPIEmployeeList(isSuccess => {
            if (isSuccess) {
                this.props.navigation.navigate("HomeScreen");
            } else {
                alert("error fetching Data")
            }
        })
     
    }

    render() {
        return (
            <View style={styles.container}>
            </View>
        );
    }

}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "white"
    }
});
