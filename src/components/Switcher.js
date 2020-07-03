import React from "react";
import SwitchSelector from "react-native-switch-selector";

const options = [
  { label: "Compact", value: 1 },
  { label: "Comfy", value: 2 },
];

const colors = {
  purple: "#7a44cf",
  white: "#fff",
};

const Switcher = () => {
  return (
    <SwitchSelector
      initial={0}
      textColor={colors.purple} //'#7a44cf'
      selectedColor={colors.white}
      buttonColor={colors.purple}
      borderColor={colors.purple}
      hasPadding
      options={options}
      style={{ marginRight: 20, width: 200 }}
    />
  );
};

export default Switcher;
