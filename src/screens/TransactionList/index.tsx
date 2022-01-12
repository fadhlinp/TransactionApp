import React, { useEffect, useState, useCallback, useContext } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { mainStyle } from "../../assets/base-styles";
import SearchBar from "../../components/SearchBar";
import TransactionItem from "../../components/TransactionItem";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { AppStackProp, TransacationType } from "../../types";
import Modal from "../../components/Modal";
import SortingOptions from "./SortingOptions";
import TransactionContext from "../../context/TransactionContext";
import { Colors } from "../../assets/base-styles/colors";

const TransactionList = () => {
  const navigation = useNavigation<AppStackProp>();

  // get trasactionList, sortingMethod, loading, and keyword from transactioncontext
  const {
    state: { trasactionList, sortingMethod, loading, keyword },
    fetchTransactionList,
    searchTransactionByKeyword,
  } = useContext(TransactionContext);

  const [isShowModal, setShowModal] = useState(false);

  useEffect(() => {
    // fetch transaction data
    fetchTransactionList();
  }, [keyword, sortingMethod]);

  const onItemClickHandler = useCallback((transaction: TransacationType) => {
    navigation.navigate("TransactionDetail", { transaction });
  }, []);

  const onSearchHandler = useCallback(
    (keyword: string | null) => {
      searchTransactionByKeyword(keyword);
    },
    [keyword]
  );

  const onPressSortButtonHandler = useCallback(() => {
    setShowModal(!isShowModal);
  }, []);

  const onSelectOptionsHandler = () => {
    setShowModal(false);
  };

  const onCloseModal = useCallback(() => setShowModal(false), []);

  const renderContentModal = useCallback(
    () => <SortingOptions onSelectOptions={onSelectOptionsHandler} />,
    []
  );

  return (
    <SafeAreaView style={mainStyle.container} edges={["bottom"]}>
      <SearchBar
        onSearch={onSearchHandler}
        onPressSortButton={onPressSortButtonHandler}
        sortingMethod={sortingMethod}
      />

      {!loading && (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={trasactionList}
          keyExtractor={item => `${item.id}`}
          renderItem={({ item }) => (
            <TransactionItem item={item} onPressItem={onItemClickHandler} />
          )}
          ListEmptyComponent={<EmptyComponent />}
        />
      )}

      {loading && (
        <ActivityIndicator
          animating={loading}
          size="small"
          color={Colors.primary}
          style={{ marginTop: 30 }}
        />
      )}

      {isShowModal && (
        <Modal
          visible={isShowModal}
          onClose={onCloseModal}
          renderChild={renderContentModal}
        />
      )}
    </SafeAreaView>
  );
};

const EmptyComponent = React.memo(() => (
  <View style={styles.transactions_empty}>
    <Text>Tidak ada transaksi</Text>
  </View>
));

export default TransactionList;
