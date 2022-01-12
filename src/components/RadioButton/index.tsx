import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { textStyle } from "../../assets/base-styles";
import { styles } from "./styles";

interface IRadioButton {
  label: string;
  checked: boolean;
  onCheck: (label: string) => void;
}

/**
 * RadioButton Component
 */

const RadioButton: React.FC<IRadioButton> = ({ label, checked, onCheck }) => {
  return (
    <TouchableOpacity
      style={styles.radio_button_container}
      onPress={() => onCheck(label)}
    >
      {checked ? (
        <View style={styles.radio_button_unchecked}>
          <View style={styles.radio_button_checked} />
        </View>
      ) : (
        <View style={styles.radio_button_unchecked}></View>
      )}
      <Text style={textStyle.regular}>{label}</Text>
    </TouchableOpacity>
  );
};

export default React.memo(RadioButton);
