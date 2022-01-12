import React, { useEffect, useState } from "react";
import { StyleProp, TextInput as RNTextInput, TextStyle } from "react-native";

interface ITextInput {
  placeholder: string;
  style: StyleProp<TextStyle>;
  onChangeText: (text: string | null) => void;
}

/**
 * Base TextInput
 */

const TextInput: React.FC<ITextInput> = ({
  placeholder,
  style,
  onChangeText,
}) => {
  const [keyword, setKeyword] = useState<string | null>(null);

  // create delay debounce for typing
  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (keyword !== null) {
        onChangeText(keyword);
      }
    }, 1000);
    return () => clearTimeout(delayDebounce);
  }, [keyword]);

  return (
    <RNTextInput
      style={style}
      placeholder={placeholder}
      onChangeText={text => setKeyword(text)}
    />
  );
};

export default TextInput;
