import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { textStyle } from "../../assets/base-styles";
import { Colors } from "../../assets/base-styles/colors";
import TextInput from "../TextInput";
import { styles } from "./styles";

interface ISearchBar {
  onSearch: (keyword: string | null) => void;
  onPressSortButton: () => void;
  sortingMethod: string;
}

const SearchBar: React.FC<ISearchBar> = ({
  onSearch,
  onPressSortButton,
  sortingMethod,
}) => {
  return (
    <View style={styles.searchbar_container}>
      <Image
        source={require("../../assets/img/search-icon.png")}
        style={{ width: 25, height: 25 }}
      />

      <TextInput
        style={styles.searchbar_input}
        placeholder="Cari nama, bank, atau nominal"
        onChangeText={text => onSearch(text)}
      />

      <TouchableOpacity
        style={styles.searchbar_button}
        onPress={onPressSortButton}
      >
        <Text style={[textStyle.regular, { color: Colors.primary }]}>
          {sortingMethod}
        </Text>

        <Image
          source={require("../../assets/img/arrow-down.png")}
          style={{ width: 25, height: 25 }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default React.memo(SearchBar);
