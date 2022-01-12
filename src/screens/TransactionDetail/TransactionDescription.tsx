import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { textStyle } from "../../assets/base-styles";
import { Colors } from "../../assets/base-styles/colors";
import { fontSize } from "../../assets/base-styles/fontSize";
import { TransacationType } from "../../types";
import { formatAmount, formatDate } from "../../utils";
import { styles } from "./styles";

interface ITransactionDescription {
  transaction: TransacationType;
}

const TransactionDescription: React.FC<ITransactionDescription> = ({
  transaction,
}) => {
  const [isVisible, setIsVisible] = React.useState(true);

  const onClickHandler = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <View style={styles.transaction_detail_header}>
        <Text style={textStyle.bold}>DETAIL TRANSAKSI</Text>

        <TouchableOpacity onPress={onClickHandler}>
          <Text style={[textStyle.regular, { color: Colors.primary }]}>
            {isVisible ? "Tutup" : "Lihat"}
          </Text>
        </TouchableOpacity>
      </View>

      {isVisible && (
        <View style={styles.transaction_detail_content}>
          <View style={styles.transaction_detail_content_bank}>
            <Text style={[textStyle.bold, { fontSize: fontSize.h3 }]}>
              {transaction.sender_bank.toUpperCase()}
            </Text>
            <Image
              source={require("../../assets/img/arrow-right.png")}
              style={{ width: 15, height: 15, marginHorizontal: 2 }}
            />
            <Text style={[textStyle.bold, { fontSize: fontSize.h3 }]}>
              {transaction.beneficiary_bank.toUpperCase()}
            </Text>
          </View>

          <View style={styles.transaction_detail_description}>
            <View style={{ width: "60%" }}>
              <View style={{ marginVertical: 10 }}>
                <Text style={textStyle.bold}>
                  {transaction.beneficiary_name.toUpperCase()}
                </Text>
                <Text style={textStyle.regular}>
                  {transaction.account_number}
                </Text>
              </View>

              <View style={{ marginVertical: 10 }}>
                <Text style={textStyle.bold}>BERITA TRANSFER</Text>
                <Text style={textStyle.regular}>{transaction.remark}</Text>
              </View>

              <View style={{ marginVertical: 10 }}>
                <Text style={textStyle.bold}>WAKTU DIBUAT</Text>
                <Text style={textStyle.regular}>
                  {formatDate(transaction.created_at)}
                </Text>
              </View>
            </View>

            <View style={{ width: "40%" }}>
              <View style={{ marginVertical: 10 }}>
                <Text style={textStyle.bold}>NOMINAL</Text>
                <Text style={textStyle.regular}>
                  {formatAmount(transaction.amount)}
                </Text>
              </View>

              <View style={{ marginVertical: 10 }}>
                <Text style={textStyle.bold}>KODE UNIK</Text>
                <Text style={textStyle.regular}>
                  {transaction.unique_code.toString()}
                </Text>
              </View>
            </View>
          </View>
        </View>
      )}
    </>
  );
};

export default React.memo(TransactionDescription);
