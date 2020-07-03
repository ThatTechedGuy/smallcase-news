import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import HomeScreen from "./src/screens/HomeScreen";

const Stack = createStackNavigator();

const App = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={HomeScreen} options={{headerTitle: 'News'}}></Stack.Screen>
  </Stack.Navigator>
);

export default () => (
  <NavigationContainer>
    <App />
  </NavigationContainer>
);
