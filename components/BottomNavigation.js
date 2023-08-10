import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

// NewsFeed, FollowingNews, Profile / Home, Settings, PostAPop;
function BottomNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="PopFeed" />
        <Tab.Screen name="FollowingPops" />
        <Tab.Screen name="Profile" />
        <Tab.Screen name="CreatePop" />
        <Tab.Screen name="Settings" />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default BottomNavigation;
