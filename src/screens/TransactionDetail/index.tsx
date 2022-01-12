import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import * as Clipboard from "expo-clipboard";
import Toast from "react-native-root-toast";
import { mainStyle, textStyle } from "../../assets/base-styles";
import { styles } from "./styles";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../../types";
import TransactionDescription from "./TransactionDescription";

type TransactionDetailProps = {
  route: RouteProp<RootStackParamList, "TransactionDetail">;
};

const TransactionDetail: React.FC<TransactionDetailProps> = ({ route }) => {
  const { transaction } = route.params;

  const onPressCopyHandler = () => {
    Clipboard.setString(transaction.id);
    Toast.show("Id transaksi berhasil disalin", {
      duration: Toast.durations.SHORT,
      position: Toast.positions.BOTTOM,
      hideOnPress: true,
    });
  };

  return (
    <View style={mainStyle.container}>
      <View style={styles.id_transaction}>
        <Text style={textStyle.bold}>ID TRANSAKSI: #{transaction.id}</Text>

        <TouchableOpacity onPress={onPressCopyHandler}>
          <Image
            source={require("../../assets/img/copy.png")}
            style={{ width: 25, height: 25, marginLeft: 10 }}
          />
        </TouchableOpacity>
      </View>

      <TransactionDescription transaction={transaction} />
    </View>
  );
};

export default TransactionDetail;
