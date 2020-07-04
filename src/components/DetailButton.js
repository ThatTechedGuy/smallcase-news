import React from "react";
import { TouchableRipple, Button } from "react-native-paper";

class ContainedButton extends React.PureComponent {
  render() {
    const { handlePress, text } = this.props;

    return (
      <TouchableRipple rippleColor="rgba(0, 0, 0, .32)">
        <Button mode="contained" onPress={() => handlePress()} style={{ margin: 8 }}>
          {text}
        </Button>
      </TouchableRipple>
    );
  }
}

export default ContainedButton;
