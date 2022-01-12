import React, { useReducer } from "react";
import { SORTING_OPTIONS } from "../../types";
import { InitialStateType, TransactionActionKind } from "./types";
import { getTransactions } from "../../services/transaction-service";
import { transactionReducer } from "./reducer";
import { sortAndFilterTransactionData } from "../../utils";

// defaultState
const initialState = {
  trasactionList: [],
  sortingMethod: SORTING_OPTIONS.URUTKAN,
  keyword: "",
  loading: true,
};

// initialize the Context
const TransacationContext = React.createContext<{
  state: InitialStateType;
  fetchTransactionList: () => Promise<void>;
  changeSortingMethod: (param: string) => void;
  searchTransactionByKeyword: (param: string | null) => void;
}>({
  state: initialState,
  fetchTransactionList: async () => {},
  changeSortingMethod: (param: string) => {},
  searchTransactionByKeyword: (param: string | null) => {},
});

// create the provider
export const TransactionProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(transactionReducer, initialState);

  const fetchTransactionList = async () => {
    // fetch api
    const data = await getTransactions();

    // parse data from object to array
    const formatedData = Object.keys(data).map(key => data[key]);

    // sort and filter data based on keyword and sorting method
    const sortedAndFilteredData = sortAndFilterTransactionData(
      formatedData,
      state.keyword,
      state.sortingMethod
    );

    dispatch({
      type: TransactionActionKind.SET_TRANSACTION,
      payload: sortedAndFilteredData,
    });
  };

  const changeSortingMethod = (sortingMethod: string) => {
    dispatch({
      type: TransactionActionKind.SORTING_DATA,
      payload: sortingMethod,
    });
  };

  const searchTransactionByKeyword = (keyword: string | null) => {
    dispatch({
      type: TransactionActionKind.SEARCH_DATA,
      payload: keyword,
    });
  };

  return (
    <TransacationContext.Provider
      value={{
        state,
        fetchTransactionList,
        changeSortingMethod,
        searchTransactionByKeyword,
      }}
    >
      {children}
    </TransacationContext.Provider>
  );
};

export default TransacationContext;
