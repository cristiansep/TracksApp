import React, {useContext} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {NavigationEvents} from 'react-navigation';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import {Context} from '../context/AuthContext';

const SignInScreen = () => {

    const {state, signin, clearErrorMessage} = useContext(Context);


    return (
        <View style={styles.container}>

            <NavigationEvents 
                onWillBlur={clearErrorMessage}
            />
     
           <AuthForm
           headerText="Ingrese a su cuenta"
           errorMessage={state.errorMessage}
           onSubmit={signin}
           submitButtonText="Acceder"
           /> 
           <NavLink
           routeName="SignUp"
           text='Aun no tiene cuenta? Cree una cuenta'
           />
        </View>
    )
};


SignInScreen.navigationOptions = () => {
    return {
      headerShown: false,
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center',
        marginBottom: 100
    }
});

export default SignInScreen;
