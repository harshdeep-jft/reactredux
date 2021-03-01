import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import CardView from 'react-native-cardview';
import { useEffect } from 'react';

function InformationScreen({ navigation, ...props }) {
    useEffect(() => {
        console.log('___>', props.name);
    }, [props])
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'pink' }}>

            { props.name ?
                <Text>Name: {props.name}</Text> : null}
            { props.age ? <Text>Age: {props.age}</Text> : null}

            <TextInput
                placeholder='update name'
                onChangeText={(e) => {
                    console.log('inputy', e);
                    props.updateName(e);
                }}
            />

            <Button title='Next Screen' onPress={() => navigation.navigate('Home')} />
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
    return {
        updateName: (name) => dispatch({
            type: 'UPDATE_NAME',
            payload: name,
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InformationScreen);
