import React, { Component } from "react";
import {
  View,
  StatusBar,
  TouchableOpacity,
  Text,
  SafeAreaView
} from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { connectAlert } from "../components/Alert";

import {
  swapCurrency,
  changeCurrencyAmount,
  getInitialConversion
} from "../actions/currencies";

import { Container } from "../components/Container";
import { InputWithButton } from "../components/TextInput";
import { CurrencySelector } from "../components/CurrencySelector";

class Home extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    dispatch: PropTypes.func,
    baseCurrency: PropTypes.string,
    quoteCurrency: PropTypes.string,
    amount: PropTypes.number,
    conversionRate: PropTypes.number,
    isFetching: PropTypes.bool,
    currencyError: PropTypes.string,
    alertWithType: PropTypes.func
  };

  componentWillMount() {
    this.props.dispatch(getInitialConversion());
  }

  componentWillReceiveProps(nextProps) {
    const { currencyError, alertWithType } = this.props;
    if (nextProps.currencyError && !currencyError) {
      //TODO: Use AlertWithType
      alert(nextProps.currencyError, "Error", nextProps.currencyError);
    }
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
        <SafeAreaView>
          <StatusBar barStyle={"default"} />

          <CurrencySelector
            buttonText={this.props.baseCurrency}
            onPress={this.handlePressBaseCurrency}
          />
          <CurrencySelector
            buttonText={this.props.quoteCurrency}
            onPress={this.handlePressQuoteCurrency}
          />

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
        </SafeAreaView>
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
    isFetching: conversionSelector.isFetching,
    currencyError: state.currencies.error
  };
};

export default connect(mapStateToProps)(connectAlert(Home));
