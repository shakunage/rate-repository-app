import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import AppBarTab from './AppBarTab';
import useLoginStatus from '../hooks/useLoginStatus';
import { useApolloClient } from '@apollo/client';
import useAuthStorage from '../hooks/useAuthStorage';

const styles = StyleSheet.create({
  appBar: {
    display: 'flex',
    flexDirection: 'row',
  }
});

const AppBar = () => {

    const { status } = useLoginStatus();
    const apolloClient = useApolloClient();
    const authStorage = useAuthStorage();

    console.log("status is:" + JSON.stringify(status));
    
    const fetchStatus = status !== undefined 
    ? true
    : false;

    const loginStatus = fetchStatus === true
    ? status.authorizedUser !== null
    : true;

    return (
        <View style={styles.appBar}>
            <ScrollView horizontal>
            <AppBarTab text="Repositories" linkTo="/" show={true} />
            <AppBarTab text="Sign in" linkTo="/signin" show={!loginStatus} />
            <AppBarTab text="Sign up" linkTo="/signup" show={!loginStatus} />
            <AppBarTab text="Sign out" linkTo="/signout" show={loginStatus} logout={true} onpress={async () => { await authStorage.removeAccessToken(); await apolloClient.resetStore(); } } />
            <AppBarTab text="My reviews" linkTo="/myreviews" show={loginStatus} />
            <AppBarTab text="Create a Review" linkTo="/createreview" show={loginStatus} />
            </ScrollView>
        </View>
    );
};

export default AppBar;

