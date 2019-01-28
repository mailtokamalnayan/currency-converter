import React from "react";
import PropTypes from "prop-types";
import { View, Text } from "react-native";
import NumberFormat from "react-number-format";

const QuotePriceText = props => {
  const { quotePrice, quoteCurrency } = props;
  return (
    <View style={{ marginTop: 36 }}>
      <View
        style={{
          marginHorizontal: 24,
          marginBottom: 8,
          flexDirection: "row",
          justifyContent: "center"
        }}
      >
        <NumberFormat
          value={quotePrice}
          displayType={"text"}
          thousandSeparator={true}
          renderText={value => (
            <Text
              adjustsFontSizeToFit
              numberOfLines={1}
              style={{
                fontSize: 64,
                color: "#fff",
                textAlign: "center",
                fontWeight: "300"
              }}
            >
              {value}
            </Text>
          )}
        />
        <Text
          style={{
            color: "rgba(255,255,255, 0.2)",
            marginLeft: 4,
            marginTop: 8
          }}
        >
          {quoteCurrency}
        </Text>
      </View>
    </View>
  );
};

QuotePriceText.propTypes = {
  quoteCurrency: PropTypes.string,
  quotePrice: PropTypes.string
};

export default QuotePriceText;
