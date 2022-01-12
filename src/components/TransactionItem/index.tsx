import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { textStyle } from "../../assets/base-styles";
import { TransacationType } from "../../types";
import { formatAmount, formatDate } from "../../utils";
import { styles } from "./styles";

// status transaction
const enum STATUS {
  SUCCESS = "SUCCESS",
  PENDING = "PENDING",
}

interface ITransactionItem {
  item: TransacationType;
  onPressItem: (item: TransacationType) => void;
}

const TransactionItem: React.FC<ITransactionItem> = ({ item, onPressItem }) => {
  const borderLeftStyle =
    item.status === STATUS.SUCCESS
      ? styles.transactionitem_container_border_success
      : styles.transactionitem_container_border_pending;

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={[styles.transactionitem_container, borderLeftStyle]}
      onPress={() => onPressItem(item)}
    >
      <View style={styles.transactionitem_description}>
        <View style={styles.transactionitem_description_bank}>
          <Text style={textStyle.bold}>{item.sender_bank.toUpperCase()}</Text>
          <Image
            source={require("../../assets/img/arrow-right.png")}
            style={{ width: 15, height: 15, marginHorizontal: 2 }}
          />
          <Text style={textStyle.bold}>
            {item.beneficiary_bank.toUpperCase()}
          </Text>
        </View>

        <Text style={textStyle.regular}>
          {item.beneficiary_name.toUpperCase()}
        </Text>

        <View style={styles.transactionitem_description_amount}>
          <Text style={textStyle.regular}>{formatAmount(item.amount)}</Text>
          <View style={styles.dotseparator}></View>
          <Text style={textStyle.regular}>{formatDate(item.completed_at)}</Text>
        </View>
      </View>

      <View style={styles.transactionitem_status}>
        {item.status === STATUS.SUCCESS && (
          <View style={styles.transactionitem_status_success}>
            <Text style={[textStyle.regular, { color: "white" }]}>
              Berhasil
            </Text>
          </View>
        )}
        {item.status === STATUS.PENDING && (
          <View style={styles.transactionitem_status_pending}>
            <Text style={[textStyle.regular]}>Pengecekan</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(TransactionItem);
