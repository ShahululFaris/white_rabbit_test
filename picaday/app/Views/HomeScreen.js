import React, { Component } from 'react';
import {
    View,
    FlatList,
    StyleSheet,
    TouchableOpacity,
    TextInput
} from 'react-native';
import AppHeader from '../Component/AppHeader';
import CustomSafeAreaView from '../Component/CustomSafeArea';
import DataStore from '../DatasStore';
import EmployeeCard from '../Component/EmployeeCard';


export default class HomeScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            employeeData: DataStore.getEmployeeData(),
            filterdEmployeeList: DataStore.getEmployeeData(),
            searchText: ""
        }

    }

    onSearch = (value) => {
        this.setState({
            searchText: value
        }, () => {
            if (value.trim().length > 0) {
                let filterdList = this.state.employeeData.filter(function (item) {
                    return item.name.toLowerCase().includes(value.toLowerCase())
                });
                this.setState({
                    filterdEmployeeList: filterdList
                });
            } else {
                this.setState({
                    filterdEmployeeList: this.state.employeeData
                });
            }
        })
    }

    onCardPress = (item) => {
        this.props.navigation.navigate("EmployeeDetailsScreen", { data: item })
    }


    renderItem = ({ item, index, separator }) => {
        if (item) {
            return (
                <TouchableOpacity onPress={() => this.onCardPress(item)}>
                    <EmployeeCard
                        image={item.profileImage}
                        name={item.name}
                        companyName={item.companyName}
                    />
                </TouchableOpacity>
            )
        }
    }

    render() {
        return (
            <CustomSafeAreaView>
                <AppHeader />
                <TextInput
                    style={styles.input}
                    onChangeText={this.onSearch}
                    value={this.state.searchText}
                    placeholder="Search"
                />
                <View style={{ flex: 1 }}>
                    <FlatList
                        pagingEnabled={false}
                        keyExtractor={(item, index) => item.id}
                        initialNumToRender={10}
                        horizontal={false}
                        data={this.state.filterdEmployeeList}
                        renderItem={(item, index) => this.renderItem(item, index)}
                    />
                </View>
            </CustomSafeAreaView>

        )
    }

}

const styles = StyleSheet.create({
    header_footer_style: {
        width: '100%',
        height: 30,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
});
