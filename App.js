import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

// import BottomNavigation from "./components/BottomNavigation";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>8/10/23 - Trying to Test Bottom and eslint</Text>
      {/* <BottomNavigation/> */}
      <StatusBar style="auto" />
      <Button styles={styles.button} title="Hey!" />
    </View>
  );
}

///

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
    alignItems: "center",
    justifyContent: "center",
  },
});
