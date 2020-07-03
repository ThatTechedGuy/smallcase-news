import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import Switcher from "./components/Switcher";
import DetailScreen from "./screens/DetailScreen";
import { colors } from "./constants";

/* Root Navigation and the header styling. */
const Stack = createStackNavigator();

const headerStyle = {
  backgroundColor: colors.PURPLE,
  height: 120,
};

const headerTitleStyle = {
  color: colors.WHITE,
  fontSize: 40,
};

const Root = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        headerTitle: "News",
        headerTitleStyle,
        headerRight: () => <Switcher />,
        headerStyle,
      }}
    />
    <Stack.Screen
      name="Detail"
      component={DetailScreen}
      options={{
        headerTitle: "",
        headerStyle,
      }}
    />
  </Stack.Navigator>
);

export default Root;
