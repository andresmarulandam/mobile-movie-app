import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface popularMoviesProps {
  id: number;
  title: string;
}

const PopularMovies = () => {
  const [popularMovies, setPopularMovies] = useState<popularMoviesProps[]>([]);

  const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/movie/popular',
    params: { language: 'en-US', page: '1' },
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NDIwYWEyNTA3ZTYxNGFmYWViYmQ2MmQyMGVhNmIyZCIsIm5iZiI6MTcyODg0MzYyMy42Niwic3ViIjoiNjcwYzBmNjczYmI0NTU3YzY2OWJiM2UyIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.1YRNW5eCjW393mpGsnMGbsWd8lHjLFIc0NvhVXhktFk',
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.request(options);
        console.log(response.data.results);
        setPopularMovies(response.data.results);
      } catch (error) {
        console.log('error');
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <FlatList
        horizontal
        data={popularMovies} // Accessing 'results' array from the API response
        keyExtractor={(item) => item.id.toString()} // Assuming each movie has a unique 'id'
        renderItem={({ item }) => (
          <View className="m-2 p-2 bg-gray-200 rounded-lg">
            <Text className="text-lg font-bold text-gray-800">
              {item.title}
            </Text>
          </View>
        )}
        showsHorizontalScrollIndicator={false}
      />
    </>
  );
};

export default PopularMovies;
