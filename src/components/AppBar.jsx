import React from 'react';
import { View, StyleSheet, Pressable, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import Text from './Text';
import theme from '../theme';
import { Link } from 'react-router-native';
import useLoginStatus from '../hooks/useLoginStatus';
import { useApolloClient } from '@apollo/client';
import useAuthStorage from '../hooks/useAuthStorage';

const styles = StyleSheet.create({
  appBarItem: {
    paddingTop: Constants.statusBarHeight,
    paddingBottom: 10,
    paddingLeft: 5,
    paddingRight: 15,
    backgroundColor: theme.colors.primary,
  },
  appBar: {
    display: 'flex',
    flexDirection: 'row',
    
  }

});

const AppBarTab = props => {
    if (!props.show) {
        return null;
    } if (props.logout) {
        return (
            <View style={styles.appBarItem}>
             <Pressable onPress={props.onpress}>
                    <Text fontSize='subheading' color='subheading' fontWeight='bold'>{props.text}</Text>
            </Pressable>
        </View>
        );
    }
    else return (
        <View style={styles.appBarItem}>
             <Pressable onPress={props.onpress}>
                <Link to={props.linkTo}>
                    <Text fontSize='subheading' color='subheading' fontWeight='bold'>{props.text}</Text>
                </Link>
            </Pressable>
        </View>
    );
};

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
            <AppBarTab text="Sign out" linkTo="/signout" show={loginStatus} logout={true} onpress={async () => { await authStorage.removeAccessToken(); await apolloClient.resetStore();} } />
            </ScrollView>
        </View>
    );
};

export default AppBar;

