import {
  Image,
  ImageBackground,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import { images } from '@/constants/images';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';

type TabIconProps = {
  focused: boolean;
  icon: React.ReactNode;
  title: string;
};

const TabIcon: React.FC<TabIconProps> = ({ focused, icon, title }) => {
  if (focused) {
    return (
      <ImageBackground
        className="flex flex-row w-full flex-1 min-w-28 min-h-16 mt-4 justify-center items-center rounded-full overflow-hidden "
        source={images.highlight}
      >
        {icon}
        <Text className="text-secondary text-base font-semibold ml-2">
          {title}
        </Text>
      </ImageBackground>
    );
  } else {
    return (
      <View className="flex flex-row flex-1 size-full min-w-28 min-h-11 justify-center items-end  ">
        {icon}
      </View>
    );
  }
};

const _Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        },
        tabBarStyle: {
          backgroundColor: '#0f0D23',
          borderRadius: 50,
          marginHorizontal: 20,
          marginBottom: 20,
          height: 52,
          position: 'absolute',
          overflow: 'hidden',
          borderWidth: 1,
          borderColor: '#0f0D23',
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon={
                <AntDesign
                  name="home"
                  size={24}
                  color={focused ? '#151312' : '#A8B5DB'}
                />
              }
              title="Home"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon={
                <AntDesign
                  name="search1"
                  size={24}
                  color={focused ? '#151312' : '#A8B5DB'}
                />
              }
              title="Search"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon={
                <Feather
                  name="bookmark"
                  size={24}
                  color={focused ? '#151312' : '#A8B5DB'}
                />
              }
              title="Saved"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon={
                <AntDesign
                  name="user"
                  size={24}
                  color={focused ? '#151312' : '#A8B5DB'}
                />
              }
              title="Profile"
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default _Layout;

const styles = StyleSheet.create({});
