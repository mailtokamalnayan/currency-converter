import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import PropTypes from 'prop-types';

import { Container } from '../components/Container'
import { InputWithButton } from '../components/TextInput';

const TEMP_BASE_CURR = "SGD";
const TEMP_QUOTE_CURR = "INR";
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '53.2';

class Home extends Component {
    static propTypes = {
        navigation: PropTypes.object,
    }
    handlePressBaseCurrency = () => {
        console.log('Press base');
        this.props.navigation.navigate('CurrencyList', {title: 'Base Currecny'});
    }
    handlePressQuoteCurrency = () => {
        console.log("Press Quote");
        this.props.navigation.navigate('CurrencyList', {title: 'Quote currency'});
    }
    handleTextChange = (text) => {
        console.log("Changed text", text);
    }

    render() {
        return (
        <Container>
            <StatusBar barStyle={"default"}/>
            <InputWithButton
                defaultValue={TEMP_BASE_PRICE}
                onPress={this.handlePressBaseCurrency}
                buttonText={TEMP_BASE_CURR}
                keyboardType="numeric" 
                onChangeText={this.handleTextChange}/>
            <InputWithButton 
                editable={false}
                onPress={this.handlePressQuoteCurrency}
                buttonText={TEMP_QUOTE_CURR}
                value={TEMP_QUOTE_PRICE}
                />
            <View />
        </Container>
        )
    }
}

export default Home;