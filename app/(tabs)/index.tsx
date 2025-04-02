import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import SearchBar from '@/components/SearchBar';
import { useRouter } from 'expo-router';
import useFetch from '@/services/useFetch';
import { fetchMovies } from '@/services/api';
import MovieCard from '@/components/MovieCard';

export default function Index() {
  const router = useRouter();

  const { data, loading, error } = useFetch(() => fetchMovies({ query: '' }));

  return (
    <View className="flex-1 bg-primary">
      <LinearGradient
        colors={['#FFD700', '#030014']}
        style={{ height: '20%' }}
        className="justify-center items-center"
      >
        <View className="w-11/12 mt-24 bg-dark-200 rounded-full px-5 ">
          <SearchBar
            onPress={() => router.push('/search')}
            placeholder="Search for a movie"
          />
        </View>
      </LinearGradient>
      <>
        <Text className=" text-left ml-3 mt-5 mb-3 text-lg font-bold text-white">
          Popular Movies
        </Text>
      </>
      <View>
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
            data={data}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <MovieCard {...item} />}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 10 }}
            className=" pt-2  "
          />
        )}
      </View>

      <>
        <Text className=" text-left ml-3 mt-5 mb-3 text-xl font-bold text-white">
          Latest Movies
        </Text>
      </>
    </View>
  );
}
