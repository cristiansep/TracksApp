import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';

const SignUpScreen = ({navigation}) => {
    return (
        <>
        <Text style={{fontSize: 48}}></Text>
        <Button
        title="Go to SignIn"
        onPress={() => navigation.navigate('SignIn')}
        />

        <Button
        title="Go to main flow"
        onPress={() => navigation.navigate('mainFlow')}
        />
        </>
    )
};

const styles = StyleSheet.create({});

export default SignUpScreen;
