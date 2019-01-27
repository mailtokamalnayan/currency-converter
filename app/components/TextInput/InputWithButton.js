import React from "react";
import PropTypes from "prop-types";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import styles from "./styles";

const InputWithButton = ({ editable, onPress, buttonText, ...props }) => {
  const containerStyles = [styles.container];
  const inputStyles = [styles.input];
  if (editable === false) {
    inputStyles.push(styles.inputDisabled);
  }

  return (
    <View style={containerStyles}>
      <TextInput editable={editable} style={inputStyles} {...props} />
      <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
};

InputWithButton.propTypes = {
  onPress: PropTypes.func,
  buttonText: PropTypes.string,
  editable: PropTypes.bool
};

export default InputWithButton;
