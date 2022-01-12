import { StyleSheet, Dimensions } from "react-native";

export const styles = StyleSheet.create({
  sorting_options_container: {
    backgroundColor: "white",
    borderRadius: 10,
    width: "90%",
    height: Dimensions.get("window").height / 2,
    padding: 25,
    justifyContent: "space-around",
    alignSelf: "center",
    top: Dimensions.get("window").height / 4,
  },
});
