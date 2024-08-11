import React from 'react'; 
import { FlatList, View, StyleSheet } from 'react-native';
import useRepositories from '../hooks/useRepositories';
import RepositoryItem from './RepositoryItem';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = ({ sortCondition, searchKeyword }) => {

  const { repositories, fetchMore } = useRepositories({first: 5, sortCondition, searchKeyword});
  
  const repositoryNodes = repositories
    ? repositories.repositories.edges.map(edge => edge.node)
    : [];

    const onEndReach = () => {
      console.log('You have reached the end of the list');
      fetchMore();
    };

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={RepositoryItem}
      keyExtractor={(item, index) => index.toString()}
      onEndReach={onEndReach()}
      onEndReachedThreshold={0.7}
    />
  );
};


export default RepositoryList;