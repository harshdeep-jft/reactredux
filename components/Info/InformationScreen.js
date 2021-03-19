import React from 'react';
import { SafeAreaView, StyleSheet, } from 'react-native';
import { Layout, Button, Text, Input, TopNavigation, TopNavigationAction, Icon, Divider } from '@ui-kitten/components'
import { connect } from 'react-redux';
import { useEffect } from 'react';

const BackIcon = (props) => (
    <Icon {...props} name='arrow-back' />
);

function InformationScreen({ navigation, ...props }) {

    const navigateBack = () => {
        navigation.goBack();
    };

    const BackAction = () => (
        <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
    );

    useEffect(() => {
        console.log('___>', props.name);
    }, [props])
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <TopNavigation title='Information' alignment='center' accessoryLeft={BackAction} />
            <Divider />
            <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>

                {props.name ?
                    <Text>Name: {props.name}</Text> : null}
                {props.age ? <Text>Age: {props.age}</Text> : null}

                <Input
                    placeholder='update name'
                    onChangeText={(e) => {
                        console.log('inputy', e);
                        props.updateName(e);
                    }}
                />

                <Button title='Next Screen' onPress={() => navigation.navigate('Home')} > Go Back to HomeScreen</Button>

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
    return {
        updateName: (name) => dispatch({
            type: 'UPDATE_NAME',
            payload: name,
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InformationScreen);
