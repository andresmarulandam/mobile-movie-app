import { Text, TextInput, View } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

interface SearchBarProps {
  onPress?: () => void;
  placeholder: string;
}

const SearchBar = ({ onPress, placeholder }: SearchBarProps) => {
  return (
    <View className="flex-row rounded-full items-center justify-center  px-5  mx-auto bg-red-100">
      <AntDesign name="search1" size={20} color="gray" />
      <TextInput
        onPress={onPress}
        placeholder={placeholder}
        value=""
        onChange={() => {}}
        placeholderTextColor="gray"
        className=" flex-1 ml-2 text-white"
      />
    </View>
  );
};

export default SearchBar;
