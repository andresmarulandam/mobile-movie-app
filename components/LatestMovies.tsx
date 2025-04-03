import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { memo } from 'react';
import { Link } from 'expo-router';
import AntDesign from '@expo/vector-icons/AntDesign';

interface LatestMoviesProps {
  id: number;
  poster_path: string;
  title: string;
  vote_average: number;
}

const LatestMovies = ({
  id,
  poster_path,
  title,
  vote_average,
}: LatestMoviesProps) => {
  return (
    <Link href={`/movies/${id}`} asChild>
      <TouchableOpacity className="mx-2 mt-2 pb-2 w-32 relative">
        <Image
          source={{
            uri: poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : 'https://placehold.co/600x400/1a1a1a/ffffff.png',
          }}
          className="w-32 h-52 rounded-lg"
          resizeMode="cover"
        />

        <Text className="text-md font-bold text-white mt-1" numberOfLines={1}>
          {title}
        </Text>

        <View className="flex-row items-center justify-start gap-x-1">
          <AntDesign name="star" size={16} color="yellow" />
          <Text className="text-md font-bold text-white ">
            {vote_average.toFixed(1)}
          </Text>
        </View>
      </TouchableOpacity>
    </Link>
  );
};

export default memo(LatestMovies);

const styles = StyleSheet.create({});
