import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import Switcher from "./components/Switcher";

/* Root Navigation and the header styling. */
const Stack = createStackNavigator();

const Root = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      // Action bar is styled.
      options={{
        headerTitle: "News",
        headerTitleStyle: {
          color: "#fff",
          fontSize: 40,
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

export default Root;
