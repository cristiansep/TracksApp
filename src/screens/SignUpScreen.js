import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {NavigationEvents} from 'react-navigation';
import AuthForm from '../components/AuthForm';
import { Context as AuthContext } from '../context/AuthContext';

import NavLink from '../components/NavLink';


const SignUpScreen = ({navigation}) => {

    const {state, signup, clearErrorMessage} = useContext(AuthContext);

 
    return (
        <View style={styles.container}>
              <NavigationEvents 
                onWillBlur={clearErrorMessage}
            />
            <AuthForm
            headerText="Cree una cuenta en Trucker"
            errorMessage={state.errorMessage}
            submitButtonText="Registrarse"
            onSubmit={signup}
            />
          <NavLink
          routeName="SignIn"
          text="Ya tiene cuenta? Inicie sesión"
          />
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
        marginBottom: 100
    },
});

export default SignUpScreen;
