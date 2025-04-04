import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';

const Profile = () => {
  return (
    <View className="bg-primary flex-1">
      <View className="flex flex-1 flex-col gap-5 justify-center items-center">
        <AntDesign name="user" size={32} color="#FFD700" />
        <Text className="text-[#FFD700]"> Profile coming soon..</Text>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
