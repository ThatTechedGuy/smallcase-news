import React from "react";
import { TouchableRipple, Button } from "react-native-paper";

class ShowMoreButton extends React.PureComponent {
  render() {
    const { handlePress, text } = this.props;

    return (
      <TouchableRipple rippleColor="rgba(0, 0, 0, .32)">
        <Button onPress={() => handlePress()}>{text}</Button>
      </TouchableRipple>
    );
  }
}

export default ShowMoreButton;
