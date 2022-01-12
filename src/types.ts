import { NativeStackNavigationProp } from "@react-navigation/native-stack";

// define type for route name and params
export type RootStackParamList = {
  TransactionList: undefined;
  TransactionDetail: { transaction: TransacationType };
};

export type AppStackProp = NativeStackNavigationProp<RootStackParamList>;

// define type for transaction data
export type TransacationType = {
  id: string;
  amount: number;
  unique_code: number;
  status: string;
  sender_bank: string;
  account_number: string;
  beneficiary_name: string;
  beneficiary_bank: string;
  remark: string;
  created_at: string;
  completed_at: string;
  fee: number;
};

// enum with all the types of sorting method
export const enum SORTING_OPTIONS {
  URUTKAN = "URUTKAN",
  NAMA_ASC = "Nama A-Z",
  NAMA_DESC = "Nama Z-A",
  TANGGAL_DESC = "Tanggal Terbaru",
  TANGGAL_ASC = "Tanggal Terlama",
}
