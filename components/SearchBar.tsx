import { Text, TextInput, View } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

interface SearchBarProps {
  onPress?: () => void;
  placeholder: string;
  value?: string;
  onChangeText?: (text: string) => void;
}

const SearchBar = ({
  onPress,
  placeholder,
  value,
  onChangeText,
}: SearchBarProps) => {
  return (
    <View className="flex-row  items-center justify-center h-12  ">
      <AntDesign name="search1" size={20} color="gray" />
      <TextInput
        onPress={onPress}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor="gray"
        className=" flex-1 ml-2 text-white"
      />
    </View>
  );
};

export default SearchBar;
