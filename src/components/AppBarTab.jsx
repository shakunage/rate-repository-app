import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
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

export default AppBarTab;