import { Colors } from "./colors";
import { StyleSheet } from "react-native";
import { fontSize } from "./fontSize";

// base style for screen
export const mainStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 5,
  },
});

// base style for text
export const textStyle = StyleSheet.create({
  regular: {
    fontSize: fontSize.h4,
    fontWeight: "500",
    lineHeight: 20,
  },
  bold: {
    fontSize: fontSize.h4,
    fontWeight: "700",
    lineHeight: 20,
  },
});
