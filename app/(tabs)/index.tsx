import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import SearchBar from '@/components/SearchBar';
import { useRouter } from 'expo-router';
import useFetch from '@/services/useFetch';
import { fetchLatestMovies, fetchTopRatesMovies } from '@/services/api';
import MovieCard from '@/components/MovieCard';
import LatestMovies from '@/components/LatestMovies';

export default function Index() {
  const router = useRouter();

  const {
    data: latestMovies,
    loading: latestMoviesLoading,
    error: latestMoviesError,
  } = useFetch(() => fetchLatestMovies({ query: '' }));

  const {
    data: topRatedMovies,
    loading: topRatedLoading,
    error: topRatedError,
  } = useFetch(() => fetchTopRatesMovies({ query: '' }));

  return (
    <View className="flex-1 bg-primary">
      <LinearGradient
        colors={['#FFD700', '#030014']}
        style={{ height: '13%' }}
        className="justify-center items-center"
      >
        <View className="w-11/12 mt-14 bg-dark-200 rounded-full px-5 ">
          <SearchBar
            onPress={() => router.push('/search')}
            placeholder="Search for a movie"
          />
        </View>
      </LinearGradient>
      <>
        <Text className=" text-left ml-3 mt-5 mb-3 text-lg font-bold text-white">
          Latest Movies
        </Text>
      </>
      <View>
        {latestMoviesLoading ? (
          <ActivityIndicator
            size="large"
            color="#FFD700"
            className="mt-10 self-center"
          />
        ) : latestMoviesError ? (
          <Text>Error: {latestMoviesError.message}</Text>
        ) : (
          <FlatList
            data={latestMovies}
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
        <Text className=" text-left ml-3 mt-5  text-xl font-bold text-white">
          Top Rates Movies
        </Text>
      </>

      <View className=" flex-1">
        {topRatedLoading ? (
          <ActivityIndicator
            size="large"
            color="#FFD700"
            className="mt-10 self-center"
          />
        ) : topRatedError ? (
          <Text>Error: {topRatedError.message}</Text>
        ) : (
          <FlatList
            data={topRatedMovies}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <LatestMovies {...item} />}
            contentContainerStyle={{ paddingHorizontal: 10 }}
            className=" pt-2 mb-2"
            numColumns={3}
          />
        )}
      </View>
    </View>
  );
}
