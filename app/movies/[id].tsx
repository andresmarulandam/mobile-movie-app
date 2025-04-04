import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';

import { router, useLocalSearchParams } from 'expo-router';
import useFetchMovieDetails from '@/services/useFetchMovieDetails';
import { AntDesign } from '@expo/vector-icons';

const MovieDetails = () => {
  const { id } = useLocalSearchParams();

  const { data: movie, loading, error } = useFetchMovieDetails(id as string);

  return (
    <View className="bg-primary flex-1">
      <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
        <View className="mb-4">
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w500${movie?.poster_path}`,
            }}
            className="w-full h-[350px]"
            resizeMode="stretch"
          />
        </View>

        <View className="flex gap-2 mb-2 pl-5">
          <Text className="text-white text-xl">{movie?.title}</Text>
          <View className="flex flex-row gap-2 ">
            <Text className="text-gray-400">
              {movie?.release_date.split('-')[0]}
            </Text>
            {/*<Text className="text-gray-400">{}</Text> */}
            <Text className="text-gray-400">{movie?.runtime} min</Text>
          </View>
          <View>
            <View className=" flex-row flex-1 bg-gray-700 rounded-md w-[65%] h-8 items-center justify-center gap-2 mb-2">
              <AntDesign name="star" size={16} color="yellow" />
              <Text className="text-white font-bold">
                {movie?.vote_average}
                <Text className="text-gray-400">
                  /10 ({movie?.vote_count} views)
                </Text>
              </Text>
            </View>
          </View>
        </View>

        <View className="flex gap-2 my-4  pl-5">
          <Text className="text-[#FFD700] text-md">Overview</Text>
          <View className="mb-2">
            <Text className="text-white pr-3">{movie?.overview}</Text>
          </View>
          <View>
            <View className=" flex-row flex-1 items-center gap-40 mb-2">
              <View>
                <Text className="text-[#FFD700] ">Release date</Text>
                <Text className="text-white">{movie?.release_date}</Text>
              </View>

              <View>
                <Text className="text-[#FFD700] ">Status</Text>
                <Text className="text-white">{movie?.status}</Text>
              </View>
            </View>
          </View>
        </View>

        <View className="flex gap-2 mt-2 pl-5">
          <Text className="text-[#FFD700] ">Genres</Text>

          <View className=" flex-row  gap-4">
            {movie?.genres.map((genre) => (
              <View
                key={genre.id}
                className="  bg-gray-700 rounded-md  h-8 items-center justify-center px-3 my-1"
              >
                <Text className="text-white font-bold">{genre.name}</Text>
              </View>
            ))}
          </View>
        </View>

        <View className="flex gap-2 mt-5 pl-5">
          <Text className="text-[#FFD700] ">Countries</Text>

          <View className=" flex-row  gap-3">
            <Text className="text-white">
              {movie?.production_countries
                .map((country) => country.name)
                .join('  -  ')}
            </Text>
          </View>
        </View>

        <View className="pl-5 mt-5">
          <View className=" flex-row flex-1 items-center gap-20 mb-2">
            <View>
              <Text className="text-[#FFD700] ">Budget</Text>
              <Text className="text-white">
                {movie?.budget ? movie.budget / 1000000 : 0} millions
              </Text>
            </View>

            <View>
              <Text className="text-[#FFD700] ">Revenue</Text>
              <Text className="text-white">
                {movie?.revenue
                  ? (Math.round(movie?.revenue) / 1000000).toFixed(2)
                  : 0}{' '}
                millions
              </Text>
            </View>
          </View>
        </View>

        <View className="flex gap-2 mt-5 pl-5">
          <Text className="text-[#FFD700] ">Tagline</Text>

          <View className=" flex-row  gap-3">
            <Text className="text-white">{movie?.tagline}</Text>
          </View>
        </View>

        <View className="flex gap-2 mt-5 pl-5">
          <Text className="text-[#FFD700] ">Production Companies</Text>

          <View className=" flex-row  flex-wrap gap-3">
            <Text className="text-white">
              {movie?.production_companies
                .map((company) => company.name)
                .join('  -  ')}
            </Text>
          </View>
        </View>
      </ScrollView>

      <TouchableOpacity
        className="bg-[#FFD700] absolute bottom-5 left-0 right-0 items-center flex flex-row py-4 mx-5 justify-center z-50 rounded-lg"
        onPress={router.back}
      >
        <Ionicons name="chevron-back" size={20} color="black" />
        <Text>Go back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MovieDetails;

const styles = StyleSheet.create({});
