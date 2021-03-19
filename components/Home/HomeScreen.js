import React from 'react';
import { SafeAreaView, StyleSheet, } from 'react-native';
import { connect } from 'react-redux';
import { Layout, Button, Text, Divider, TopNavigation } from '@ui-kitten/components'
//🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀

function HomeScreen({ navigation, ...props }) {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <TopNavigation title='Dashboard' alignment='center' />
            <Divider />
            <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Home Screen: {props.name}</Text>
                <Button onPress={() => {
                    navigation.navigate('Information')
                }}>Information Screen</Button>
            </Layout>
        </SafeAreaView>
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
