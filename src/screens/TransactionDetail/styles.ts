import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  id_transaction: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#ccc",
    paddingHorizontal: 15,
    height: 60,
    backgroundColor: "white",
  },
  transaction_detail_header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingHorizontal: 15,
    height: 60,
    backgroundColor: "white",
  },
  transaction_detail_content: {
    paddingHorizontal: 15,
    backgroundColor: "white",
    paddingVertical: 10,
  },
  transaction_detail_content_bank: {
    flexDirection: "row",
    alignItems: "center",
  },
  transaction_detail_description: {
    flexDirection: "row",
  },
});
