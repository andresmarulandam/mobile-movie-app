import { FlatList, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import SearchBar from '@/components/SearchBar';
import { useRouter } from 'expo-router';
import PopularMovies from '@/components/PopularMovies';

export default function Index() {
  const router = useRouter();

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

        <View className="w-full mt-8 bg-slate-400 px-5 h-1/3">
          <Text className="text-white">Popular Movies</Text>
          <PopularMovies />
        </View>
      </LinearGradient>
    </View>
  );
}
