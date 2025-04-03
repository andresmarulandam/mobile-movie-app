import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { memo } from 'react';
import { Link } from 'expo-router';
import AntDesign from '@expo/vector-icons/AntDesign';

interface MovieCardProps {
  id: number;
  poster_path: string;
  title: string;
  vote_average: number;
}

const MovieCard = memo(
  ({ id, poster_path, title, vote_average }: MovieCardProps) => {
    return (
      <Link href={`/movies/${id}`} asChild>
        <TouchableOpacity className="mx-2  w-36">
          <Image
            source={{
              uri: poster_path
                ? `https://image.tmdb.org/t/p/w500${poster_path}`
                : 'https://placehold.co/600x400/1a1a1a/ffffff.png',
            }}
            className="w-36 h-48 rounded-lg"
            resizeMode="cover"
          />
          <View className="absolute top-2 right-2 bg-black bg-opacity-70 rounded-lg px-2 py-1 flex flex-row items-center">
            <AntDesign name="star" size={16} color="yellow" />
            <Text className="text-white font-bold ml-1">
              {vote_average.toFixed(1)}
            </Text>
          </View>
          <Text
            className="text-md font-bold text-white mt-1"
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {title}
          </Text>
        </TouchableOpacity>
      </Link>
    );
  },
);

export default MovieCard;

const styles = StyleSheet.create({});
