import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

const MovieCard = ({ id, poster_path, title }: Movie) => {
  return (
    <Link href={`/movies/${id}`} asChild>
      <TouchableOpacity className="mx-2  w-36">
        <Image
          source={{
            uri: poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : 'https://placehold.co/600x400/1a1a1a/ffffff.png',
          }}
          className="w-36 h-52 rounded-lg"
          resizeMode="cover"
        />
        <Text></Text>
        <Text
          className="text-md font-bold text-white mt-2"
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {title}
        </Text>
      </TouchableOpacity>
    </Link>
  );
};

export default MovieCard;

const styles = StyleSheet.create({});
