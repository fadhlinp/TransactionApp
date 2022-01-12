import { TransacationType } from "../../types";

// type for our state
export type InitialStateType = {
  trasactionList: TransacationType[];
  sortingMethod: string;
  keyword: string;
  loading: boolean;
};

// enum with all the types of actions to use in our reducer
export enum TransactionActionKind {
  SET_TRANSACTION = "SET_TRANSACTION",
  SORTING_DATA = "SORTING_DATA",
  SEARCH_DATA = "SEARCH_DATA",
}

// type for our actions
export type TransactionAction = {
  type: TransactionActionKind;
  payload: any;
};
