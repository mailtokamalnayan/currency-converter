import React from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import styles from "./styles";
import LinearGradient from "react-native-linear-gradient";

const Container = ({ children }) => (
  <View style={styles.container}>
    <LinearGradient
      style={{ flex: 1 }}
      colors={["#0F2027", "#203A43", "#2C5364"]}
    >
      {children}
    </LinearGradient>
  </View>
);

Container.propTypes = {
  children: PropTypes.any
};

export default Container;
