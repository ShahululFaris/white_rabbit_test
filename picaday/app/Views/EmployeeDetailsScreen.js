import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

import CustomSafeAreaView from '../Component/CustomSafeArea';
import AppHeader from '../Component/AppHeader';
import FastImage from 'react-native-fast-image';

export default class EmployeeDetailsScreen extends Component {

    constructor(props) {
        super(props)
        // console.log("navigatio",(this.props.route.params.data))
        this.employeeDetails = this.props.route.params.data


    }

    onBackButton = ()=> {
        this.props.navigation.goBack()
    }

    renderDetailsView() {
        return (
            <View style={[this.props.style,styles.mainView]}>
                 <FastImage
                     style={{ width: "80%", height: 200 }}
                     source =  {this.employeeDetails.profileImage ? {uri:this.employeeDetails.profileImage} : null}
                     resizeMode={FastImage.resizeMode.contain}
                />
                <Text>Name: {this.employeeDetails.name }</Text>
                <Text> UserName: {this.employeeDetails.userName}</Text>
                <Text>Email: {this.employeeDetails.email}</Text>
                <Text>Address{this.employeeDetails.city + " " + this.employeeDetails.suite +" " +this.employeeDetails.zipcode}</Text>
                <Text>Phone: {this.employeeDetails.phone}</Text>
                <Text>webSite: {this.employeeDetails.webSite}</Text>
                <Text>companyDetails: {this.employeeDetails.companyName + "\n" + this.employeeDetails.businessType}</Text>
            </View>
        )
    }


    render() {
        return (
            <CustomSafeAreaView>
                <AppHeader leftText = "Back" 
                onLeftButtonPress= {this.onBackButton}
                />
                {this.renderDetailsView()}
               
            </CustomSafeAreaView>
        )
    }

}

const styles = StyleSheet.create({
    customAreaStyle: {
        flex: 1,
    },
    mainView: {
        flex: 1,
        alignItems: 'center'
    }
});