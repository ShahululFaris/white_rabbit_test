import React, {Component} from 'react';

import { StyleSheet, View, TouchableOpacity,Text} from 'react-native';
import FastImage from 'react-native-fast-image';

export default class EmployeeCard extends Component {

    constructor(props){
        super(props);
        
        this.state = {
            likedState: false ,
            isAdminUser : null,
            visible: false,
            textHeight:0,
            imageHeight : 0
        }
    }

    componentDidMount() {
    }

    deleteBooks(id) {
        if(this.props.deleteBooks) {
            this.props.deleteBooks(id)
        }
    }

   
    render() {
        return (
            <View style={[this.props.style,styles.mainView]}>
                 <FastImage
                     style={{ width: 200, height: 100 }}
                     source = {this.props.image ? {uri: this.props.image}: null}
                     resizeMode={FastImage.resizeMode.contain}
                />
                <Text>{this.props.name? this.props.name : ""}</Text>
                <Text>{this.props.companyName ? this.props.companyName : ""}</Text>
               
            </View>
        );
    }
}

const styles = StyleSheet.create({

    mainView         : {
        alignSelf: 'center',
        alignItems: "center",
        width: "50%",
        height: 200,
    },

});

