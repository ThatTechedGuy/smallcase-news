import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import Switcher from "./src/components/Switcher";

const Stack = createStackNavigator();

const App = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        headerTitle: "News",
        headerTitleStyle: {
          color: "#fff",
          fontSize: 40
        },
        headerRight: () => <Switcher />,
        headerStyle: {
          backgroundColor: "#7a44cf",
          height: 120,
        },
      }}
    ></Stack.Screen>
  </Stack.Navigator>
);

export default () => (
  <NavigationContainer>
    <App />
  </NavigationContainer>
);
