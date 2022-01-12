import { StyleSheet } from "react-native";
import { Colors } from "../../assets/base-styles/colors";

export const styles = StyleSheet.create({
  searchbar_container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.content,
    borderRadius: 5,
    height: 50,
    paddingHorizontal: 5,
    marginBottom: 5,
  },
  searchbar_input: {
    flex: 1,
    marginHorizontal: 5,
  },
  searchbar_button: {
    flexDirection: "row",
    alignItems: "center",
  },
});
