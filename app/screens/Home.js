import React, { Component } from "react";
import { View, StatusBar, TouchableOpacity, Text } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  swapCurrency,
  changeCurrencyAmount,
  getInitialConversion
} from "../actions/currencies";

import { Container } from "../components/Container";
import { InputWithButton } from "../components/TextInput";

class Home extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    dispatch: PropTypes.func,
    baseCurrency: PropTypes.string,
    quoteCurrency: PropTypes.string,
    amount: PropTypes.number,
    conversionRate: PropTypes.number,
    isFetching: PropTypes.bool
  };

  componentWillMount() {
    this.props.dispatch(getInitialConversion());
  }

  handlePressBaseCurrency = () => {
    console.log("Press base");
    this.props.navigation.navigate("CurrencyList", {
      title: "Base Currency",
      type: "base"
    });
  };
  handlePressQuoteCurrency = () => {
    console.log("Press Quote");
    this.props.navigation.navigate("CurrencyList", {
      title: "Quote currency",
      type: "quote"
    });
  };
  handleTextChange = text => {
    const { dispatch } = this.props;
    dispatch(changeCurrencyAmount(text));
  };
  handleSwapCurrency = () => {
    this.props.dispatch(swapCurrency());
  };

  render() {
    let quotePrice = (this.props.amount * this.props.conversionRate).toFixed(2);
    if (this.props.isFetching) {
      quotePrice = "...";
    }
    return (
      <Container>
        <StatusBar barStyle={"default"} />
        <InputWithButton
          defaultValue={this.props.amount.toString()}
          onPress={this.handlePressBaseCurrency}
          buttonText={this.props.baseCurrency}
          keyboardType="numeric"
          onChangeText={this.handleTextChange}
        />
        <InputWithButton
          editable={false}
          onPress={this.handlePressQuoteCurrency}
          buttonText={this.props.quoteCurrency}
          value={quotePrice}
        />
        <View />
        <TouchableOpacity onPress={this.handleSwapCurrency}>
          <Text>Swap currency</Text>
        </TouchableOpacity>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  const baseCurrency = state.currencies.baseCurrency;
  const quoteCurrency = state.currencies.quoteCurrency;
  const conversionSelector = state.currencies.conversions[baseCurrency] || {};
  const rates = conversionSelector.rates || {};
  return {
    baseCurrency,
    quoteCurrency,
    amount: state.currencies.amount,
    conversionRate: rates[quoteCurrency] || 0,
    isFetching: conversionSelector.isFetching
  };
};

export default connect(mapStateToProps)(Home);
