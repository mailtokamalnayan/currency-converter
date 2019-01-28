import React from "react";
import PropTypes from "prop-types";
import Icon from "react-native-vector-icons/Feather";

import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  row: {
    borderBottomWidth: 0.5,
    marginLeft: 16,
    paddingRight: 16,
    paddingVertical: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: "#dddddd",
    fontSize: 16
  }
});

const ListItem = ({ text, onPress, selected }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.row}>
      <Text>{text}</Text>
      {selected ? <Icon name="check" size={16} color="#007aff" /> : null}
    </View>
  </TouchableOpacity>
);

ListItem.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
  selected: PropTypes.bool
};

export default ListItem;
