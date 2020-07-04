import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    logErrorToMyService(error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
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
        </View>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;