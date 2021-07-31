import React, { Component } from 'react';
import { GET } from '../Services/API';
import { StoreKeys } from '../Common';
import SyncStorage from 'sync-storage';


class DataStore extends Component {

    initStore = async () => {
        await SyncStorage.init()
      }

    async getAPIEmployeeList(callback) {
        let path = "http://www.mocky.io/v2/5d565297300000680030a986"
        GET(path).then((responseJson) => {
            this.employeeData = responseJson
            if (callback) {
                callback(true)
            }
        }).catch((error) => {
            if (callback) {
                callback(false)
            }
            console.log('error fetching employee data', error);
        });
    }

    getEmployeeData = () => {
        let listingData = []
        let data = this.employeeData.forEach(element => {
            let object = {
                name : element?.name ? element.name: ""  ,
                email : element?.email ? element.email : "",
                profileImage : element?.profile_image ? element.profile_image : null,
                phone: element?.phone ? element.phone: "Not Provided",
                webSite: element?.webSite ? element.webSite : "",
                userName: element?.username ? element.username : "",
                id: element?.id,
                city: element.address?.city ? element.address.city : "",
                zipcode: element.address?.zipcode ? element.address.zipcode : "",
                suite: element.address?.suite ? element.address.suite : "",
                companyName: element.company?.name ? element.company.name : "",
                businessType:  element.company?.bs ? element.company.bs : "",
            }
            listingData.push(object)
        });
       return listingData
    }

    set employeeData(value) {
        SyncStorage.set(StoreKeys.employeeData, value);
    }

    get employeeData() {
        return (SyncStorage.get(StoreKeys.employeeData) != undefined) ? SyncStorage.get(StoreKeys.employeeData) : []
    }
}

const dataStore = new DataStore()
export default dataStore