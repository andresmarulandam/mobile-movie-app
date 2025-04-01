import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_CONFIG } from '@/services/api';

interface popularMoviesProps {
  id: number;
  title: string;
}

const PopularMovies = () => {
  const [popularMovies, setPopularMovies] = useState<popularMoviesProps[]>([]);

  const options = {
    method: 'GET',
    url: `${API_CONFIG.BASE_URL}/discover/movie`,
    params: {
      include_adult: 'false',
      include_video: 'false',
      language: 'en-US',
      page: '1',
      sort_by: 'popularity.desc',
    },
    headers: API_CONFIG.headers,
  };

  console.log('API_CONFIG', API_CONFIG.headers);
  console.log('API_CONFIG', API_CONFIG.BASE_URL);
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
