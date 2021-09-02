import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import abbreviate from 'number-abbreviate';
import theme from '../theme';
import Text from './Text';


const styles = StyleSheet.create({
    flexContainer: {
        display: 'flex',
        flexGrow: 0,
        backgroundColor: theme.colors.cardColor,
    },
    flexItemLang: {
        padding: 3,
        alignSelf: 'flex-start',
        borderRadius: 3,
        backgroundColor: theme.colors.auxiliary,
    },
    flexRow: {
        display: 'flex',
        flexDirection: 'row',
        padding: 3, 
    },
    statsValue: {
        display: 'flex',
        flexGrow: 1,
        padding: 3,
        flexDirection: 'column',
        alignItems: 'center'
    },
    tinyLogo: {
        borderRadius: 3,
        width: 50,
        height: 50,
      },
    
  });

const RepositoryItem = ({ item }) => {
    return (
        <View style={styles.flexContainer}>

            <View style={styles.flexRow}>

                <Image
                style={styles.tinyLogo}
                source={{
                uri: item.ownerAvatarUrl,
                }}
                />

                <View style={{padding: 3}}>
                    <Text fontWeight='bold'>
                            {item.fullName}
                    </Text>
                    <Text color='textSecondary'>
                            {item.description}
                    </Text>
                    <View style={styles.flexItemLang}>
                    <Text fontWeight='bold' color='subheading' fontSize='auxiliary'>{item.language}</Text>
                    </View>
                </View>

            </View>

            <View style={styles.flexRow}>
                <View style={styles.statsValue}>
                    <Text fontWeight='bold'>{abbreviate(item.stargazersCount, 1)}</Text>
                    <Text>{'Stars'}</Text>
                </View>
                <View style={styles.statsValue}>
                    <Text fontWeight='bold'>{abbreviate(item.forksCount, 1)}</Text>
                    <Text>{'Forks'}</Text>
                </View>
                <View style={styles.statsValue}>
                    <Text fontWeight='bold'>{item.reviewCount}</Text>
                    <Text>{'Reviews'}</Text>
                </View>
                <View style={styles.statsValue}>
                    <Text fontWeight='bold'>{item.ratingAverage}</Text>
                    <Text>{'Rating'}</Text>
                </View>
            </View>
        </View>
    );
  };

export default RepositoryItem;