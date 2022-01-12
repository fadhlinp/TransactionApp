import React from "react";
import {
  View,
  Modal as MModal,
  TouchableWithoutFeedback,
  StyleSheet,
} from "react-native";
import { styles } from "./styles";

type IModal = {
  visible: boolean;
  onClose: () => void;
  renderChild: () => JSX.Element;
};

/**
 * Base Modal
 */

const Modal: React.FC<IModal> = ({ visible, onClose, renderChild }) => {
  return (
    <MModal
      visible={visible}
      animationType="fade"
      onRequestClose={onClose}
      transparent
    >
      <TouchableWithoutFeedback onPress={onClose} accessible={false}>
        <View style={[StyleSheet.absoluteFill, styles.modal_container]}></View>
      </TouchableWithoutFeedback>
      {renderChild()}
    </MModal>
  );
};

export default React.memo(Modal);
