import React, { Component } from 'react';
import { View, StatusBar, TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { swapCurrency, changeCurrencyAmount } from '../actions/currencies';

import { Container } from '../components/Container'
import { InputWithButton } from '../components/TextInput';

const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '53.2';

class Home extends Component {
    static propTypes = {
        navigation: PropTypes.object,
        dispatch: PropTypes.func,
        baseCurrency: PropTypes.string,
        quoteCurrency: PropTypes.string
    }
    handlePressBaseCurrency = () => {
        console.log('Press base');
        this.props.navigation.navigate('CurrencyList', {title: 'Base Currency'});
    }
    handlePressQuoteCurrency = () => {
        console.log("Press Quote");
        this.props.navigation.navigate('CurrencyList', {title: 'Quote currency'});
    }
    handleTextChange = (text) => {
        this.props.dispatch(changeCurrencyAmount(text));
    }
    handleSwapCurrency = () => {
        this.props.dispatch(swapCurrency());
    };

    render() {
        return (
        <Container>
            <StatusBar barStyle={"default"}/>
            <InputWithButton
                defaultValue={TEMP_BASE_PRICE}
                onPress={this.handlePressBaseCurrency}
                buttonText={this.props.baseCurrency}
                keyboardType="numeric" 
                onChangeText={this.handleTextChange}/>
            <InputWithButton 
                editable={false}
                onPress={this.handlePressQuoteCurrency}
                buttonText={this.props.quoteCurrency}
                value={TEMP_QUOTE_PRICE}
                />
            <View />
            <TouchableOpacity onPress={this.handleSwapCurrency}>
                <Text>Swap currency</Text>
            </TouchableOpacity>
        </Container>
        )
    }
}

const mapStateToProps = (state) => {
    const baseCurrency = state.currencies.baseCurrency;
    const quoteCurrency = state.currencies.quoteCurrency;
    console.log('Base: ', baseCurrency);
    return {
        baseCurrency,
        quoteCurrency
    };
};

export default connect(mapStateToProps)(Home);