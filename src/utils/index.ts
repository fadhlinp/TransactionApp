import { SORTING_OPTIONS, TransacationType } from "../types";

export const formatAmount = (amount: number) => {
  return "Rp" + amount.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
};

export const formatDate = (datetime: String) => {
  const month = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  const date = new Date(datetime.split(" ")[0]);
  const dd = date.getDate();
  const MM = date.getMonth();
  const yy = date.getFullYear();
  return `${dd} ${month[MM]} ${yy}`;
};

export const sortAndFilterTransactionData = (
  data: TransacationType[],
  keyword: string,
  sortingMethod: string
) => {
  let sortedAndFiltered = data;
  const lowerCaseKeyword = keyword.toLowerCase();
  if (keyword) {
    sortedAndFiltered = data.filter(
      d =>
        d.beneficiary_name.toLowerCase().includes(lowerCaseKeyword) ||
        d.sender_bank.toLowerCase().includes(lowerCaseKeyword) ||
        d.beneficiary_bank.toLowerCase().includes(lowerCaseKeyword) ||
        d.amount.toString().includes(lowerCaseKeyword)
    );
  }

  if (sortingMethod === SORTING_OPTIONS.NAMA_ASC) {
    sortedAndFiltered.sort(sortByNameAsc);
  } else if (sortingMethod === SORTING_OPTIONS.NAMA_DESC) {
    sortedAndFiltered.sort(sortByNameDesc);
  } else if (sortingMethod === SORTING_OPTIONS.TANGGAL_ASC) {
    sortedAndFiltered.sort(sortByDateAsc);
  } else if (sortingMethod === SORTING_OPTIONS.TANGGAL_DESC) {
    sortedAndFiltered.sort(sortByDateDesc);
  }

  return sortedAndFiltered;
};

const sortByNameAsc = (a: TransacationType, b: TransacationType) => {
  if (a.beneficiary_name > b.beneficiary_name) return 1;
  if (b.beneficiary_name > a.beneficiary_name) return -1;
  return 0;
};

const sortByNameDesc = (a: TransacationType, b: TransacationType) => {
  if (a.beneficiary_name > b.beneficiary_name) return -1;
  if (b.beneficiary_name > a.beneficiary_name) return 1;
  return 0;
};

const sortByDateAsc = (a: TransacationType, b: TransacationType) => {
  if (a.created_at > b.created_at) return 1;
  if (b.created_at > a.created_at) return -1;
  return 0;
};

const sortByDateDesc = (a: TransacationType, b: TransacationType) => {
  if (a.created_at > b.created_at) return -1;
  if (b.created_at > a.created_at) return 1;
  return 0;
};
