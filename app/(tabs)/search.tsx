import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import SearchBar from '@/components/SearchBar';
import { useRouter } from 'expo-router';
import useFetch from '@/services/useFetch';
import { fetchLatestMovies } from '@/services/api';
import LatestMovies from '@/components/LatestMovies';
import { images } from '@/constants/images';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const {
    data: latestMovies,
    loading,
    error,
    fetchData,
    reset,
  } = useFetch(() => fetchLatestMovies({ query: searchQuery }), false);

  useEffect(() => {
    // DEBOUNCE TECNIQUE
    const timeoutId = setTimeout(async () => {
      if (searchQuery.trim()) {
        await fetchData();
      } else {
        reset();
      }
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [searchQuery]);

  return (
    <View className="flex-1 bg-primary">
      <LinearGradient
        colors={['#FFD700', '#030014']}
        style={{ height: '13%' }}
        className="justify-center items-center"
      >
        <View className="w-11/12 mt-14 bg-dark-200 rounded-full px-5 ">
          <SearchBar
            placeholder="Search for a movie"
            value={searchQuery}
            onChangeText={(text: string) => setSearchQuery(text)}
          />
        </View>
      </LinearGradient>
      <>
        <Text className=" text-left ml-3 mt-5 mb-3 text-xl font-bold text-white">
          Search results for:
          <Text className="text-[#FFD700]"> {searchQuery}</Text>
        </Text>
      </>

      <View className="flex-1">
        {loading ? (
          <ActivityIndicator
            size="large"
            color="#FFD700"
            className="mt-10 self-center"
          />
        ) : error ? (
          <Text>Error: {error.message}</Text>
        ) : (
          <FlatList
            data={latestMovies}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <LatestMovies {...item} />}
            contentContainerStyle={{ paddingHorizontal: 10 }}
            className=" pt-2 mb-2"
            numColumns={3}
            ListEmptyComponent={
              !loading && !error ? (
                <View className="flex-1 justify-center items-center">
                  <Text>
                    {searchQuery.trim() ? (
                      <Image
                        source={images.noMovies}
                        style={{ width: 650, height: 650 }}
                        resizeMode="contain"
                      />
                    ) : (
                      <Image
                        source={images.searchMovie}
                        style={{ width: 650, height: 650 }}
                        resizeMode="contain"
                      />
                    )}
                  </Text>
                </View>
              ) : null
            }
          />
        )}
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({});
