import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { Provider as PaperProvider, DefaultTheme } from "react-native-paper";
import Root from "./src/Root";
import { Provider as ViewProvider } from "./src/context/ViewContext";
import { View } from "react-native";

const App = () => <Root />;

const theme = {
  ...DefaultTheme,
  roundness: 5,
};

export default () => {
  return (
    <ViewProvider>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <App />
        </NavigationContainer>
      </PaperProvider>
    </ViewProvider>
  );
};
