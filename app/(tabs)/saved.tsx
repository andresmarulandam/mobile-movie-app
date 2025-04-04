import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Feather } from '@expo/vector-icons';

const Saved = () => {
  return (
    <View className="bg-primary flex-1">
      <View className="flex flex-1 flex-col gap-5 justify-center items-center">
        <Feather name="bookmark" size={32} color="#FFD700" />
        <Text className="text-[#FFD700]"> Saved coming soon..</Text>
      </View>
    </View>
  );
};

export default Saved;

const styles = StyleSheet.create({});
