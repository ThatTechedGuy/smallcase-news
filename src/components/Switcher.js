import React, { useContext } from "react";
import SwitchSelector from "react-native-switch-selector";
import { COMFY, colors, COMPACT } from "./../constants";
import { Context as ViewContext } from "../context/ViewContext";

const options = [
  { label: COMFY, value: COMFY },
  { label: COMPACT, value: COMPACT },
];

class Switcher extends React.PureComponent {
  render() {
    return (
      <ViewContext.Consumer>
        {({switchView}) => (
          <SwitchSelector
            initial={0}
            textColor={colors.PURPLE}
            selectedColor={colors.WHITE}
            buttonColor={colors.PURPLE}
            borderColor={colors.PURPLE}
            hasPadding
            onPress={switchView}
            options={options}
            style={{ marginRight: 20, width: 200 }}
          />
        )}
      </ViewContext.Consumer>
    );
  }
}

export default Switcher;
