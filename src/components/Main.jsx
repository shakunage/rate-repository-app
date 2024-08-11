import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import MyReviews from './MyReviews';
import SignIn from './SignIn';
import theme from '../theme';
import { Route, Routes, Navigate } from 'react-router-native';
import { useDebounce } from 'use-debounce';
import SingleRepositoryItem from './SingleRepositoryItem';
import CreateReview from './CreateReview';
import SignUp from './SignUp';
import { Picker } from '@react-native-picker/picker';
import { SearchBar } from "react-native-elements"; 



const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.primary
  },
});

const Main = () => {

  const [selectedSorting, useSelectedSorting] = useState('latest');
  const [searchInput, setSearchInput] = useState("");
  const [debouncedSearchInput] = useDebounce(searchInput, 500);

  return (
    <View style={styles.container}>
      <AppBar />  
      <SearchBar 
          placeholder="Type Here..."
          onChangeText={setSearchInput}
          value={searchInput}
        />       
      <Picker 
        style={styles.sortMenu}
        selectedValue={selectedSorting}
        onValueChange={(itemValue) =>
          useSelectedSorting(itemValue)
        }
      >
        <Picker.Item label="Latest Repositories" value="latest" />
        <Picker.Item label="Highest Rated Repositories" value="highestrated" />
        <Picker.Item label="Lowest Rated Repositories" value="lowestrated" />
      </Picker>

      <Routes>
        <Route path="/" element={<RepositoryList sortCondition={selectedSorting} searchKeyword={debouncedSearchInput} />} exact />
        <Route path="/signin" element={<SignIn />} exact />
        <Route path="/signup" element={<SignUp />} exact />
        <Route path="/createreview" element={<CreateReview />} exact />
        <Route path="/myreviews" element={<MyReviews />} exact />
        <Route path="/repos/:id" element={<SingleRepositoryItem />} exact />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};

export default Main;