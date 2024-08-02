import React from 'react'
import { Text, View } from 'react-native'
import { Tabs } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

function TabsLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "black",
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#fffff0",
          borderTopColor: "#fff",
          height: 84,
        },
        tabBarItemStyle: {
          margin: 5,
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let IconComponent;

          if (route.name === 'home') {
            IconComponent = Feather;
            iconName = 'home';
          } else if (route.name === 'favorites') {
            IconComponent = MaterialIcons;
            iconName = 'favorite-border';
          } else if (route.name === 'cart') {
            IconComponent = Ionicons;
            iconName = 'cart-outline';
          } else if (route.name === 'profile') {
            IconComponent = Feather;
            iconName = 'user';
          }

          return (
            <View style={{
              backgroundColor: focused ? '#227339' : 'transparent',
              borderRadius: 25,
              padding: 10,
            }}>
              <IconComponent name={iconName} size={size} color={color} />
            </View>
          );
        },
      })}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          title: "Favorites",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: "Cart",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
        }}
      />
    </Tabs>
  )
}

export default TabsLayout