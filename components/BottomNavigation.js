import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// NewsFeed, FollowingNews, Profile / Home, Settings, PostAPop;
function BottomNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen />
        <Tab.Screen />
        <Tab.Screen />
        <Tab.Screem />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default BottomNavigation;
