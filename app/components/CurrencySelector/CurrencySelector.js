import React from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  roundButton: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    color: "white"
  }
});

const CurrencySelector = props => {
  const { onPress, buttonText } = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.roundButton}>
        <Text style={{ color: "white" }}>{buttonText}</Text>
      </View>
    </TouchableOpacity>
  );
};

CurrencySelector.propTypes = {
  onPress: PropTypes.func,
  buttonText: PropTypes.string
};

export default CurrencySelector;
