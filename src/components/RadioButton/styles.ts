import { StyleSheet } from "react-native";
import { Colors } from "../../assets/base-styles/colors";

export const styles = StyleSheet.create({
  radio_button_container: {
    flexDirection: "row",
    alignItems: "center",
  },
  radio_button_checked: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: Colors.primary,
  },
  radio_button_unchecked: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderColor: Colors.primary,
    borderWidth: 3,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    marginRight: 10,
  },
});
