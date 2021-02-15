import React, {useContext} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import {Button} from 'react-native-elements';
import Spacer from '../components/Spacer';
import {Context as AuthContext} from '../context/AuthContext';


const AccountScreen = () => {

    const {signout} = useContext(AuthContext);
    return (
        <SafeAreaView forceInset={{top: 'always'}}>
        <Spacer/>
        <Text style={{fontSize: 48}}>
            Account Screen
        </Text>
        <Spacer>
        <Button
        title='Cerrar sesión'
        onPress={signout}
        />
        </Spacer>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({});

export default AccountScreen;
