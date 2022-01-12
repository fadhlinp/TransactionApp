import React, { useCallback, useContext } from "react";
import { View } from "react-native";
import RadioButton from "../../../components/RadioButton";
import TransacationContext from "../../../context/TransactionContext";
import { SORTING_OPTIONS } from "../../../types";
import { styles } from "./styles";

interface ISortingOptions {
  onSelectOptions: () => void;
}

const SortingOptions: React.FC<ISortingOptions> = ({ onSelectOptions }) => {
  // get sortingMethod from transactioncontext
  const {
    state: { sortingMethod },
    changeSortingMethod,
  } = useContext(TransacationContext);

  const onCheckHandler = useCallback((label: string) => {
    changeSortingMethod(label);
    onSelectOptions();
  }, []);

  return (
    <View style={[styles.sorting_options_container]}>
      <RadioButton
        label={SORTING_OPTIONS.URUTKAN}
        checked={sortingMethod === SORTING_OPTIONS.URUTKAN}
        onCheck={onCheckHandler}
      />
      <RadioButton
        label={SORTING_OPTIONS.NAMA_ASC}
        checked={sortingMethod === SORTING_OPTIONS.NAMA_ASC}
        onCheck={onCheckHandler}
      />
      <RadioButton
        label={SORTING_OPTIONS.NAMA_DESC}
        checked={sortingMethod === SORTING_OPTIONS.NAMA_DESC}
        onCheck={onCheckHandler}
      />
      <RadioButton
        label={SORTING_OPTIONS.TANGGAL_DESC}
        checked={sortingMethod === SORTING_OPTIONS.TANGGAL_DESC}
        onCheck={onCheckHandler}
      />
      <RadioButton
        label={SORTING_OPTIONS.TANGGAL_ASC}
        checked={sortingMethod === SORTING_OPTIONS.TANGGAL_ASC}
        onCheck={onCheckHandler}
      />
    </View>
  );
};

export default React.memo(SortingOptions);
