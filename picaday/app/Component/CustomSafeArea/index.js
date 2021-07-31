import React from 'react';
import { StyleSheet, Dimensions, View, StatusBar,ActivityIndicator } from 'react-native';
import color from '../../Module/Color';
import {SafeAreaView} from 'react-native-safe-area-context';


const height = Dimensions.get('window').height

export default class CustomSafeAreaView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isConnected: true,
        }
    }
    
    render() {
        return (
            <>
                <StatusBar
                    barStyle='dark-content'
                    backgroundColor={this.props.backgroundColor ? this.props.backgroundColor : 'transparent'}
                />

                <SafeAreaView
                edges={this.props.edges ? this.props.edges : []}
                    style={[styles.container, this.props.style]}>

                    {this.props.showLoadingIndicator ? (
                        <View style={styles.loader}>
                            <ActivityIndicator size="large" />
                        </View>
                    ) : null}
                    {this.props.children}

                </SafeAreaView>
            </>
        );
    }
};
  
const styles            = StyleSheet.create({
    container           : {
        flex            : 1,
        backgroundColor :  color.white
    },
    popup               : {
        position        : 'absolute',
        alignSelf       : 'center',
        marginTop       : height - 100,
        zIndex          : 2          
    },
    loader              : {
        zIndex          : 999,
        width	        : Dimensions.get('window').width,
        height			: height,
        position        : 'absolute',
        alignItems      : "center",
        justifyContent  : "center",
        elevation       : 5,
        backgroundColor :  color.semiTransparent
    }
});