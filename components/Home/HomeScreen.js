import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
//🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀

function HomeScreen({ navigation, ...props }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'orange' }}>
            <Text>Home Screen {props.name ? 'true' : 'false'}</Text>
            <Button title='Next Screen' onPress={() => {
                console.log('----->', navigation);
                navigation.navigate('Information')
            }
            } />
        </View>
    );
}

const mapStateToProps = (state) => {
    console.log('statess--->', state.infoReducer);
    return {
        name: state.infoReducer.name,
        age: state.infoReducer.age,
    }
}


const mapDispatchToProps = (dispatch) => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
