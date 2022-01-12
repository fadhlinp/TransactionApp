import {
  InitialStateType,
  TransactionAction,
  TransactionActionKind,
} from "./types";

export const transactionReducer = (
  state: InitialStateType,
  action: TransactionAction
) => {
  const { type, payload } = action;

  switch (type) {
    case TransactionActionKind.SET_TRANSACTION:
      return {
        ...state,
        trasactionList: payload,
        loading: false,
      };
    case TransactionActionKind.SORTING_DATA:
      return {
        ...state,
        sortingMethod: payload,
        loading: true,
      };
    case TransactionActionKind.SEARCH_DATA:
      return {
        ...state,
        keyword: payload,
        loading: true,
      };
    default:
      return state;
  }
};
