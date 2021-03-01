import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';


function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'orange' }}>
            <Text>Home Screen</Text>
            <Button title='Next Screen' onPress={() => {
                console.log('----->', navigation);
                navigation.navigate('Information')
            }
            } />
        </View>
    );
}

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
