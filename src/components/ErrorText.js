import React from "react";
import { Text, View } from "react-native";
import { Button } from "react-native-paper";

class ErrorFallBack extends React.PureComponent {
  render() {
    const { errorText, handlePress } = this.props;
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 20 }}>
        <Text style={{ color: "red", fontSize: 40, fontWeight: "bold", textAlign: "center" }}>
          Error
        </Text>
        <Text style={{ color: "red", fontSize: 20, fontWeight: "normal" }}>{errorText}</Text>
        <Text style={{ color: "grey", fontSize: 20, fontWeight: "bold", textAlign: "center" }}>
          {
            "Check your net connection or restart the application.\nIf this is a server problem we are already working on it."
          }
        </Text>
        <Button mode="contained" onPress={handlePress}>
          {"Try refreshing"}
        </Button>
      </View>
    );
  }
}

export default ErrorFallBack;
