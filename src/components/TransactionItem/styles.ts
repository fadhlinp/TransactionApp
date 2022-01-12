import { StyleSheet } from "react-native";
import { Colors } from "../../assets/base-styles/colors";

export const styles = StyleSheet.create({
  transactionitem_container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.content,
    marginTop: 5,
    paddingHorizontal: 5,
    borderRadius: 5,
    height: 88,
  },
  transactionitem_container_border_success: {
    borderLeftWidth: 5,
    borderLeftColor: Colors.green,
  },
  transactionitem_container_border_pending: {
    borderLeftWidth: 5,
    borderLeftColor: Colors.primary,
  },
  transactionitem_description: {
    flex: 2,
    paddingLeft: 10,
  },
  transactionitem_status: {
    flex: 1,
    alignItems: "flex-end",
  },
  transactionitem_description_bank: {
    flexDirection: "row",
    alignItems: "center",
  },
  transactionitem_description_amount: {
    flexDirection: "row",
    alignItems: "center",
  },
  dotseparator: {
    width: 5,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: "#000",
    margin: 4,
    marginTop: 7,
  },
  transactionitem_status_success: {
    backgroundColor: Colors.green,
    paddingHorizontal: 7,
    paddingVertical: 3,
    borderRadius: 5,
  },
  transactionitem_status_pending: {
    borderWidth: 1,
    borderColor: Colors.primary,
    paddingHorizontal: 7,
    paddingVertical: 3,
    borderRadius: 5,
  },
});
