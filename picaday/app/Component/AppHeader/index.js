import React from 'react';
import { StyleSheet, TouchableOpacity, View,Image,Text } from 'react-native';
import color from '../../Module/Color';

const MARGIN    = 25

export default class AppHeader extends React.Component {

    constructor(){
        super();
    }
    
    onLeftButtonPress(){
        if (this.props.onLeftButtonPress) {
            this.props.onLeftButtonPress() 
        }    
    }

    leftButtonComponent() {
        return(
            this.props.leftText ? 
            <TouchableOpacity style = {styles.menu} onPress = {() => this.onLeftButtonPress() }>
                <Text>{this.props.leftText}</Text>
        </TouchableOpacity>
        : null
        )
       
    }

    render() {
        return (
            <View style = {[styles.mainView,this.props.style]}>
              {this.leftButtonComponent()}

                <View style = {styles.titleView}>
                    <Text style = {styles.title}>
                        {this.props.title ? this.props.title : "" }
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    mainView            : {
        flexDirection   : 'row',
        alignItems      : 'center',
        height          : 52,
        zIndex          : 10 ,
        backgroundColor : color.white,
        justifyContent  : "center",      
        borderBottomColor  : color.secondaryColor,
        borderBottomWidth  : 2

    },
    logoContainer       : {
        marginLeft      : MARGIN,
    },
    titleView           : {
        height          : '100%',
        alignItems      : 'center',
        flexDirection   : 'row',
        justifyContent  : 'center'
    }, 
    title               : { 
        fontSize        : 16,
        color           : color.black,
        textAlign       : "center"
    },
    menu                : {  
        justifyContent  : 'center',
        alignItems      : 'center',
        position        : "absolute",
        left            : 15,
        height          : '100%',
        width           : 44,  
    },
    filter              : {
        justifyContent  : 'center',
        alignItems      : 'flex-end',
        position        : "absolute",
        right           : MARGIN,
        height          : '100%',  
    },
    rightButton         : {
        justifyContent  : 'center',
        alignItems      : 'flex-end',
        position        : "absolute",
        right           : 16,
        height          : '100%', 
    },
    rightText           : {
        fontSize        : 14,
        color           : color.positiveColor
    }
});

