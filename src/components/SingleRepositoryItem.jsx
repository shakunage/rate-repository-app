import React from 'react';
import { format, parseISO } from 'date-fns';
import { View, FlatList, StyleSheet } from 'react-native';
import Text from './Text';
import theme from '../theme';
import RepositoryItem from './RepositoryItem';
import { useParams } from 'react-router-native';
import { GET_SINGLE_REPO } from '../graphql/queries';
import { useQuery } from '@apollo/client';

const styles = StyleSheet.create({
  flexContainer: {
      display: 'flex',
      flexGrow: 1,
      backgroundColor: theme.colors.cardColor,
      marginTop: 10,
  },
  textContainer: {
      display: 'flex',
      flexGrow: 0,
      paddingRight: 30,
      justifyContent: 'center'
  },
  flexColumn: {
      display: 'flex',
      flexDirection: 'row',
      flexGrow: 1,
      padding: 6, 
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
    circle: {
      width: 35,
      height: 35,
      justifyContent: "center",
      borderRadius: 35 / 2,
      borderColor: theme.colors.auxiliary,
      borderWidth: 2,
      marginRight: 5
   },
   circledText: {
    alignSelf: 'center',
    fontWeight: 'bold',
    color: theme.colors.auxiliary,
    fontSize: 15,
    padding: 4
   }

});


const RepositoryInfo = ({ repository }) => {

    return (
        <RepositoryItem item={repository} showGithubButton={true}/>
    );
  };
  
  const ReviewItem = ({ review }) => {
    return (
      <View style={styles.flexContainer}>
        <View style={styles.flexColumn}>
          <View style={styles.circle}>
            <Text style={styles.circledText}>{review.rating}</Text>
          </View>
          <View style={styles.textContainer}>
            <Text fontWeight='bold'>{review.user.username}</Text>
            <Text fontSize='auxiliary'>{format(parseISO(review.createdAt), 'd MMM Y')}</Text>
            <Text >{review.text}</Text>
          </View>
        </View>
      </View>  
    );
  };

const SingleRepositoryItem = () => {
    const id = useParams().id;

    const {data, error, loading} = useQuery(GET_SINGLE_REPO, {
        variables: { id },
        fetchPolicy: "cache-and-network"
    });

    if (loading) {
        return <View><Text style={{color: "white"}}>Loading...</Text></View>;    
    }

    if (error) {
        console.log("Error: " + error);
        return <View><Text style={{color: "white"}}>Error!</Text></View>;   
    }

    const reviewNodes = data.repository.reviews
    ? data.repository.reviews.edges.map(edge => edge.node)
    : [];

    return (
    <FlatList
      data={reviewNodes}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => <RepositoryInfo repository={data.repository}/>}
    />
    );
};

export default SingleRepositoryItem;