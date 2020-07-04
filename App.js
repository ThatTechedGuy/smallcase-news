import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider as PaperProvider, DefaultTheme } from "react-native-paper";
import { Provider as ViewProvider } from "./src/context/ViewContext";
import Root from "./src/Root";

const App = () => <Root />;

const theme = {
  ...DefaultTheme,
  roundness: 10,
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
