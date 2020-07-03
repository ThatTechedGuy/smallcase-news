import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import Switcher from "./src/components/Switcher";
import { Provider as PaperProvider, DefaultTheme } from "react-native-paper";


const Stack = createStackNavigator();

const App = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
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
};

const theme = {
  ...DefaultTheme,
  roundness: 2,
};

export default () => {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <App />
      </NavigationContainer>
    </PaperProvider>
  );
};

// dark: true,
// mode: "exact",
// colors: {
//   ...DefaultTheme.colors,
//   primary: "#7a44cf",
//   accent: "#f1c40f",
//   background: '#333333',
//   surface: '#121212',
//   text: '#fff'
// },
