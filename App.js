import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { Provider as PaperProvider, DefaultTheme } from "react-native-paper";
import Root from "./src/Root";


const App = () => <Root />;

const theme = {
  ...DefaultTheme,
  roundness: 5,
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
