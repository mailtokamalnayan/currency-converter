import React, { Component } from "React";
import PropTypes from "prop-types";
import { SafeAreaView, FlatList, View, StatusBar } from "react-native";
import { connect } from "react-redux";
import currencies from "../data/currencies";
import ListItem from "../components/List";
import { changeBaseCurrency, changeQuoteCurrency } from "../actions/currencies";

class CurrencyList extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    dispatch: PropTypes.func,
    baseCurrency: PropTypes.string,
    quoteCurrency: PropTypes.string
  };
  handlePress = currency => {
    const { type } = this.props.navigation.state.params;
    if (type === "base") {
      this.props.dispatch(changeBaseCurrency(currency));
    } else if (type === "quote") {
      this.props.dispatch(changeQuoteCurrency(currency));
    }
    console.log("Row Pressed");
    this.props.navigation.goBack(null);
  };
  render() {
    let comparisonCurrency = this.props.baseCurrency;
    if (this.props.navigation.state.params.type === "quote") {
      comparisonCurrency = this.props.quoteCurrency;
    }

    return (
      <View style={{ flex: 1, marginBottom: 24 }}>
        <StatusBar barStyle="default" />
        <SafeAreaView>
          <FlatList
            data={currencies}
            keyExtractor={item => item}
            renderItem={({ item }) => (
              <ListItem
                text={item}
                selected={item === comparisonCurrency}
                onPress={() => this.handlePress(item)}
              />
            )}
          />
        </SafeAreaView>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    baseCurrency: state.currencies.baseCurrency,
    quoteCurrency: state.currencies.quoteCurrency
  };
};

export default connect(mapStateToProps)(CurrencyList);
