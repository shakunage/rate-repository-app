import React from 'react';
import { View, Image, StyleSheet, Pressable } from 'react-native';
import abbreviate from 'number-abbreviate';
import theme from '../theme';
import Text from './Text';
import { Link } from 'react-router-native';
import * as Linking from 'expo-linking';


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
      githubButton: {
        display: 'flex',
        flexGrow: 1,
        backgroundColor: theme.colors.auxiliary,
        padding: 10,
        margin: 10,
        borderRadius: 3,
        alignItems: "center",
      },
  });

const RepositoryItem = ({ item }, showGithubButton) => {
    showGithubButton = showGithubButton
    ? styles.githubButton
    : { display: 'none' };

    return (
        <Link to={`/repos/${item.id}`}>
            <View style={styles.flexContainer}>
                <View style={styles.flexRow}>
                    <Image
                    style={styles.tinyLogo}
                    source={{
                    uri: item.ownerAvatarUrl,
                    }}
                    />
                    <View style={{padding: 3}}>
                        <Text fontWeight='bold' testID="repoName">
                            {item.fullName}
                        </Text>
                        <Text color='textSecondary' testID="repoDesc">
                            {item.description}
                        </Text>
                        <View style={styles.flexItemLang}>
                            <Text fontWeight='bold' color='subheading' fontSize='auxiliary' testID="repoLang">
                                {item.language}
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.flexRow}>
                    <View style={styles.statsValue}>
                        <Text fontWeight='bold' testID="repoStars">{abbreviate(item.stargazersCount, 1)}</Text>
                        <Text>{'Stars'}</Text>
                    </View>
                    <View style={styles.statsValue}>
                        <Text fontWeight='bold' testID="repoForks">{abbreviate(item.forksCount, 1)}</Text>
                        <Text>{'Forks'}</Text>
                    </View>
                    <View style={styles.statsValue}>
                        <Text fontWeight='bold' testID="repoReviews">{item.reviewCount}</Text>
                        <Text>{'Reviews'}</Text>
                    </View>
                    <View style={styles.statsValue}>
                        <Text fontWeight='bold' testID="repoRating">{item.ratingAverage}</Text>
                        <Text>{'Rating'}</Text>
                    </View>
                </View>
                <Pressable style={showGithubButton} onPress={() => Linking.openURL(item.url)}>
                    <Text color="subheading" fontSize="subheading" fontWeight="bold">Open in GitHub</Text>
                </Pressable>
            </View>
        </Link>
    );
  };

export default RepositoryItem;