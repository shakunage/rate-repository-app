import React from 'react';
import { View, StyleSheet, Pressable, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import Text from './Text';
import theme from '../theme';
import { Link } from 'react-router-native';


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
    return (
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
    return (
        <View style={styles.appBar}>
            <ScrollView horizontal>
            <AppBarTab text="Repositories" linkTo="/" onpress={() => console.log("Repositories tab pressed!")}/>
            <AppBarTab text="Sign in" linkTo="/signin" onpress={() => console.log("Sign in tab pressed!")}/>
            </ScrollView>
        </View>
    );
};

export default AppBar;

