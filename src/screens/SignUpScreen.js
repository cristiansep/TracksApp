import React, {useContext} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import { Text} from 'react-native-elements';
import AuthForm from '../components/AuthForm';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';



const SignUpScreen = ({navigation}) => {

    const {state, signup} = useContext(AuthContext)

    return (
        <View style={styles.container}>
            <AuthForm
            headerText="Cree una cuenta en Trucker"
            errorMessage={state.errorMessage}
            submitButtonText="Sign Up"
            onSubmit={signup}
            />
            <TouchableOpacity 
            onPress={() => navigation.navigate('SignIn')}
            >
                <Spacer>
                <Text style={styles.link}>Ya tiene cuenta? Inicie sesión</Text>
                </Spacer>
            </TouchableOpacity>
        </View>
    )
};

SignUpScreen.navigationOptions = () => {
    return {
        headerShown: false,
      };
  };

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        marginBottom: 200
    },
    link: {
       color: 'blue'
    }
});

export default SignUpScreen;
